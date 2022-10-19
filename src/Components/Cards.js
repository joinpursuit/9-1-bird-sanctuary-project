import React from 'react';

function Cards({birdsArr, setNumofBirds, numOfBirds, setTotal,setDiscount}) {
    // select which birds to be added to cart, no duplicate birds, remove if clicked again
    function addBirdToCart(num) {
        const addedBird = birdsArr.find(({id}) => +num === id)
        const exist = numOfBirds.some(({id}) => +num === id)
        if(!exist){
            const array = [...numOfBirds, addedBird]
            setNumofBirds(array)
            calculateTotal(array)   
        }
        else{
          const remove =  numOfBirds.filter(({id}) => id !== +num )
          setNumofBirds(remove)
          calculateTotal(remove)
        }
        
    }

    // On click function for button
    function findId(e) {
        
        addBirdToCart(e.target.value)
        
        if(e.target.innerText === `ADOPT`){
            e.target.innerText = `REMOVE`
            e.target.style.backgroundColor= `rgb(173, 5, 5)`   
        }
        else{
            e.target.innerText = `ADOPT`
            e.target.style.backgroundColor= `rgb(43, 111, 9)`
            e.target.style.color = `white`
        }
        
    }

    // function for calculating/updating total/ discount
    function calculateTotal(arr) {
        const value = arr.reduce((acc,{amount}) => amount +acc ,0)
        const discountedTotal = value - (value * .1)
        const length = arr.length
        if(length >= 3){
            setDiscount(true)
            setTotal(discountedTotal)
        }
        else{
            setDiscount(false)
            setTotal(value)
        }
    }


   return(
    <>
        {
            birdsArr.map(({name, amount, img, id}) => {
                return (
                <div className='birds' key= {id}>
                    
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
    </>
    )
}

export default Cards;