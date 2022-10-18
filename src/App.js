
 import React from "react";
 import Cards from "./Components/Cards"
 import Cart from "./Components/Cart"
 import Checkout from "./Components/Checkout"
 import birdData from "./data/birds"
 
 import "./App.css"
import bonusItems from "./data/bonusItems";
import {useState} from "react"


function App () {
const [bird] = useState(birdData)
const [bonus] = useState(bonusItems)

  
  return (
    <div className="birdInfo">
      <div className="customer">
        <div className="cart">
        <Cart bonusItems={bonus}/>
        </div>
        <br></br>
        <div className="checkout">

        <Checkout/>
        </div>
      </div>
      <main>
        <Cards birdData={bird} bonusItems={bonus}/>
      </main>
    </div>
  );
};

export default App;
