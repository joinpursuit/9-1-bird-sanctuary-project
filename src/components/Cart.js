import React from "react"
import bonusItems from "../data/bonusItems"

function Cart({ cartSum, cartItems, removeBird, bonusItems }) {
  const cartTotal = cartItems.reduce((acc, curr) => {
    return acc + curr.amount
  }, 0)

  return (
    <div className="Carts">
      <h2>Cart</h2>
      {/* gotta recheck math?9-1-React-Student-Dashboard */}
      <h4>Total: ${cartItems.length > 2 ? cartTotal * 0.1 : cartTotal}</h4>
      <span>Discount: {cartItems.length > 3 ? 10 : 0}%</span>
      {cartItems.map((bird) => {
        return (
          <>
            <ol>
              <li key={bird.id}>
                {bird.name}: ${bird.amount}
                <button onClick={() => removeBird(bird.id)} className="remove">
                  {"  "}remove
                </button>
              </li>
            </ol>
          </>
        )
      })}
      <p>Your donations have qualified you for the following items:</p>

      <ul className="list">
        {cartTotal >= 100 && cartTotal < 299 ? (
          <li className="bonusOne">{bonusItems[0]}</li>
        ) : null}
        {cartTotal >= 300 && cartTotal < 499 ? (
          <li className="bonustwo">{bonusItems[1]}</li>
        ) : null}
        {cartTotal >= 500 && cartTotal < 999 ? (
          <li className="bonusthree">{bonusItems[2]}</li>
        ) : null}
        {cartTotal >= 1000 ? (
          <li className="bonusfour">{bonusItems[3]}</li>
        ) : null}
      </ul>
    </div>
  )
}
export default Cart
