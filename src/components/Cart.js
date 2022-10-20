import React from "react"

function Cart({ cartSum, birdCart }) {
  return (
    <div className="Carts">
      <h2>Cart</h2>
      <h4>Total: ${cartSum}</h4>
      <span>Discount:</span>
      <ol>
        {birdCart.map((bird) => {
          return (
            <li>
              {bird.name}: ${bird.amount}
            </li>
          )
        })}
      </ol>

      <p>Your donations have qualified you for the following items:</p>
      <ul></ul>
    </div>
  )
}

export default Cart
