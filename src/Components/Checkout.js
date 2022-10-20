import "./Checkout.css";

import { useState } from "react";
import "./Checkout.css";

export default function Checkout({ setCart }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (firstName && lastName && email && zip) {
      alert("You have adopted birds. Thank you!");
    }
    setCart([]);
    resetForm();
  }

  function resetForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setZip("");
  }

  return (
    <>
      <h2>Checkout</h2>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="number"
          id="zipCode"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        ></input>
        <br></br>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
