import React from 'react';
import { useState } from "react";

const CardItem = ({birdName, birdId, birdAmount, birdImg}) => {
    const [cartItem, setCartItem] = useState('notInCart');

    function addToCart(birdChoice) {
        console.log(`item placed ${birdChoice}`);
        setCartItem("inCart");
      }
    return (
        <li className={cartItem}>
            <h3>{birdName}</h3>
            <p>{birdId}</p>
            <p>Price: ${birdAmount}</p>
            <img src={birdImg}/>
            <button onClick={() => addToCart('inCart')}>Add to cart!</button>
        </li>
    );
};

export default CardItem;