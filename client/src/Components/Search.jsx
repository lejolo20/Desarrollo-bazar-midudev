import React from "react";

const Search = (data) => {
  console.log(data.data);
  const productsToShow = data.data.map((product) => {
    return (
      <div key={product.id}>
        <img src={product.images} alt={product.title} />

        <h1>{product.title}</h1>
        <p>{product.price}</p>
      </div>
    );
  });
  return <>{productsToShow}</>;
};

export default Search;
