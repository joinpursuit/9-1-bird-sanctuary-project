import {useState} from 'react'
import React from 'react'
import Cards from './components/Cards'
import Checkout from './components/Checkout'
import Cart from './components/Cart'
import './App.css'
import birdData from './data/birds'
import bonusItems from './data/bonusItems'

function App () {
  const [cart, setCart] = useState([])

  return (
    <div className='bird-cards'>
      <Cards 
      birdData={birdData}
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
