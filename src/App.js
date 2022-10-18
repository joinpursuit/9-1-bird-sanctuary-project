import { useState } from "react";

import birdData from "./data/birds";
import Cards from "./Components/Cards";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";



function App () {
// Declare state for birdData [{}]
const [birdsArr, setBirdsArr] = useState(birdData)
// keep track of selected birds
const [numOfBirds, setNumofBirds] = useState([])

  return (
    <div className="topLevel">
      
      {/* Header */}
      <header>
        <h1>Destiny's Bird Sanctuary Project</h1>
      </header>
      
      {/* Bird Cards */}
      <main>

        <div className="card">
        <Cards
        birdsArr = {birdsArr}
        numOfBirds ={numOfBirds}
        setNumofBirds = {setNumofBirds}
         />
        </div>

      </main>
      
      {/* Cart and Checkout */}
      <aside>
        <div className="Cart">
          <Cart
          numOfBirds = {numOfBirds}
          />
        </div>

        <div className="Checkout">
          <Checkout
          setNumofBirds= {setNumofBirds} />
        </div>
      </aside>
      
    </div>
  );
};

export default App;
