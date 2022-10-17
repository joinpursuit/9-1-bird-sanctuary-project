import { useState } from "react";
import "./Checkout.css";

export default function Checkout() {
  return (
    <div className="Checkout">
      <h2>Checkout</h2>
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName"></input>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName"></input>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="zip">Zip</label>
        <input type="text" id="zip" />
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
