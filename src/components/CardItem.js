import React from 'react';
// import { useState } from "react";
import birdData from './birds'

console.log(birdData)

const CardItem = ({addBird, birdName, birdId, birdAmount, birdImg}) => {
    return (
        <li className={'card'}>
            <h3>{birdName}</h3>
            <p>{birdId}</p>
            <p>Price: ${birdAmount}</p>
            <img src={birdImg}/>
            <button className='birds' onClick={()=>addBird(birdId)}>Adopt!</button>
        </li>
    );
};

export default CardItem;