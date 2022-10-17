import React from 'react';
import Button from './Button';


function Cards({birdsArr}) {
   return birdsArr.map(({name, amount, img, id}) => {
        return (
            <div className='birds' id= {id}>
                
                <h5>{name}</h5>
                <p> Price: ${amount}</p>
                <img 
                src= {img}
                alt='' />
                {/* Button Component goes here*/}
                <Button />
    
            </div>
        );
    })

    
}

export default Cards;