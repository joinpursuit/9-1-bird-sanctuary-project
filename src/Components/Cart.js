
import React from 'react';
import { useState } from 'react';
import bonusItems from '../data/bonusItems';
import OList from './OList';
import UList from './UList';

function Cart({numOfBirds, total, discount,setTotal,setDiscount}) {

const [bonus, setBonus] = useState(0)

    return (
        <div className='cart'>
            <h6>Cart</h6>
            <p>Discount: {discount}%</p>
            <p>Total: ${total}</p>
            
            <ol>
                <OList 
                numOfBirds = {numOfBirds}
                setDiscount = {setDiscount}
                setTotal = {setTotal}
                setBonus = {setBonus} /> 
            </ol>

            <ul>
                <UList 
                total = {total}
                bonus = {bonus}
                 />
            </ul>
        </div>
    );
}

export default Cart;