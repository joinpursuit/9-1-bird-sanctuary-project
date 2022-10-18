import React from 'react';


function Total({numOfBirds}) {
    
    const currentTotal = numOfBirds.reduce((acc,{amount}) => amount +acc ,0)
    const discountedTotal = currentTotal - (currentTotal * .1)
    const length = numOfBirds.length
   
    return (
        <>
            <h6>Discount: {length >= 3 ? 10 : 0}%</h6>
            <h4>Total: ${length < 3 ? currentTotal : discountedTotal}</h4>
        </>
    );
}

export default Total;