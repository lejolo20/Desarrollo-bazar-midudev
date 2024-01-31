import { useEffect, useState } from "react";
import "./App.css";

function App() {
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

  const handleSearch = (e) => {
    let dataMap = apiData.products.map((item) => {
      if (item.description.match(e)) {
        return item;
      }
    });
    dataMap = dataMap.filter((item) => item != undefined);
    return setSearch(dataMap);
  };

  const searchComponent = (e) => {
    e.prevent.default;
    console.log("click");
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
          <button
            className="btn-submit"
            type="submit"
            onClick={(e) => searchComponent(e)}
          >
            Buscar
          </button>
        </form>
      </main>
    </>
  );
}

export default App;
