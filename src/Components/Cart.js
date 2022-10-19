import { useState } from "react";
// import bonusItems from "../data/bonusItems";

const Cart = ({ cartBirds, cartTotal, bonuses, setCartBirds }) => {
  const removeBird = (birdId) => {
    const filteredBirds = cartBirds.filter((bird) => {
      return bird.id !== birdId;
    });
    setCartBirds([...filteredBirds]);
  };

  const liBirds = cartBirds.map((bird) => {
    return (
      <li>
        {bird.name} <button onClick={() => removeBird(bird.id)}>Delete</button>
      </li>
    );
  });

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>Total: ${cartTotal}</h4>
      <span>Discount: 0%</span>
      <ol>{liBirds}</ol>
      <p>Your donations have qualified you for the following</p>
      <ul>{bonuses}</ul>
    </div>
  );
};
export default Cart;
