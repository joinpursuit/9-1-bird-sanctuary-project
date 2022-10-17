import { useState } from "react";

import birdData from "./data/birds";
import Cards from "./Components/Cards";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";



function App () {
// Declare state for birdData [{}]
const [birdsArr, setBirdsArr] = useState(birdData)
// Declare state for selected bird id number -> (to cart/ card, card  will lift to App , sent down to cart, to compare it id in array n update cart)

const [numOfBirds, setNumofBirds] = useState([])





  return (
    <div className="topLevel">
      
      {/* Header */}
      <header>
        <h1>Bird Sanctuary Project</h1>
      </header>
      
      {/* Bird Cards */}
      <main>
        
        <Cards
        birdsArr = {birdsArr}
        numOfBirds ={numOfBirds}
        setNumofBirds = {setNumofBirds} />
        
      </main>
      
      {/* Cart and Checkout */}
      <aside>
        <>
          <Cart
          birdsArr = {birdsArr}
          numOfBirds = {numOfBirds} />
        </>
        <>
          <Checkout />
        </>
      </aside>
      
    </div>
  );
};

export default App;
