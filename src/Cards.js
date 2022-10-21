import React, { useState } from 'react';
import Cart from './Cart';

const Cards = ({data, setCart, cart} ) => {

    // add  birds to the shopping cart by pushing the adopt button
    // can only add the same bird once to the cart
    // if you try to add the same bird more than once to the cart it alerts(look at user stories)
function updatedCart (bird){
   // if the bird is in the cart then alert and return 
   // otherwise setCart 
   // cart is array of objects
   // bird is an object

 
    if (cart.includes(bird)){
        return alert("You have already added this bird to the cart")
    }
    setCart([...cart,bird])
   

    
}

    return (
        <div>
            {
                data.map((bird)=>{
                    return(
                        <div>
                            <h2>{bird.name}</h2>
                           <img src={bird.img}/>
                           {/* figure out how to display the image on the screen */}
                            <h4>Price: ${bird.amount}</h4>
                            <button onClick={()=>updatedCart(bird)}> Adopt</button>
                          
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Cards;