import React from "react";
import { useState } from "react";
import birdData from "./data/birds";

const Cards = ({birdData, setCart, cart}) => {
    
    function duplicateBird(bird) {
           
            if (cart.includes(bird)) {
                return alert('You have already added this bird to your cart!')
            } setCart([...cart, bird]);
                // Spread operator makes copy of cart to retain previous data while adding new bird data.
                // The function above states that if the cart includes the bird, alert the user that a duplicate bird cannot be added.
    }
      
      return (
          <div>
            {
                birdData.map((bird) => {
                    return (
                        <div>
                            <h2>{bird.name}</h2>
                            <img src={bird.img} alt="Listed Bird"/>
                            <h4>Price: ${bird.amount}</h4>
                            <button onClick={() => duplicateBird(bird)}> Adopt </button>
                            {/* Executes the duplicateBird function when the adopt button is clicked. */}
                        </div>
                    )
                })
            }
        </div>
    );
}



export default Cards;