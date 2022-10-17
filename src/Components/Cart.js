
import React from 'react';
import { useState } from 'react';
import bonusItems from '../data/bonusItems';

function Cart({birdsArr, numOfBirds}) {
    // Declare state for Cart info (discount, total, keep track of number of birds(li items), need access to bonuses array)
    const [discount, setDiscount] = useState(0)
    const [total, setTotal] = useState(0)

    console.log(numOfBirds)
    // Functions
    function handleDiscount() {
        if(numOfBirds.length >= 3){
            setDiscount(10)
        }
        else{
            setDiscount(0)
        }
    }

    function calculateTotal () {
       const totalPrice = numOfBirds.reduce((acc, {amount}) => 
            acc + amount
        ,0)
        setTotal(totalPrice)
        }

    function updateBirdListItems() {

    }
       
    



    return (
        <div className='cart'>
            <h6>Cart</h6>
            <p>Discount: {discount} %</p>
            <p>Total: ${total}</p>
            
            <ol>
                <li>
                    birds
                </li>
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