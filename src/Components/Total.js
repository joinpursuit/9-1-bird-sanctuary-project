import React from 'react';


function Total({numOfBirds}) {
    
    const currentTotal = numOfBirds.reduce((acc,{amount}) => amount +acc ,0)
    const discountedTotal = currentTotal - (currentTotal * .1)
    const length = numOfBirds.length
   
    return (
        <>
            <p>Discount: {length >= 3 ? 10 : 0}%</p>
            <h4>Total: ${length < 3 ? currentTotal : discountedTotal}</h4>
        </>
    );
}

export default Total;