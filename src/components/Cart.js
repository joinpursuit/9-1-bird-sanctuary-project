import React from "react"
import bonusItems from "../data/bonusItems"

function Cart({ cartSum, cartItems, removeBird, bonusItems, discount }) {
  const cartTotal = cartItems.reduce((acc, curr) => {
    return acc + curr.amount
  }, 0)

  return (
    <div className="Carts">
      <h2>Cart</h2>
      <h4>Total: ${cartTotal}</h4>
      <span>Discount:{discount ? 10 : 0}</span>
      {cartItems.map((bird) => {
        return (
          <>
            <ol>
              <li key={bird.id}>
                {bird.name}: ${bird.amount}
                <button onClick={() => removeBird(bird.id)}>remove</button>
              </li>
            </ol>
          </>
        )
      })}
      <p>Your donations have qualified you for the following items:</p>
      {bonusItems.map((bonus, id) => (
        <ul key={id}>{bonus}</ul>
      ))}
    </div>
  )
}
export default Cart
