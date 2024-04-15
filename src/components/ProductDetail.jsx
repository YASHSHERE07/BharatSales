import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }
  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <nav className="flex mb-8">
          <ol
            role="list"
            className="flex items-center space-x-2 text-sm font-medium text-gray-600"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900" aria-current="page">
              {product.category}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16 align-middle ">
          <div className="lg:col-span-3 ">
            <img
              className="rounded-lg object-cover"
              src={product.image}
              alt={product.title}
            />
          </div>

          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {product.title}
            </h1>
            <p className="mt-2 text-gray-700">{product.description}</p>
            <p className="mt-2 text-lg font-semibold">${product.price}</p>

            <div className="mt-4 flex space-x-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`py-2 px-4 border ${
                    selectedSize === size
                      ? "border-blue-500 bg-blue-500 text-white"
                      : "border-gray-300"
                  } rounded`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <button
              className="mt-4 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              onClick={() => addToCart({ ...product, size: selectedSize })}
              disabled={!selectedSize}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
