
import React from 'react';
import { useState } from 'react';
import bonusItems from '../data/bonusItems';
import OList from './OList';

function Cart({numOfBirds, total, discount,setTotal,setDiscount}) {


    return (
        <div className='cart'>
            <h6>Cart</h6>
            <p>Discount: {discount}%</p>
            <p>Total: ${total}</p>
            
            <ol>
                <OList 
                numOfBirds= {numOfBirds}
                setDiscount = {setDiscount}
                setTotal = {setTotal} /> 
            </ol>

            <ul>
                <li>
                    bonuses displayed here
                </li>
            </ul>
        </div>
    );
}

export default Cart;