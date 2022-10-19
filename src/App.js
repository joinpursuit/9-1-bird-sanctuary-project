import { useState } from "react";
import BirdCards from './Components/BirdCards'
import Cart from './Components/Cart'
import Form from './Components/Form'
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";

import './App.css'

function App () {

  const [userCart, setUserCart] = useState([])
  // let totalCart = 0
  const [totalCart,setTotalCart] = useState(0)
  const [discount, setDiscount] = useState(0)

  const addBird = (bird) => {
    let x = totalCart + bird.amount
    
    if(userCart.includes(bird)){
      alert('You have already added this bird to the cart')
    }else{
    setUserCart([...userCart, bird])
      // console.log({userCart})
      
      
      if(userCart.length+1 >=3){
          // console.log(totalCart)
          console.log(x)
          setDiscount(10)
          setTotalCart(x - (x * .10))
        }else {setTotalCart(x)
        console.log(x)}
      } 
}
  
  return (
    <div className="App">
      <main>
        
        <Cart 
        userCart={userCart}
        totalCart={totalCart}
        discount={discount}
        bonusItems={bonusItems}
        />

        <Form />

        <BirdCards
        birdData={birdData}
        addBird={addBird}
        />
      </main>
    </div>
  )
}



export default App;
