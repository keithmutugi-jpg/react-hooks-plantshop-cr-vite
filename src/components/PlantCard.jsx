import React from "react";

function PlantCard({ plant, onUpdatePlant }) {
  const { id, name, image, price } = plant;
  const isInStock = plant.inStock !== false;

  function handleSoldOut() {
    const updatedPlant = { ...plant, inStock: false };
    onUpdatePlant(updatedPlant);

    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inStock: false }),
    });
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleSoldOut}>
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
