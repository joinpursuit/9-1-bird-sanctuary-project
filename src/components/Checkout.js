import React from "react"
import { useState } from "react"

function Checkout({ handleSubmit, handleTextChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <label htmlFor="firstName">
        {" "}
        First Name:
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          value={user.firstName}
          onChange={handleTextChange}
        />
      </label>
      <label htmlFor="lastName">
        Last Name:
        <input
          type="text"
          id="lastName"
          value={user.lastName}
          onChange={handleTextChange}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          value={user.email}
          onChange={handleTextChange}
        />
      </label>
      <label htmlFor="zip">
        Zip code:
        <input
          type="number"
          id="zip"
          value={user.zip}
          onChange={handleTextChange}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Checkout
