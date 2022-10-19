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
  const [birdy] = useState(birdData)

  const removeBird = (index) => {
    let newCart = cart
    newCart.splice(index, 1)
    setCart([...newCart])
  }

  return (
    <div className='app'>
      <div className='right'>
      <Cards
      birdData={birdy}
      cart={cart} 
      setCart={setCart}/>
      </div>
      <div className='left'>
      <Cart 
      cart={cart} 
      setCart={setCart}
      bonusItems={bonusItems}
      removeBird={removeBird}
      />
      <Checkout 
      cart={cart}
      setCart={setCart}/>
      </div>
    </div>
  );
};

export default App;
