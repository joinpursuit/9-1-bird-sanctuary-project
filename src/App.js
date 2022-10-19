import birdData from "./data/birds"
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import { useState } from "react";


function App () {
  let [cart, setCart] = useState([])
  

  function updateCart (bird) {
    cart.push(bird)
    console.log(cart)
  }


  return (
    <div>
      <Cart cart={cart}/>
      <Cards birds={birdData} updateCart={updateCart} />
    </div>
  );
};

export default App;
