// src/components/Cart.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart } = useCart();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-20 object-cover"
              />
              <p>{item.title}</p>
              <p>Size: {item.size}</p>
              <p>${item.price}</p>
              <div className="flex items-center">
                <button onClick={() => addToCart(item)}>+</button>
                <p className="mx-2">{item.quantity}</p>
                <button onClick={() => removeFromCart(item, false)}>-</button>
              </div>
              <button onClick={() => removeFromCart(item, true)}>Remove</button>
            </div>
          ))}
          <div className="text-right mt-6">
            <button
              onClick={handleCheckout}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};
export default Cart;