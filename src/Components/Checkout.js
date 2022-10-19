import { useState } from "react";

export default function Checkout({ setCartOption }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && lastName && email && zipCode) {
      alert("You have adopted birds. Thank you!");
      setCartOption([]);
      setFirstName("");
      setLastName("");
      setEmail("");
      setZipCode("");
    } else {
      alert("Please complete the form");
    }
  };
  return (
    <div className="Checkout">
      <h3>Checkout</h3>
      <form onSubmit={handleSubmit}>
        <b>First Name</b>
        <label htmlFor="firstName">
          <input
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <b>Last Name</b>
        <label htmlFor="lastName">
          <input
            type="text"
            value={lastName}
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <b>Email</b>
        <label htmlFor="email">
          <input
            value={email}
            type="text"
            placeholder="Enter your e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <b>Zip Code</b>
        <label htmlFor="zipCode">
          <input
            value={zipCode}
            type="number"
            placeholder="Enter Zip Code"
            onChange={(e) => setZipCode(e.target.value)}
          />
        </label>
        <label htmlFor="submit"></label>
        <button onSubmit={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
