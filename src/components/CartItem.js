import React from 'react';

const CartItem = ({birdName, birdId, birdAmount, birdImg}) => {
    return (
        <p>{birdName}: ${birdAmount}</p>
    );
};

export default CartItem;