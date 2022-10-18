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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");

  function clickSubmit(e) {
    e.preventDefault();
    if (firstName && lastName && email && zip) {
      alert("You have adopted birds. Thank you!");
    }
  }

  function updateCart(bird) {
    setCart([...cart, bird]);
  }

  return (
    <div>
      <Cart
        bonusItems={bonusItems}
        cart={cart}
        discount={discount}
        setDiscount={setDiscount}
      />
      <Checkout
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        zip={zip}
        setZip={setZip}
        clickSubmit={clickSubmit}
      />
      <Cards birds={birdData} updateCart={updateCart} />
    </div>
  );
}

export default App;
