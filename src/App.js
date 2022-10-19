import { useState } from "react";
import data from "./data/birds"
import bonus from "./data/bonusItems"
import Cart from "./Cart";
import Cards from "./Cards";
import Checkout from "./Checkout";

function App () {
 

  return (
    <div>
      <Cart Cart={Cart}/>
      <Checkout Checkout={Checkout}/>
      <Cards data={data}/>
    </div>
  );
};

export default App;
