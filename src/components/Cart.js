import React from 'react';
import { useState } from 'react'
import CartItem from './CartItem'
import CartAmount from './CartAmount';
import bonusItems from '../data/bonusItems';


const Cart = ({inCart}) => {
    const listInCartBirds = inCart.map(bird => {
        return (
            <CartItem birdName={bird.name} birdAmount={bird.amount} birdId={bird.id} key={bird.id} birdImg={bird.img}/>
        )
    })
    const total = inCart.reduce((acc,bird)=> acc+bird.amount,0)

    // const totalAmountInCartBirds = inCart.map(bird => {
    //     return (
    //         <CartAmount bird={bird} birdName={bird.name} birdAmount={bird.amount} birdId={bird.id} key={bird.id} birdImg={bird.img}/>
    //     )
    // })

    // const inCartAmount = inCart.map(bird => {
    //     console.log(inCartAmount)
    //     return (

    //     )
    // })
    // for bonus items; we can render them conditioanlly based on the total amount 

 
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
            {/* <span>{totalAmountInCartBirds}</span> */}
            <h4>Total: {inCart.length >= 3 ? total * .9 : total} </h4>
            <span>Discount: {inCart.length >= 3 ? `10%` : `0%`}</span>
            <p>Your donations have qualified you for the following items: </p>
            <ul>
                <li>{total >= 100 ? bonusItems[0] : null }</li>
                <li>{total >= 300 ? bonusItems[1] : null }</li>
                <li>{total >= 500 ? bonusItems[2] : null }</li>
                <li>{total >= 1000 ? bonusItems[3] : null }</li>
            </ul>
        </div>
    );
};

export default Cart;