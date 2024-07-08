import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Home from "./pages/Home";

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  
 
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCategories(data);
      });

      export const handleFetchProducts = (productId) => {
        fetch("http://localhost:3000/products?id=" + productId)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setProducts(data);
        });
      }

  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onFetchProducts={handleFetchProducts()} data={categories} products={products}/>} />
      </Routes>
    </Router>
  );
}
