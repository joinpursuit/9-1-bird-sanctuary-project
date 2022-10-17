import React from 'react';
import { useState } from 'react';
import Button from './Button';


function Cards({birdsArr}) {
    // Create Card state for individual bird data to be passed to button -> passed to Cart
    // Need to update Card Data value to send to button to onClick sends to Cart
    const [cardData, setCardData] = useState(
        {
            name: "",
            price: 0,
            id: null,
        }
    )
   return birdsArr.map(({name, amount, img, id}) => {
        return (
            <div className='birds' id= {id}>
                
                <h5>{name}</h5>
                <p> Price: ${amount}</p>
                <img 
                src= {img}
                alt='' />
                <br></br>
                {/* Button Component goes here*/}
                <Button
                key = {id}
                cardData = {cardData}
                setCardData = {setCardData} />
    
            </div>
        );
    })

    
}

export default Cards;