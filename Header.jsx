import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/products" style={linkStyle}>Products</Link>
        <Link to="/cart" style={linkStyle}>
          🛒 Cart ({cartCount})
        </Link>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: "#f8f9fa",
  padding: "10px",
  borderBottom: "1px solid #ddd",
};

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",
};

const linkStyle = {
  textDecoration: "none",
  color: "red",
  fontWeight: "bold",
  margin: "0 10px",
};

export default Header;
