
import React from 'react';
import { useState } from 'react';



function Cards({birdsArr, setNumofBirds, numOfBirds}) {
    // select which birds to be added to cart, no duplicate birds, remove if clicked again
    function addBirdToCart(num) {
        const addedBird = birdsArr.find(({id}) => +num === id)
        const exist = numOfBirds.some(({id}) => +num === id)
        if(!exist){
            setNumofBirds([...numOfBirds, addedBird])
        }
        else{
          const remove =  numOfBirds.filter(({id}) => id !== +num )
          setNumofBirds(remove)
        }
    }

    // some function that adds clicked prop to object and toggles true and false

    // On click function for button
    function findId(e) {
        addBirdToCart(e.target.value)
    }


   return birdsArr.map(({name, amount, img, id}) => {

        return (
            <div className='birds' id= {id}>
                
                <h5>{name}</h5>
                <p> Price: ${amount}</p>
                <img 
                src= {img}
                alt='' />
                <br></br>
                <button
                value={id}
                onClick={(event) => {findId(event)}}>ADOPT</button>
    
            </div>
        );
    })

    
}

export default Cards;