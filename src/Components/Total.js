import React from 'react';
import { useState } from 'react';

function Total({numOfBirds}) {
    
    const currentTotal = numOfBirds.reduce((acc,{amount}) => amount +acc ,0)
    const discountedTotal = currentTotal - (currentTotal * .1)
    const length = numOfBirds.length
   
    return (
        <>
            <p>Discount: {length >= 3 ? 10 : 0}%</p>
            <p>Total: ${length < 3 ? discountedTotal : currentTotal}</p>
        </>
    );
}

export default Total;