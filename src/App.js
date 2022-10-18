import { useState } from "react";

import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";

import "./App.css";

function App() {
  const [birdsCart, setBirdsCart] = useState([]);
  const [discount, setDiscount] = useState(0);

  return (
    <main>
      <Cart birdsCart={birdsCart} discount={discount} bonusItems={bonusItems} />
      <Cards
        birdData={birdData}
        birdsCart={birdsCart}
        setBirdsCart={setBirdsCart}
        setDiscount={setDiscount}
      />
      <Checkout />
    </main>
  );
}

export default App;
