import {useState} from 'react'
import React from 'react'
import Cards from './components/Cards'
import Checkout from './components/Checkout'
import Cart from './components/Cart'
import './App.css'
import birdData from './data/birds'
import bonusItems from './data/bonusItems'

function App () {
//   function removeBird(e){
//     // const killBird = birdy.filter((bird) => bird.id !== e)
//     // setBird(killBird)
//     // document.getElementById("detail").remove()
//     // e.target.id.remove()
//  }
 //SEND HERE TO CARD & CALLED ONCLICK SO INFO COMES BACK TO APP MOVE INFO INTO APP JS and DISTRIBUTE FROM HERE. 

 //I DONT LIKE THIS HERE FIGURE OUT HOW TO MAKE WORK IN CART

  const [cart, setCart] = useState([])
  const [birdy, setBirdy] = useState(birdData)
  return (
    <div className='bird-cards'>
      <Cards
      birdData={birdy}
      cart={cart} 
      setCart={setCart}/>
      <Cart 
      cart={cart} 
      setCart={setCart}
      bonusItems={bonusItems}
      />
      <Checkout 
      cart={cart}
      setCart={setCart}/>
    </div>
  );
};

export default App;
