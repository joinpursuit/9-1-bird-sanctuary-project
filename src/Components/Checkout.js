import { useState } from "react";
import "./Checkout.css";

export default function Checkout() {
  const [donor, setDonor] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
  });

  function newDonor() {}
  return (
    <div className="Checkout">
      <h2>Checkout</h2>
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" value={donor.firstName}></input>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" value={donor.lastName}></input>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={donor.email} />
        <label htmlFor="zip">Zip</label>
        <input type="text" id="zip" value={donor.zip} />
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
