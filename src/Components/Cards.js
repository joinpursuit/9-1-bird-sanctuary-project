import React, { useState } from 'react';
import Bird from './Bird';

function Cards({ birds, handleClick }) {
    

    return (
        <div>
            { birds.map((bird)=>(
            <Bird key={bird.id} bird={bird} handleClick={handleClick} > </Bird>
            )) }  
        </div>
    );
}

export default Cards;