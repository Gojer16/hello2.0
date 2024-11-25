import React from "react";
import { Link } from "react-router-dom";

const ShoppingCart = ({ cart, updateCart, deleteFromCart }) => {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Continue Shopping</Link></p>
      ) : (
        <>
          <p>Total Items: {totalItems}</p>
          <p>Total Cost: ${totalCost.toFixed(2)}</p>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={thStyle}>Thumbnail</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Price</th>
                <th style={thStyle}>Quantity</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} style={{ textAlign: "center" }}>
                  <td style={tdStyle}><img src={item.thumbnail} alt={item.name} width="50" /></td>
                  <td style={tdStyle}>{item.name}</td>
                  <td style={tdStyle}>${item.price.toFixed(2)}</td>
                  <td style={tdStyle}>{item.quantity}</td>
                  <td style={tdStyle}>
                    <button onClick={() => updateCart(item.id, "increment")}>+</button>
                    <button onClick={() => updateCart(item.id, "decrement")}>-</button>
                    <button onClick={() => deleteFromCart(item.id)} style={{ color: "red" }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: "20px" }}>
            <button style={buttonStyle} onClick={() => alert("Sorry! Coming Soon!")}>Checkout</button>
            <Link to="/products">
              <button style={buttonStyle}>Continue Shopping</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

const thStyle = { border: "1px solid #ddd", padding: "10px" };
const tdStyle = { border: "1px solid #ddd", padding: "10px" };
const buttonStyle = { margin: "5px", padding: "10px", cursor: "pointer" };

export default ShoppingCart;
