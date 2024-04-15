// Sidebar.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@material-tailwind/react";

export const Sidebar = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(["all", ...response.data]); // Include 'all' categories option
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Card className="h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 m-10">
      <h2 className="font-semibold mb-4">Categories</h2>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className="text-left w-full mb-2 py-2 px-4 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </Card>
  );
};
