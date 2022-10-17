
 import React from "react";
 import Cards from "./Components/Cards"
 import Cart from "./Components/Cart"
 import Checkout from "./Components/Checkout"
 import birdData from "./data/birds"
 import "./App.css"



function App () {
  
  return (
    <div className="birdInfo">
      <section className="cart">
        <Cart cards={Cards}/>
        <Checkout/>
      </section>
      <main>
        <Cards birdData={birdData}/>
      </main>
    </div>
  );
};

export default App;
