import React from 'react';
import { useState } from "react";
import Cards from './Cards';
function Cart(props) {
  // total cost of the birds needs to be dynamic 
  // set a variable to hold the total 
    let total = 0
  
  
  // needs conditional for discount
  //10% discount when its 3 or more birds
  // 0 % discount 3 or less birds

   // if ( 3>birds then return 10% of the total 
    //  ) else if there is 3<birds just return total
    // create a function that updates the total and 
   

    return (
        <div>
            <h1 className='Cart'>Cart</h1>
            <ol></ol>
            <h4>Total: $0</h4>
            <h6>Discount: 0%</h6>
            <h6>Your donations have qualified you for the following items:</h6>
            <ul></ul>
        </div>
    );
}

export default Cart;