import React from "react"
import Cards from "./Cards"

function Cart({ getSum }) {
  return (
    <div className="Cart">
      <h3>Cart</h3>
      <h4>Total:${getSum}</h4>
      <span>Discount:{}</span>
      <ol></ol>
      <p>Your donations have qualified you for the following items:</p>
      <ul></ul>
    </div>
  )
}

export default Cart
