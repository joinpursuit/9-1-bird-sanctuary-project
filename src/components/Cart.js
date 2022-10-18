import {useState} from 'react'

export default function Cart ({ total, discount, bonusItems, cart, birdData}){
cart.length >= 3 ? (discount = 10) : (discount = 0);
  //Does cart go over 3 if so discount if not no

 total = 0
  cart.map((bird) => {
    cart.length >= 3 ? (total += bird.amount * 0.9) : (total += bird.amount);
  });
    

 function bonus(){
    if(total > 1000){
        return(
            <ul className='ul'>
            <li>{bonusItems[0]}</li>
            <li>{bonusItems[1]}</li>
            <li>{bonusItems[2]}</li>
            <li>{bonusItems[3]}</li>
            </ul>
        )
    }if(total >= 500){
        return(
            <ul className='ul'>
            <li>{bonusItems[0]}</li>
            <li>{bonusItems[1]}</li>
            <li>{bonusItems[2]}</li>
            </ul>
        )
    }if(total >= 300){
        return(
            <ul className='ul'>
            <li>{bonusItems[0]}</li>
            <li>{bonusItems[1]}</li>
            </ul>
        )
    }if(total >= 100){
        return(
            <ul className='ul'>
            <li>{bonusItems[0]}</li>
            </ul>
        )
    }else{
        return(
        <ul className='ul'>
            <li>{bonusItems[0]}</li>
            </ul>
        )
    }
 } 


//THIS REMOVES BUTTON BUT NOT WORDS FIX LATER

 return(
    <div className='Cart'>
        <h2>Cart</h2>
        <h4>Discount: {discount}%</h4>
        <h4>Total: ${total}</h4>
        <ol>
            {cart.map((bird) =>{
                    return (
                        <li>
                        {bird.name} ${bird.amount}
                        <button>Remove Bird</button>
                        </li>
                    )
            })}
        </ol>
        <ul>
          Your Bonuses: {bonus()}
        </ul>
    </div>
 )
}