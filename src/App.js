import { useState } from "react";
import birdData from "./data/birds";
import Cards from "./Components/ Cards";
// import Card from "./Components/Card";
import Cart from "./Components/Cart";
import Checkout from "./Components/Cehckout";
function App() {
  //! create a state for cart amount
  const [cartOption, setCartOption] = useState([]); // cartOPtion []
  // console.log(cartOption);
  const [discount, setDiscount] = useState(0);
  function handleBirdOption(bird) {
    setCartOption([...cartOption, bird]);
  }
  return (
    <div className="Main">
      {/* <h1>Bird Sanctuary!</h1> */}
      <Cart discount={discount} cartOption={cartOption}></Cart>
      <Checkout />
      <Cards birdData={birdData} handleBirdOption={handleBirdOption}></Cards>
    </div>
  );
}
export default App;
