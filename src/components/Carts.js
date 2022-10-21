import React, { useState } from 'react'
import birdData from '../data/birds';
import BonusItemsApplied from './BonusItemsApplied';

function Carts({total, cart, setCart, setTotal,birdData}) {
  // using ternary 
  const realTotal = cart.length >= 3 ? total* .9 : total;
  const realPerct = cart.length >= 3 ? 10 : 0;
  const [bonusItems, setBonusItems] = useState ([]);

  const removeBird = (birdId) => {
    const filteredBirdArr = cart.filter((birdClicked) => birdClicked.id !== birdId)
    setCart([...filteredBirdArr])
}

  return (
    <div className='Cart'>
        <h2>Cart</h2>
        <h4>Total: ${realTotal}</h4>
        <p>Discount: {realPerct}%</p>
        <ol>
            {cart.map((birdClicked) => (
              <li key={birdClicked.id}>
                <span>
                {birdClicked.name}: ${birdClicked.amount}
                </span>
                <button className='deletebtn' type='submit' onClick={() =>
                   removeBird(birdClicked.id)}>Delete</button>
              </li>
              
            ))}
        </ol>
        <p>Your donations have qualifies you for the following items:</p>
          <BonusItemsApplied cart={cart} total={total} bonusItems={bonusItems} setBonusItems={setBonusItems} />
    </div>
  )
}

export default Carts