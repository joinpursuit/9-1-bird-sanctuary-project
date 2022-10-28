import React from 'react';
import './App.css'


function Cards({ birdData, handleClick }) {
    

    return (
        <div>
            { birdData.map((bird)=>(
                <div key={bird.id} className="birds">
                <h4> {bird.name}</h4>
                <p>Price: ${bird.amount}</p>
                <img className='images' src={bird.img} alt={bird.name}></img>
                <button onClick={()=> handleClick(bird)}>Adopt</button>
            </div>
            )) }  
        </div>
    );
}

export default Cards;