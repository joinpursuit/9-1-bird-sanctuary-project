import Card from "./Card"
import React from 'react'

export default function Cards ({birdData, cart, setCart, nameArray}){
    /*

    REMOVE THOSE WHEN GET MAP TO WORK 


    GRAB BIRD DATA FROM BIRDS.JS
    Each bird card displays the name, image, and amount (price)
    Each bird card has a class name of birds
    Each bird card has an Adopt button
    The button text should be: Adopt
    */

    console.log(birdData)
  return(
  <>
    {birdData.map(({img, name, amount, id})=>{
        return( 
            <Card 
            name={name} 
            amount={amount} 
            id={id}
            img={img} 
            cart={cart} 
            setCart={setCart}
            nameArray={nameArray}
            />
        )
      })}
  </>
  )
}