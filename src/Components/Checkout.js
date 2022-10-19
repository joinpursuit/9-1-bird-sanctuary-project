import { useState } from "react";
import "./Checkout.css";

export default function Checkout({ setCartBirds, setTotal, setDiscount }) {
  const [donorFirst, setDonorFirst] = useState("");
  const [donorLast, setDonorLast] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorZip, setDonorZip] = useState("");

  function resetForm() {
    setDonorFirst("");
    setDonorLast("");
    setDonorEmail("");
    setDonorZip("");
    setCartBirds([]);
    setTotal(0);
    setDiscount(0);
  }

  function handleSubmit(e) {
    console.log(donorFirst);
    e.preventDefault();
    if (donorFirst && donorEmail) {
      alert("You have adopted birds. Thank you!");
      resetForm();
    } else {
      alert("Please fill out the form");
    }
  }

  return (
    <div className="Checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={donorFirst}
          onChange={(e) => setDonorFirst(e.target.value)}
        ></input>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={donorLast}
          onChange={(e) => setDonorLast(e.target.value)}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={donorEmail}
          onChange={(e) => setDonorEmail(e.target.value)}
        />
        <label htmlFor="zip">Zip Code</label>
        <input
          type="number"
          id="zip"
          value={donorZip}
          onChange={(e) => setDonorZip(e.target.value)}
        />
        <input
          id="submit"
          type="submit"
          value="Submit"
          style={{ display: "block" }}
        />
      </form>
    </div>
  );
}
