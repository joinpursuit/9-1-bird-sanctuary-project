import { useState } from 'react'
import Cards from './components/Cards'
import Cart from './components/Cart'
import Checkout from './components/Checkout';
import birdData from './data/birds'
import './App.css'




function App () {
  const [birds, setBirds] = useState(birdData)
  const [inCart, setInCart] = useState([])

  // create a function that sets the birds
  // console.log(birds)
  function addBird(birdSelectionId){
    console.log(birdSelectionId)
    const ourBird = birds.find(bird => bird.id = birdSelectionId)
    console.log(ourBird)
    setInCart([...inCart, ourBird])
    // setInCart([...inCart, birdSelection])
    // we will need to put logic to regrab the data
  }

  return (
    <div>
      <Cart inCart={inCart}/>
      <Cards addBird={addBird} birds={birds}/>
      {/* <Checkout/> */}
    </div>
  );
};

export default App;
