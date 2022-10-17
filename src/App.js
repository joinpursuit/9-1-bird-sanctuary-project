import { useState } from "react";

import birdData from "./data/birds";
import Cards from "./Components/Cards";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";



function App () {
// Declare state for birdData [{}]
const [birdsArr, setBirdsArr] = useState(birdData)





  return (
    <div className="topLevel">
      
      {/* Header */}
      <header>
        <h1>Bird Sanctuary Project</h1>
      </header>
      
      {/* Bird Cards */}
      <main>
        
        <Cards
        birdsArr = {birdsArr} />
        
      </main>
      
      {/* Cart and Checkout */}
      <aside>
        <>
          <Cart />
        </>
        <>
          <Checkout />
        </>
      </aside>
      
    </div>
  );
};

export default App;
