import { useState } from 'react'
import Cards from './components/Cards'
import Cart from './components/Cart'
import Checkout from './components/Checkout';
import birdData from './data/birds'
import './App.css'




function App () {
  const [birds, setBirds] = useState(birdData)
  const [inCart, setInCart] = useState([])

function resetCart(){
  setInCart([])
}

  function addBird(birdSelectionId){
    if(inCart.some(bird => bird.id === birdSelectionId)){
      alert('That bird is already in the cart!')
    } else { // if the cart does not contained clicked button
      const ourBird = birds.find(bird => bird.id === birdSelectionId)
      setInCart([...inCart, ourBird])
    }
  }

  return (
    <div>
      <Cart inCart={inCart}/>
      <Cards addBird={addBird} birds={birds}/>
      <Checkout resetCart={resetCart} className="Checkout"/>
    </div>
  );
};

export default App;
