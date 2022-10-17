import { useState } from "react";

export default function Cart({ birdsCart, total, discount }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <h4>Total: ${total}</h4>
      <p>Discount: {discount}%</p>
      <ol>
        {birdsCart.length ? (
          birdsCart.map((e) => (
            <li key={e.id}>
              {e.name}: ${e.amount}
            </li>
          ))
        ) : (
          <></>
        )}
      </ol>
      <ul>Your donations have qualified you for the following items:</ul>
    </div>
  );
}
