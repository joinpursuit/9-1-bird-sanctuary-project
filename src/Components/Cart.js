
import React from 'react';
import { useState } from 'react';
import bonusItems from '../data/bonusItems';

function Cart({birdsArr, numOfBirds, total}) {
    // Declare state for Cart info (discount, total, keep track of number of birds(li items), need access to bonuses array)
    // const [discount, setDiscount] = useState(0)
    // const [total, setTotal] = useState(0)

    console.log(`numofbirds`,numOfBirds)
    // Functions
//    function handleDiscount() {
//             setDiscount(10)
//         }
        // if(numOfBirds.length >= 3){
        //     handleDiscount()
        // }
    

    // function calculateTotal () {
    //    const totalPrice = numOfBirds.reduce((acc, {amount}) => 
    //         acc + amount
    //     ,0)
    //     setTotal(totalPrice)
    //     }
    //     console.log(total)

    function updateBirdListItems() {

    }
       
    



    return (
        <div className='cart'>
            <h6>Cart</h6>
            <p>Discount: {}%</p>
            <p>Total: ${total}</p>
            
            <ol>
            {numOfBirds.map(({name, amount, id}) => {
                        return(
                            <li key = {id}>{name} ${amount}</li>
                        )
                    })}
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