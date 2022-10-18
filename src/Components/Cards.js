
import React from 'react';
import { useState } from 'react';
import Button from './Button';


function Cards({birdsArr, setNumofBirds, numOfBirds,setDiscount, setTotal}) {
    // Create Card state for individual bird data to be passed to button -> passed to Cart
    // Need to update Card Data value to send to button to onClick sends to Cart
    
    function addBirdToCart(num) {
        const addedBird = birdsArr.find(({id}) => +num === id)
        const exist = numOfBirds.some(({id}) => +num === id)
        
        if(!exist){
            setNumofBirds([...numOfBirds, addedBird])
            calculateTotal()
        }
        else{
          const remove =  numOfBirds.filter(({id}) => id !== +num )
          setNumofBirds(remove)
          calculateTotal()
        }
    }

    function calculateTotal() {
        const currentTotal = numOfBirds.reduce((acc,{amount}) => amount +acc ,0)
            setTotal(currentTotal)
    }
    
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
                {/* Button Component goes here*/}
                <button
                value={id}
                onClick={(event) => {findId(event)}}>ADOPT</button>
    
            </div>
        );
    })

    
}

export default Cards;