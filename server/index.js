const express = require("express");
const fs = require("fs");
const app = express();
var cors = require("cors");

app.use(express.json());

app.use(cors());

var corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

const products = fs.readFileSync("./products.json", "utf-8");
console.log(JSON.parse(products).products.length);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const productos = JSON.parse(products);
  product = productos.products.find((item) => item.id == req.params.id);

  if (!product) res.status(404).send("Producto no encontrado");
  else res.send(product);
});

app.post("/products", (req, res) => {
  const productos = {
    id: JSON.parse(products).products.length + 1,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    discountPercentage: req.body.discountPercentage,
    rating: req.body.rating,
    stock: req.body.stock,
    brand: req.body.brand,
    category: req.body.category,
    thumbnail: req.body.thumbnail,
    images: req.body.images,
  };
  JSON.parse(products).products.push(productos);
  res.send(productos);
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
