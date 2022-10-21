import React from "react";

export default function Checkout({ cartItems, setCartItems }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    cartItems.length < 1
      ? alert("Please select your favourite bird.")
      : alert("You have adopted birds. Thank you!");
    e.target.reset();
    setCartItems([]);
  };

  return (
    <div className="checkout">
      <form onSubmit={handleSubmit}>
        <h3>Checkout</h3>
        <label htmlFor="firstname">First name</label>
        <input type="text" id="firstname" />
        <label htmlFor="lasttname">Last name</label>
        <input type="text" id="lastname" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <label htmlFor="zipcode">Zip Code</label>
        <input type="text" id="zipcode" />
        <input type="submit" value="SUBMIT"></input>
      </form>
    </div>
  );
}
