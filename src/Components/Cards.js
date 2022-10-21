import React from 'react';


function Cards({ birdData, handleClick }) {
    

    return (
        <div>
            { birdData.map((bird)=>(
                <div key={bird.id} className="birds">
                <h4> {bird.name}</h4>
                <div>Price: ${bird.amount}</div>
                <img className='images' src={bird.img} alt={bird.name}></img>
                <button onClick={()=> handleClick(bird)}>Adopt</button>
            </div>
            )) }  
        </div>
    );
}

export default Cards;