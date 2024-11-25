import React, { useState } from "react";

const plants = [
  { id: 1, name: "Snake Plant", price: 20, category: "Low Light", thumbnail: "https://th.bing.com/th/id/OIP.L-xB_Q07j-sEG-fh-w3cWAHaIw?w=208&h=246&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 2, name: "Spider Plant", price: 18, category: "Low Light", thumbnail: "https://th.bing.com/th/id/OIP.09V31kfMFS53g7sqdvNeDwHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 3, name: "Monstera", price: 25, category: "Tropical", thumbnail: "https://th.bing.com/th/id/OIP.Nq5lsTEZytnL2xcGI7QrcgHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 4, name: "Fern", price: 15, category: "Tropical", thumbnail: "https://th.bing.com/th/id/OIP.DtT8z0yBX08WoRZeNNhhjgHaEK?w=320&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 5, name: "Cactus", price: 10, category: "Succulent", thumbnail: "https://th.bing.com/th/id/OIP.QmPmprryTKq4m6dxRpFN7gHaE7?w=298&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 6, name: "Aloe Vera", price: 12, category: "Succulent", thumbnail: "https://th.bing.com/th/id/OIP.cE-j_BQHYp2DxMQDlgHkYQHaE8?w=278&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
];

const ProductListing = ({ addToCart }) => {
  const [disabledButtons, setDisabledButtons] = useState({});

  const handleAddToCart = (plant) => {
    addToCart(plant);
    setDisabledButtons((prev) => ({ ...prev, [plant.id]: true }));
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div>
      <h1>Product Listing</h1>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id} style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
                  <img src={plant.thumbnail} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={disabledButtons[plant.id]}
                    style={{
                      backgroundColor: disabledButtons[plant.id] ? "#ccc" : "red",
                      color: "#fff",
                      padding: "10px",
                      border: "none",
                      cursor: disabledButtons[plant.id] ? "not-allowed" : "pointer",
                    }}
                  >
                    {disabledButtons[plant.id] ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
