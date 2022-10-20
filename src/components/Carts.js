import React, { useState } from 'react'
import BonusItemsApplied from './BonusItemsApplied';

function Carts({total, cart}) {
  // using ternary 
  const realTotal = cart.length >= 3 ? total* .9 : total;
  const realPerct = cart.length >= 3 ? 10 : 0;
  const [bonusItems, setBonusItems] = useState ([]);

  return (
    <div className='Cart'>
        <h2>Cart</h2>
        <h4>Total: ${realTotal}</h4>
        <p>Discount: {realPerct}%</p>
        <ol>
            {cart.map((birdClicked) => (
              <li>
                {birdClicked.name}: ${birdClicked.amount}
              </li>
            ))}
        </ol>
        <p>Your donations have qualifies you for the following items:</p>
          <BonusItemsApplied cart={cart} total={total} bonusItems={bonusItems} setBonusItems={setBonusItems} />
    </div>
  )
}

export default Carts