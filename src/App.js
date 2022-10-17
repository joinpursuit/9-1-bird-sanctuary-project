
 import React from "react";
 import Cards from "./Components/Cards"
 import Cart from "./Components/Cart"
 import Checkout from "./Components/Checkout"
 import birdData from "./data/birds"
 
 import "./App.css"
import bonusItems from "./data/bonusItems";



function App () {
  
  return (
    <div className="birdInfo">
      <div className="customer">
        <div className="cart">
        <Cart/>
        </div>
        <br></br>
        <div className="checkout">

        <Checkout/>
        </div>
      </div>
      <main>
        <Cards birdData={birdData} bonusItems={bonusItems}/>
      </main>
    </div>
  );
};

export default App;
