import { useState } from "react";
import birdData from "./data/birds";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Cards from "./Components/Cards";
import bonusItems from "./data/bonusItems";

function App() {
  const [cartOption, setCartOption] = useState([]); // []
  // const [birdOption, setBirdOption] = useState(birdData);
  // const [discount, setDiscount] = useState(0);
  let discount;
  function handleBirdOption(bird) {
    if (cartOption.includes(bird)) {
      // if (cartOption.indexOf(bird) !== -1)
      return alert("You have already added this bird to the cart");
    } else {
      setCartOption([...cartOption, bird]);
    }
  }
  return (
    <div className="Main">
      {/* <h1>Bird Sanctuary!</h1> */}
      <Cards birdData={birdData} handleBirdOption={handleBirdOption} />
      <Cart
        discount={discount}
        cartOption={cartOption}
        bonusItems={bonusItems}
        setCartOption={setCartOption}
      ></Cart>
      <Checkout setCartOption={setCartOption} />
    </div>
  );
}
export default App;
