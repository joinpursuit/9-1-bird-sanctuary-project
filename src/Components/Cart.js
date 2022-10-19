import { useState } from 'react';
import React from 'react';
import OList from './OList';
import Total from './Total';
import UList from './UList';

function Cart({numOfBirds,total,discount}) {




    return (
        <>
            <h3>Cart</h3>
            <Total
            total ={total}
            discount= {discount}/>
            <ol>
                <OList 
                numOfBirds = {numOfBirds}
                /> 
            </ol>

            <ul>
               <p>***BONUS REWARDS***</p>
                <UList 
                numOfBirds ={numOfBirds}
                total= {total}
                 />
            </ul>
        </>
    );
}

export default Cart;