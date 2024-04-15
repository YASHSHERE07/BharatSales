import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail"; // Ensure this path matches your file structure
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import NotFoundPage from "./components/NotFoundPage";
import Home from "./components/Home";
import { Footer } from "./components/Footer";
import AuthLinks from "./components/AuthLinks";
import Signup from "./components/Signup";
import Login from "./components/Login";
function App() {
  return (
    <CartProvider>
      <Router>
        <AuthLinks></AuthLinks>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFoundPage />} />{" "}
          {/* Catch-all route for 404 */}
        </Routes>
      </Router>
      <Footer />
    </CartProvider>
  );
}

export default App;
