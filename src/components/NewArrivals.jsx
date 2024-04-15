// components/NewArrivals.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

const NewArrivals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products") // Adjust this URL as needed
      .then((response) => {
        setProducts(response.data.slice(0, 8)); // Fetch and slice the array to the first 6 items
      })
      .catch((error) => console.error("Error fetching new arrivals: ", error));
  }, []);

  return (
    <>
      <div className="text-center text-[50px] font-rubik-mono">
        Latest Arrival
      </div>
      <div className="p-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-between bg-white shadow-lg rounded-lg overflow-hidden h-full"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-fill p-10"
              />
              <div className="p-4">
                <h3 className="text-lg font-roboto mb-4">{product.title}</h3>
                <Link
                  to="/products"
                  className="inline-block mt-auto bg-black text-white py-2 px-4 rounded hover:bg-blue-600 w-full text-center"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
