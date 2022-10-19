import React from 'react';


function Total({total, discount}) {
    
   
    return (
        <>
            <h6>Discount: {discount ? 10 : 0}%</h6>
            <h4>Total: ${total}</h4>
        </>
    );
}

export default Total;