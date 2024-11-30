import React from "react";

function ProductCard({ name, description, price, likes }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Likes: {likes} ❤️</p>
    </div>
  );
}

export default ProductCard;