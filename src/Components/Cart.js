import { useState } from "react";
// import bonusItems from "../data/bonusItems";

const Cart = ({ cartBirds, cartTotal, bonuses }) => {
  const liBirds = cartBirds.map((bird) => {
    return bird.name;
  });

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>Total: ${cartTotal}</h4>
      <span>Discount: 0%</span>
      <ol>
        <li>{liBirds}</li>
      </ol>
      <p>Your donations have qualified you for the following</p>
      <ul>{bonuses}</ul>
    </div>
  );
};
export default Cart;
