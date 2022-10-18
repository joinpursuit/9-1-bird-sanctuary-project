import { useState } from "react";

export default function Checkout({ setBirdsCart, setDiscount }) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    alert("You have adopted birds. Thank you!");
    setBirdsCart([]);
    setDiscount(0);
    setFName("");
    setLName("");
    setEmail("");
    setZip("");
  };
  return (
    <div className="Checkout">
      <h2>Checkout</h2>
      <form onSubmit={formSubmit}>
        <label>
          First Name
          <br />
          <input
            type="text"
            name="fName"
            required={true}
            onChange={(e) => {
              setFName(e.target.value);
            }}
            value={fName}
          ></input>
        </label>
        <label>
          Last Name
          <br />
          <input
            type="text"
            name="lName"
            required={true}
            onChange={(e) => {
              setLName(e.target.value);
            }}
            value={lName}
          ></input>
        </label>
        <label>
          Email
          <br />
          <input
            type="email"
            name="email"
            required={true}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          ></input>
        </label>
        <label>
          Zip Code
          <br />
          <input
            type="number"
            name="zipCode"
            required={true}
            onChange={(e) => {
              setZip(e.target.value);
            }}
            value={zip}
          ></input>
        </label>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}
