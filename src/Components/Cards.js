import React from "react";

export default function Cards({ birdData, handleAddProduct }) {
  return (
    <div className="cards">
      {birdData.map((bird) => (
        <ul className="birds">
          <li style={{ listStyle: "none" }}>
            <h4>{bird.name}</h4>
            <p>Price: ${bird.amount}</p>
            <img src={bird.img} alt={bird.name} />
            <br />
            <button onClick={() => handleAddProduct(bird)}>ADOPT</button>
          </li>
        </ul>
      ))}
    </div>
  );
}
