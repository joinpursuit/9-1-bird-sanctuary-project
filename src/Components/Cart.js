
import React from 'react';
import OList from './OList';
import Total from './Total';
import UList from './UList';

function Cart({numOfBirds}) {

    return (
        <>
            <h3>Cart</h3>
            <Total 
            numOfBirds={numOfBirds}
             />
            <ol>
                <OList 
                numOfBirds = {numOfBirds}
                /> 
            </ol>

            <ul>
               <p>***BONUS REWARDS***</p>
                <UList 
                numOfBirds ={numOfBirds}
                 />
            </ul>
        </>
    );
}

export default Cart;