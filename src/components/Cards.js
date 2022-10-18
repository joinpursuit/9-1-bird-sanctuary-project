import Card from "./Card"
import React from 'react'

export default function Cards ({birdData, cart, setCart, nameArray}){
  return(
  <div className="birds">
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
  </div>
  )
}