import { useState } from "react";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import Cards from "./Cards";
import Checkout from "./Checkout";
import Cart from "./Cart";

function App() {
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
    setCart([]);
    resetForm();
  }

  function resetForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setZip("");
  }

  function updateCart(bird) {
    if (cart.includes(bird)) {
      return alert("You have already added this bird to the cart");
    }
    setCart([...cart, bird]);
  }

  function removeBird(id) {
    let filterBird = cart.filter((bird) => {
      return bird.id !== id;
    });
    setCart(filterBird);
  }

  return (
    <div>
      <Cart
        bonusItems={bonusItems}
        cart={cart}
        discount={discount}
        setDiscount={setDiscount}
        removeBird={removeBird}
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
        resetForm={resetForm}
      />
      <Cards birds={birdData} updateCart={updateCart} />
    </div>
  );
}

export default App;
