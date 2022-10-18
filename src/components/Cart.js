import React from "react"

function Cart(props) {
  return (
    <div className="Cart">
      <h3>Cart</h3>
      <h4>Total:{}</h4>
      <span>Discount:{}</span>
      <ol></ol>
      <p>Your donations have qualified you for the following items:</p>
      <ul></ul>
    </div>
  )
}

export default Cart
