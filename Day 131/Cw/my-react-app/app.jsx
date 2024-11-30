import React from "react";
import ProductList from "./components/ProductList";

function App() {
  const products = [
    { id: 1, name: "Laptop", description: "High performance laptop", price: 1200, likes: 100 },
    { id: 2, name: "Smartphone", description: "Latest model smartphone", price: 800, likes: 75 },
    { id: 3, name: "Headphones", description: "Noise-cancelling headphones", price: 200, likes: 50 },
  ];

  return (
    <div>
      <h1>Product Catalog</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;