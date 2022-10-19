import { useState } from "react";
// import bonusItems from "../data/bonusItems";

const Cart = ({ bonuses }) => {
  const cartBirds = [];
  const cartTotal = 0;
  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>Total: $0</h4>
      <span>Discount: 0%</span>
      <ol>content goes here...</ol>
      <p>Your donations have qualified you for the following</p>
      <ul>{bonuses}</ul>
    </div>
  );
};
export default Cart;
