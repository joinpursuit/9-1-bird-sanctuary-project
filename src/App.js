import { useState } from "react";

import birdData from "./data/birds";
import Cards from "./Components/Cards";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";



function App () {
// Declare state for birdData [{}]
const [birdsArr, setBirdsArr] = useState(birdData)
// Declare state for selected bird id number -> (to cart/ card, card  will lift to App , sent down to cart, to compare it id in array n update cart)

// keep track of selected birds
const [numOfBirds, setNumofBirds] = useState([])

// Declare state for Cart info (discount, total, keep track of number of birds(li items), need access to bonuses array)
const [discount, setDiscount] = useState(0)
const [total, setTotal] = useState(0)





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
        setNumofBirds = {setNumofBirds}
        setDiscount = {setDiscount}
        setTotal = {setTotal} />
        
      </main>
      
      {/* Cart and Checkout */}
      <aside>
        <>
          <Cart
          birdsArr = {birdsArr}
          numOfBirds = {numOfBirds}
          discount = {discount}
          total = {total} />
        </>
        <>
          <Checkout />
        </>
      </aside>
      
    </div>
  );
};

export default App;
