import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { useState } from "react";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import Cards from "./Components/Cards";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

function App() {
  const [bonus, setBonus] = useState([bonusItems]);

  return (
    <div>
      <Cart bonuses={bonusItems} />
      <Checkout />
      <Cards birds={birdData} />
    </div>
  );
}

export default App;
