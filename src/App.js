import { useState } from "react";
import BirdCards from './Components/BirdCards'
import Cart from './Components/Cart'
import Form from './Components/Form'
import birdData from "./data/birds";
// import bonusItems from "./data/bonusItems";

import './App.css'

function App () {

  const [userCart, setUserCart] = useState([])

  const addBird = (bird) => {
    if(userCart.includes(bird)){
      alert('You have already added this bird to the cart')
    }else{
    setUserCart([...userCart, bird])
      console.log({userCart})
        
   } };
  
  return (
    <div className="App">
      <main>
        
        <Cart 
        userCart={userCart}
        />

        <Form />

        <BirdCards
        birdData={birdData}
        addBird={addBird}
        />
      </main>
    </div>
  );
};



export default App;
