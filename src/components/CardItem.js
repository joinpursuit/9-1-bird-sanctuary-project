import React from 'react';

const CardItem = ({birdName, birdId, birdAmount, birdImg}) => {
    return (
        <li className='card'>
            <h1>{birdName}</h1>
            <p>{birdId}</p>
            <p>Price: ${birdAmount}</p>
            <img src={birdImg}/>
        </li>
    );
};

export default CardItem;