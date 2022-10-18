import { useState } from "react";

export default function Cehckout() {
  const [firstName, setFirtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");

  return (
    <div className="Checkout">
      <h3>Checkout</h3>
      <form action="">
        <b>First Name</b>
        <label htmlFor="firstName">
          <input
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            required
          />
        </label>
        <b>Last Name</b>
        <label htmlFor="lastName">
          <input
            type="text"
            value={lastName}
            placeholder="Enter Last Name"
            required
          />
        </label>
        <b>Email</b>
        <label htmlFor="email">
          <input
            value={email}
            type="text"
            placeholder="Enter your e-mail"
            required
          />
        </label>
        <b>Zip Code</b>
        <label htmlFor="zipCode">
          <input
            value={zipCode}
            type="number"
            placeholder="Enter Zip Code"
            required
          />
        </label>
        <label htmlFor="submit"></label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
