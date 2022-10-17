import { useState } from "react";

import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";

import "./App.css";

function App() {
  return (
    <main>
      <Cart />
      <Cards birdData={birdData} />
      <Checkout />
    </main>
  );
}

export default App;
