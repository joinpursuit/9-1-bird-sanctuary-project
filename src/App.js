import React, { useState } from "react";
import Cart from "./components/Cart";
import birdsData from "./data/birds";
import Cards from "./components/Cards";
import Checkout from "./components/Checkout";
import "./index.css"

function App() {
  const [birds, setBirds] = useState([]);


  return (
    <div>
      <h1>Hello, world!</h1>
      <aside>
        <Cart  
          birds={birds}
          setBirds={setBirds}
        />
        <Checkout />
      </aside>
      <main>
        <Cards
           birds={birds}
          setBirds={setBirds}
    
        />
      </main>
    </div>
  );
};


export default App;