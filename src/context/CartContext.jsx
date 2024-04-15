import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize cart from local storage to persist state across sessions
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    // Update local storage when cartItems changes
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id && item.size === product.size
      );
      if (existingItem) {
        // Increase quantity if item already exists in the cart
        return prevItems.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item to the cart
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product, removeAll = false) => {
    setCartItems((prevItems) => {
      if (removeAll) {
        // Remove all quantities of the item from the cart
        return prevItems.filter(
          (item) => item.id !== product.id || item.size !== product.size
        );
      } else {
        // Decrease quantity by 1, or remove the item if quantity becomes 0
        return prevItems.reduce((acc, item) => {
          if (item.id === product.id && item.size === product.size) {
            const updatedQuantity = item.quantity - 1;
            if (updatedQuantity > 0)
              return [...acc, { ...item, quantity: updatedQuantity }];
            return acc;
          } else {
            return [...acc, item];
          }
        }, []);
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
