import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  const location = useLocation();
  const data = location.state;
  console.log(data);

  return (
    <div className="card">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <img src={data.thumbnail} />
    </div>
  );
};

export default Product;
