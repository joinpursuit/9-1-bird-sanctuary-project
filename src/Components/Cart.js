import React from 'react';


function Cart({ birds, cart, setCart }) {
    return (
        <aside>

            <h2>Cart Items</h2>
            {cart.map((bird)=>(
                <ul>
                    <li>{bird.name} - ${bird.amount}</li>

                </ul>
                
                
            ))}

           
                
            
        </aside>
    );
}

export default Cart;