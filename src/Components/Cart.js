import React from 'react';

function Cart({ cart, removeFromCart, cartTotal, bonusItems}) {    
    return (
        <div>
            <h2>Cart Items</h2>
            <h4>Total: ${cart.length > 2 ? cartTotal * 0.9 : cartTotal}</h4>
      <span>Discount: {cart.length > 2 ? 10 : 0}% </span>
            
            {cart.map((bird)=>(
                    <li key={bird.id}> {bird.name}: ${bird.amount} <button 
                        key={bird.id} onClick={()=> removeFromCart(bird.id)}>Remove
                        </button>
                    </li>
            ))}


<span>Your donations have qualifed you for the following items: </span>
            <ul>
        {cartTotal >= 100 ? <li>{bonusItems[0]}</li> : null}
        {cartTotal >= 300 ? <li>{bonusItems[(0, 1)]}</li> : null}
        {cartTotal >= 500 ? <li>{bonusItems[(0, 1, 2)]}</li> : null}
        {cartTotal >= 1000 ? <li>{bonusItems[(0, 1, 2, 3)]}</li> : null}
            </ul>
           
                
            
        </div>
    );
}

export default Cart;