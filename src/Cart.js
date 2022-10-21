import birdData from "./data/birds"
import React from "react";




class Cart extends React.Component {
    render (){
        const { newBirds } = this.props

        const addtoCart =() => {

        }
        return(
            <div className="Cart">
                <h3>Cart</h3>
                <h4>Total:</h4>
                <ol>
                    <li></li>
                </ol>
            </div>
        )
    }
    
}











export default Cart;