import React from "react";

export default function Cart({ cartItems, handleRemoveProduct, bonusItems }) {
  let totalPrice = cartItems.reduce((price, item) => price + item.amount, 0);

  let bonuses = [];

  if (cartItems.length >= 3) {
    totalPrice = totalPrice - (totalPrice * 10) / 100;
  }

  if (totalPrice >= 100 && totalPrice < 300) {
    bonuses.push(bonusItems[0]);
  } else if (totalPrice >= 300 && totalPrice < 500) {
    bonuses.push(bonusItems[0], bonusItems[1]);
  } else if (totalPrice >= 500 && totalPrice < 1000) {
    bonuses.push(bonusItems[0], bonusItems[1], bonusItems[2]);
  } else if (totalPrice >= 1000) {
    bonuses.push(bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3]);
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <br />
      <h4>Total: ${totalPrice}</h4>
      <br />
      <span>Discount: {cartItems.length < 3 ? 0 : 10}%</span>
      <ol>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name}: ${item.amount}
            <br />
            <button onClick={() => handleRemoveProduct(item.id)}>Delete</button>
          </li>
        ))}
      </ol>
      <br />
      <p>Your donations have qualified you for the following items:</p>
      <ul>
        {bonuses.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
