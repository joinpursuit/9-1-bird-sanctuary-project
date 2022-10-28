import { useState } from "react";

import Cards from './components/Cards'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

import birdData from "./data/birds"
import bonusItems from "./data/bonusItems"

function App () {
  const [selectBirds, setSelectBirds] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [percent, setPercent] = useState(0)

  const addBird = (bird) => {
    const num = +cartTotal + +bird.amount
    if (selectBirds.includes(bird)){
     return alert(`You have already added this bird to the cart`)
    } else {
      setSelectBirds([...selectBirds, bird])
    }
    if(selectBirds.length + 1 >= 3){
      setCartTotal(num - num * 0.1)
      setPercent(10)
    } else {
      setPercent(num)
    }
  }

  const clearCheckout = () => {
    setSelectBirds([])
    setCartTotal(0)
    setPercent(0)
  }

  

  return (
    <div 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 3fr', 
        backgroundColor: 'lavender'}}>
      <div>
        <Cart
          percent={percent}
          selectBirds={selectBirds}
          cartTotal={cartTotal}
          bonusItems={bonusItems}
        />
        <Checkout clearCheckout={clearCheckout} />
      </div>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
          textAlign: 'center',
        }}>
        <Cards birdData={birdData} addBird={addBird} />
      </div>
    </div>
  );
};

export default App;
