import { useState } from "react";
import data from "./data/birds"
import bonus from "./data/bonusItems"
import Cart from "./Cart";
import Cards from "./Cards";
import Checkout from "./Checkout";

function App () {
 
  const [cart, setCart] =useState([])

  return (
    <div>
      <Cart cart={cart}/>
      <Checkout/>
      <Cards data={data} setCart={setCart} cart={cart}/>
    </div>
  );
};

export default App;
