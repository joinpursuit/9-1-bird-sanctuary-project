import { useState } from "react";
import birdData from "./data/birds";
import Card from "./Components/Card";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import './App.css';

function App () {
const [birds,setBirds] = useState(birdData)
const [cart, setCart]= useState([])

function updateCart(bird) {
  if(cart.includes(bird)){
    alert('You have already added this bird to the cart') 
    return;
  }
  setCart([...cart, bird ])
}

function removeBird(BirdID) {
  const filteredBirdArray = cart.filter((bird) => bird.id !== BirdID);
  setCart(filteredBirdArray);
}

function resetCart() {
  setCart([]);
}

  return (
    <div className="main">
      <div>
       <div className="Cart">
    <Cart cart={cart} removeBird={removeBird}/>
       </div>
       <div className="Checkout">
    <Checkout resetCart={resetCart}/>
    </div>
      </div>
      <div className="Card">
    <Card birds={birds} updateCart={updateCart} cart={cart} />
      </div>
    
    </div>
  );
};

export default App;
