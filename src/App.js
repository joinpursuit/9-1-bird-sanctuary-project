import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { useState } from "react";
import { birdData } from "./data/birds";
import bonusItems from "./data/bonusItems";
import Cards from "./Components/Cards";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

function App() {
  //********* STATES *******/

  //array of birds in cart
  const [cartBirds, setCartBirds] = useState([]);

  // 10% discount -- Unused!!!
  const [discout, setDiscount] = useState(0.1);

  // array of bonus items
  const [bonus, setBonus] = useState([bonusItems]);

  // object for inputs in checkout
  const [adopter, setAdopter] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
  });

  //*********** CHECKOUT *******/

  //handles change event for inputs in checkout
  const handleChange = (e) => {
    setAdopter({ ...adopter, [e.target.id]: e.target.value });
  };

  //handles submit button in checkout
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have adopted birds. Thank you!");
    setCartBirds([]);
    setAdopter({ firstName: "", lastName: "", email: "", zipCode: "" });
  };

  //********** CART TOTAL ********/

  let cartTotal = cartBirds.reduce((total, bird) => (total += bird.amount), 0);

  const addBird = (bird) => {
    if (cartBirds.includes(bird)) {
      alert("You already have this bird");
    } else {
      setCartBirds([...cartBirds, bird]);
    }

    // if (cartTotal === 100 && cartTotal < 299) {

    // }

    //******* BONUSES *******/

    if (cartBirds.length >= 3) {
      cartTotal -= cartTotal * 0.1;
    }
  };

  //********** RETURN **********/

  return (
    <div>
      <Cart
        bonuses={bonusItems}
        cartBirds={cartBirds}
        cartTotal={cartTotal}
        setCartBirds={setCartBirds}
      />
      <Checkout
        adopter={adopter}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Cards birds={birdData} addBird={addBird} />
    </div>
  );
}

export default App;
