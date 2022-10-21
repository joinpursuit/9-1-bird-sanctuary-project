import { useState } from "react";
import birdData from "./data/birds";
import Checkout from "./Checkout"
import Cards from "./Cards";
import Cart from "./Cart"

function App () {
  
  const [cart, setCart] = useState([]);
  // Sets the start of cart to an empty array by default.

  return (
    <div>
      <Cart cart={cart} />
      <Checkout />
      <Cards birdData={birdData} setCart={setCart} cart={cart} />

      {/* Passing the data as a prop to each component in order to make it easily accessible and not repeat code. */}

    </div>
  );
};

export default App;
