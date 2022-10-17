import { useState } from "react";

import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";

function App() {
  return (
    <main>
      <Cart />
      <Checkout />
      <Cards birdData={birdData} />
    </main>
  );
}

export default App;
