
import React from 'react';
import { useState } from 'react';
import bonusItems from '../data/bonusItems';

function Cart({numOfBirds, total, discount,setTotal,setDiscount}) {


    return (
        <div className='cart'>
            <h6>Cart</h6>
            <p>Discount: {discount}%</p>
            <p>Total: ${total}</p>
            
            <ol>
            {numOfBirds.map(({name, amount, id},i) => {
                const currentTotal = numOfBirds.reduce((acc,{amount}) => amount +acc ,0)
                if(i >= 2 ){
                    setDiscount(10)
                    setTotal(currentTotal - (currentTotal * .1))
                }
                else{
                    setDiscount(0)
                    setTotal(currentTotal)
                }
                

                        return(
                            <li key = {id}>{name} ${amount}</li>
                        )
                    })}
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