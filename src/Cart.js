import react from "react";
import birdData from "./data/birds";

function Cart({cart}) {
    let totalCartValue = cart.reduce((accumulator, current) => accumulator + current.amount, 0) 
    /* Using the reduce method to take both parameters of a callback function in order to get an updated cart total starting at 0 by adding the current
     amount to the placeholder (aka accumulator). */
    
     return (
        <div>
            <h1 className="cart">Cart</h1>

            <h4>Total: ${cart.length >= 3 ? (0.9 * totalCartValue) : totalCartValue} </h4>
            {/* If the cart length is greater than or equal to 3, multiply the total cart value (shown by the totalCartValue function) by 0.9 or 90% since
            there will be a 10% discount applied since there are 3 or more items in the cart. If there are less than 3 items, the total remains the same
            with no discount. */}

            <h5>Discount: {cart.length < 3 ? (0) : (10)}% </h5>
            {/* If the cart length is less than three, display no discount. If it's more than 3, display a 10% discount. */}

            {cart.map((birdData) => {
                return (
                <ol>
                    <ul>{birdData.name}: ${birdData.amount}</ul>
                </ol>
            )

            /* The above maps through the birdData array in order to retrieve the values of the keys name and amount. This is to display the correct format
            in the cart. */

            })}
        </div>
    )
}

export default Cart;