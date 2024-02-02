import React from "react";
import { Link, useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const data = location.state;

  const dataProducts = data.map((product) => {
    console.log(product);
    return (
      <Link to={`/products/${product.id}`} state={product} key={product.id}>
        <div className="card">
          <h1>{product.title}</h1>
          <img src={product.thumbnail} />
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      </Link>
    );
  });

  return <>{dataProducts}</>;
};

export default Products;
