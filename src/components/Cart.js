import React from "react"

function Cart({ cartSum, cartItems, removeBird }) {
  return (
    <div className="Carts">
      <h2>Cart</h2>
      <h4>Total: ${cartSum}</h4>
      <span>Discount:</span>
      <ol>
        {cartItems.map((bird) => {
          return (
            <li key={bird.id}>
              {bird.name}: ${bird.amount}
              <button onClick={() => removeBird(bird.id)}>remove</button>
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
