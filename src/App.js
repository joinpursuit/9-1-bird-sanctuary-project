import { useState } from "react";
import birdData from "./data/birds";
import Card from "./Components/Card";
import Cards from "./Components/ Cards";
// import Cart from "./Components/Cart";
// import Checkout from "./Components/Cehckout";
function App() {
  //! create a state for cart amount
  const [cart, setCart] = useState("");
  console.log(cart);
  return (
    <div className="Main">
      <h1>Bird Sanctuary!</h1>
      <Cards></Cards>
    </div>
  );
}
export default App;
