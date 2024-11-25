import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProductListing from "./ProductListing";
import ShoppingCart from "./ShoppingCart";
import Header from "./Header";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prevCart) => {
      const existingPlant = prevCart.find((item) => item.id === plant.id);
      if (existingPlant) {
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...plant, quantity: 1 }];
    });
  };

  const updateCart = (plantId, action) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === plantId) {
            if (action === "increment") return { ...item, quantity: item.quantity + 1 };
            if (action === "decrement" && item.quantity > 1)
              return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0); 
    });
  };

  const deleteFromCart = (plantId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== plantId));
  };

  return (
    <Router>
      <Header cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListing addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              cart={cart}
              updateCart={updateCart}
              deleteFromCart={deleteFromCart}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
 