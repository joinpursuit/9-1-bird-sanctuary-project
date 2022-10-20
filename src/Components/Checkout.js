import { useState } from "react";
import "./Checkout.css";

export default function Checkout({ clearCart }) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
  });

  const { firstName, lastName, email, zip } = user;

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      zip: "",
    });
    alert("You have adopted birds. Thank you!");
  };

  return (
    <form
      className="Checkout"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <h2>Checkout</h2>
      <label htmlFor="firsName">
        First Name:{" "}
        <input
          type="text"
          id="firstName"
          onChange={(e) => handleInputChange(e)}
          value={firstName}
        />
      </label>
      <label htmlFor="lastName">
        Last Name:
        <input
          type="text"
          id="lastName"
          onChange={(e) => handleInputChange(e)}
          value={lastName}
        />
      </label>
      <label htmlFor="email">
        Email:{" "}
        <input
          type="email"
          id="email"
          onChange={(e) => handleInputChange(e)}
          value={email}
        />
      </label>
      <label htmlFor="zipcode">
        Zip Code:{" "}
        <input
          type="text"
          id="zip"
          onChange={(e) => handleInputChange(e)}
          value={zip}
          pattern="[0-9]*"
        />
      </label>
      <input type="submit"></input>
    </form>
  );
}
