// components/ProductList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { EcommerceCard } from "./EcommerceCard";
import { Sidebar } from "./Sidebar"; // Make sure the import path is correct

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data); // Initially, no category is selected, so display all products
      })
      .catch((error) =>
        console.error("There was an error fetching the products: ", error)
      );
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar onSelectCategory={handleSelectCategory} />
      <div className="flex-1 p-4">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {filteredProducts.map((product) => (
            <EcommerceCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
