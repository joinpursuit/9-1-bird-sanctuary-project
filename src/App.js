import { useState } from "react";
import birdData from "./data/birds";
import Cart from "./Components/Cart";
import Checkout from "./Components/Cehckout";
import Cards from "./Components/Cards";
function App() {
  //! create a state for cart amount
  const [cartOption, setCartOption] = useState([]); // []

  const [birdOption, setBirdOption] = useState(birdData);
  // console.log(birdOption);
  const [discount, setDiscount] = useState(0);
  function handleBirdOption(bird) {
    setCartOption([...cartOption, bird]);
    // cartOption.map((bird) => {
    // });
    if (birdOption === birdOption) {
      alert("You have already added this bird to the cart");
    }
  }
  return (
    <div className="Main">
      {/* <h1>Bird Sanctuary!</h1> */}
      <Cards birdData={birdData} handleBirdOption={handleBirdOption} />
      <Cart discount={discount} cartOption={cartOption}></Cart>
      <Checkout />
    </div>
  );
}
export default App;
