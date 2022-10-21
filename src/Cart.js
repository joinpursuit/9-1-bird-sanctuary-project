import React from 'react';
import { useState } from "react";
import Cards from './Cards';
import birdData from './data/birds';


function Cart({cart}) {
  // total cost of the birds needs to be dynamic 
  // set a variable to hold the total 
  let realTotal = cart.reduce((acc,currentValue)=>acc + currentValue.amount, 0)

 
   // Ol i need map through to list out the li's reference cards js
   // use Li instead of div 



    return (
        <div>
            <h1 className='Cart'>Cart</h1>
            <h4>Total:${cart.length >= 3 ? (0.90 * realTotal) : realTotal }</h4>
            <h6>Discount: {cart.length < 3 ? (0) : (10)}%</h6>
            {
                cart.map((birdData)=>{
                    return(
                      <ol>
                            <li >{birdData.name}: {birdData.amount}</li>
                            {/* <button onClick={()=> removeData()}>Delete</button> */}
                            </ol>
                    )
                })
            }
            <h6>Your donations have qualified you for the following items:</h6>
            <ul></ul>
        </div>
    );
}

export default Cart;