import React from 'react';
// import { useState } from "react";
import birdData from './birds'

console.log(birdData)

// const cartArr = []

const CardItem = ({addBird, birdName, birdId, birdAmount, birdImg}) => {
    // const [cartItem, setCartItem] = useState('notInCart');
    // const [birds, setBirds] = useState(birdData)

    // function addToCart(birdChoice) {
    //     console.log(`item placed ${birdChoice}`)
    //     setCartItem("inCart");
    //     cartArr.push(cartItem)
    //   }
    // const addtoCart = () => {
        // setBirds([...birds, ])
    // }



    return (
        <li className={'card'}>
            <h3>{birdName}</h3>
            <p>{birdId}</p>
            <p>Price: ${birdAmount}</p>
            <img src={birdImg}/>
            <button onClick={()=>addBird(birdId)}>Add to Cart</button>
            {/* <button className={'birds'} onClick={() => addToCart('inCart')}>Add to cart!</button> */}
        </li>
    );
};

export default CardItem;