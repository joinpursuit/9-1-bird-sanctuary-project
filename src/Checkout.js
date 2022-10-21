import react from "react";
import { useState } from "react";
import "./App.css";

export default function CheckoutBird({ recDon, setCart }) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [emailAddy, setEmailAddy] = useState("");
  const [zipCode, setZipCode] = useState("");

  function fNameHandler(e) {
    setFName(e.target.value);
  }
  function lNameHandler(e) {
    setLName(e.target.value);
  }
  function emailHandler(e) {
    setEmailAddy(e.target.value);
  }
  function zipHandler(e) {
    setZipCode(e.target.value);
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("You have adopted birds. Thank you!");
          setFName("");
          setLName("");
          setEmailAddy("");
          setZipCode("");
          setCart([]);
        }}
      >
        <label htmlFor="firstName">
          First name:
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name..."
            value={fName}
            onChange={fNameHandler}
          />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name..."
            value={lName}
            onChange={lNameHandler}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter Email..."
            value={emailAddy}
            onChange={emailHandler}
          ></input>
        </label>
        <label htmlFor="zip">
          Zip:
          <input
            id="zip"
            name="zip"
            type="number"
            placeholder="Zip..."
            value={zipCode}
            onChange={zipHandler}
          ></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
