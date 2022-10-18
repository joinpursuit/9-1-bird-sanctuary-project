import { useState } from "react";
import birdData from "./data/birds";
import Cart from "./Components/Cart";
import Checkout from "./Components/Cehckout";
import Cards from "./Components/Cards";
import bonusItems from "./data/bonusItems";

function App() {
  //! create a state for cart amount
  const [cartOption, setCartOption] = useState([]); // []
  const [birdOption, setBirdOption] = useState(birdData);
  // console.log(birdOption);
  const [discount, setDiscount] = useState(0);

  function handleBirdOption(bird) {
    // const birdOp = birdOption.map(
    //   (el) => el.id === birdOption.id && birdOption.name === el.name
    // );
    // console.log(birdOp);
    // alert("You have already added this bird to the cart");
    // return;

    setCartOption([...cartOption, bird]);
  }
  return (
    <div className="Main">
      {/* <h1>Bird Sanctuary!</h1> */}
      <Cards birdData={birdData} handleBirdOption={handleBirdOption} />
      <Cart
        discount={discount}
        cartOption={cartOption}
        bonusItems={bonusItems}
      ></Cart>
      <Checkout />
    </div>
  );
}
export default App;
