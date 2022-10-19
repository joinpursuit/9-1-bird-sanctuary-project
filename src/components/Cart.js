import { useState } from "react"

function Cart({cart}) {
   function cartSum(cartItems) {
    let cartTotal = 0
    for(const item of cartItems) {
        cartTotal += item
    }
    console.log(cartTotal)
    return cartTotal
   }
    return (
        <div className="Cart">
            <h2>Cart</h2>
            <h4>Total: ${cartSum(cart)}</h4>
            <ol>
            {cart.map((prop) => {
                    return <ol>{cart.name}: ${cart.amount}</ol>
                })}
            </ol>
                
            <p>Discount: 0%</p>
            <p>Your donations have qualified you for the following items:</p>
        </div>
    )
}


export default Cart