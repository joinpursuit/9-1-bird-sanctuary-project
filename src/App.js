import { useState } from "react";

import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";

import "./App.css";

function App() {
  const [birdsCart, setBirdsCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  return (
    <main>
      <Cart birdsCart={birdsCart} total={total} discount={discount} />
      <Cards
        birdData={birdData}
        birdsCart={birdsCart}
        setBirdsCart={setBirdsCart}
        total={total}
        setTotal={setTotal}
        discount={discount}
      />
      <Checkout />
    </main>
  );
}

export default App;
