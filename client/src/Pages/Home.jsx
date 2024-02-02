import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3002/products");
      const data = await res.json();
      return setApiData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const apiDataToLowerCase = apiData?.products.map((item) => {
    let newData = {
      ...item,
      brand: item.brand.toLowerCase(),
      title: item.title.toLowerCase(),
      description: item.description.toLowerCase(),
      category: item.category.toLowerCase(),
    };
    return newData;
  });

  const handleSearch = (e) => {
    let dataMap = apiDataToLowerCase.map((item) => {
      if (item.description.match(e)) {
        return item;
      }
    });

    dataMap = dataMap.filter((item) => item != undefined);

    return setSearch(dataMap);
  };
  console.log(search);
  return (
    <>
      <main className="main-container">
        <img className="img-carrito" src="Carrito.png" />
        <h2 className="title-h2">Bazar OnLine</h2>
        <form className="form-main">
          <input
            className="input1-main"
            placeholder="laptops, smartphones..."
            type="text"
            name="search"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </form>
        <Link to="/products" state={search}>
          Buscar
        </Link>
      </main>
    </>
  );
};

export default Home;
