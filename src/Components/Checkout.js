import { useState } from "react";

const Checkout = ({ adopter, handleSubmit, handleChange }) => {
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          {" "}
          First Name:
          <input
            id="firstName"
            type="text"
            value={adopter.firstName}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="lastName">
          {" "}
          Last Name:
          <input
            id="lastName"
            type="text"
            value={adopter.lastName}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="emailName">
          {" "}
          Email:
          <input
            id="email"
            type="email"
            value={adopter.email}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="lastName">
          {" "}
          Zip Code:
          <input
            id="zipCode"
            type="text"
            value={adopter.zipCode}
            onChange={handleChange}
          ></input>
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Checkout;
