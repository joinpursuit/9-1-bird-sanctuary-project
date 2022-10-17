import { useState } from "react";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import Cards from "./Cards";
import Checkout from "./Checkout";
import Cart from "./Cart";

function App() {
  const [birds, setBirds] = useState(birdData);

  return (
    <div>
      <Cards birds={birdData} />
    </div>
  );
}

export default App;
