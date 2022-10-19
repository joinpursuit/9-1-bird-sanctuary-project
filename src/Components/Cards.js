import { useState } from "react";
const Cards = ({ birds, addBird }) => {
  return birds[0].map((bird) => {
    return (
      <div className="birds" id={bird.id}>
        <h4>{bird.name}</h4>
        <p>Price: ${bird.amount}</p>
        <img src={bird.img} alt={bird.img}></img>
        <button onClick={() => addBird(bird.id)}>Adopt</button>
      </div>
    );
  });
};
export default Cards;
