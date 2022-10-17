import React from 'react';

function Cart(props) {
    
    return (
        <div className='cart'>
            <p>Discount: state will control this</p>
            <p>Total: accumulative value (another state?)</p>
            
            <ol>
                <li>
                    birds
                </li>
            </ol>

            <ul>
                <li>
                    bonuses displayed here
                </li>
            </ul>
        </div>
    );
}

export default Cart;