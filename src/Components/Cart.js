
import React from 'react';
import OList from './OList';
import Total from './Total';
import UList from './UList';

function Cart({numOfBirds}) {

    return (
        <>
            <h4>Cart</h4>
            <Total 
            numOfBirds={numOfBirds}
             />
            <ol>
                <OList 
                numOfBirds = {numOfBirds}
                /> 
            </ol>

            <ul>
                <UList 
                numOfBirds ={numOfBirds}
                 />
            </ul>
        </>
    );
}

export default Cart;