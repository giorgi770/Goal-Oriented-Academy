import React from "react";
import ProductCard from "./Productcard";

function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          likes={product.likes}
        />
      ))}
    </div>
  );
}

export default ProductList;