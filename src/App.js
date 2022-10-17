import { useState } from "react";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import Cards from "./Cards";
import Checkout from "./Checkout";
import Cart from "./Cart";

function App() {
  // const [birds, setBirds] = useState(birdData);
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);

  function updateCart(bird) {
    setCart([...cart, bird]);
  }

  return (
    <div>
      <Cards birds={birdData} />
      <Cart bonusItems={bonusItems} cart={cart} discount={discount} />
      <Checkout />
    </div>
  );
}

export default App;
