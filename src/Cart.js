import { useState } from "react";
import react from "react";
import bonusItems from "./data/bonusItems";
import "./App.css";

export default function BirdCarts({ addToCart, setCart }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <h4>
        Total: $
        {addToCart.length >= 3
          ? addToCart
              .map((addedTotal) => addedTotal.amount)
              .reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                0
              ) * 0.9
          : addToCart
              .map((addedTotal) => addedTotal.amount)
              .reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                0
              )}
      </h4>
      <p>Discount: {addToCart.length >= 3 ? 10 : 0} %</p>
      <ol>
        {addToCart.map((donation) => (
          <li className="birdsOl" id={`${donation.id}`}>
            {donation.name}: ${donation.amount}
          </li>
        ))}
      </ol>
      <p>
        Your donations have qualified you for the following items:
        <ul>
          {addToCart
            .map((addedTotal) => addedTotal.amount)
            .reduce(
              (previousValue, currentValue) => previousValue + currentValue,
              0
            ) >= 100 && <li>{`${bonusItems[0]}`}</li>}

          {addToCart
            .map((addedTotal) => addedTotal.amount)
            .reduce(
              (previousValue, currentValue) => previousValue + currentValue,
              0
            ) >= 500 && <li>{`${bonusItems[1]}`}</li>}
          {addToCart
            .map((addedTotal) => addedTotal.amount)
            .reduce(
              (previousValue, currentValue) => previousValue + currentValue,
              0
            ) >= 700 && <li>{`${bonusItems[2]}`}</li>}
          {addToCart
            .map((addedTotal) => addedTotal.amount)
            .reduce(
              (previousValue, currentValue) => previousValue + currentValue,
              0
            ) >= 1000 && <li>{`${bonusItems[3]}`}</li>}
        </ul>
      </p>
    </div>
  );
}
