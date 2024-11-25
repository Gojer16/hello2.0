import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background">
        <h1 className="company-name">More green = life</h1>
        <p className="company-description">
          Welcome to our company! We are dedicated to providing the best products and services to our customers.
        </p>
        <Link to="/products">
          <button className="get-started-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
