import { useState } from "react";

import birdData from "./data/birds";
import Cards from "./Components/Cards";



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
        <div>cart</div>
        <div>checkout</div>
      </aside>
      
    </div>
  );
};

export default App;
