import React from 'react';

function Bird({ bird, handleClick }) {
    return (
        <div>
            <img className='images' src={bird.img} alt={bird.name}></img>
            <h3> {bird.name}</h3>
            <div>${bird.amount}</div>
            <button onClick={()=> handleClick(bird)}>Adopt</button>
        </div>
    );
}

export default Bird;