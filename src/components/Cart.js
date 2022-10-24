import React from 'react';
import { useState } from 'react'
import CartItem from './CartItem'


const Cart = ({inCart}) => {
    const listInCartBirds = inCart.map(bird => {
        return (
            <CartItem birdName={bird.name} birdAmount={bird.amount} birdId={bird.id} key={bird.id} birdImg={bird.img}/>
        )
    })
    console.log(listInCartBirds)
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                <li>
                    <span>{listInCartBirds}</span>
                </li>
                {/* <li>{listInCartBirds}</li> */}
            </ul>
            <h4>Total</h4>
            <span>Discount</span>
            <p>Your donations have qualified you for the following items: </p>
        </div>
    );
};

export default Cart;