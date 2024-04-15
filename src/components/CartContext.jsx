import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex >= 0) {
        // Product exists, update quantity
        const updatedCartItems = [...prevItems];
        updatedCartItems[existingProductIndex].quantity += 1;
        return updatedCartItems;
      } else {
        // Product doesn't exist, add new
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId, removeAll = false) => {
    setCartItems((prevItems) => {
      if (removeAll) {
        // Remove item completely
        return prevItems.filter((item) => item.id !== productId);
      } else {
        // Decrement item quantity, remove if quantity becomes 0
        return prevItems.reduce((acc, item) => {
          if (item.id === productId) {
            if (item.quantity > 1) {
              acc.push({ ...item, quantity: item.quantity - 1 });
            }
          } else {
            acc.push(item);
          }
          return acc;
        }, []);
      }
    });
  };

  // Calculate total item count here for convenience
  const totalItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, totalItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
