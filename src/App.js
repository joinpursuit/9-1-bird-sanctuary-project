import birdData from "./data/birds"
import bonusItems from "./data/bonusItems";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import { useState } from "react";
import Checkout from "./components/Checkout";


function App () {
  const [cart, setCart] = useState([])
  const [submitInput, setSubmitInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: ""
  })
  

  function updateCart (bird) {
    setCart([...cart,bird])
  }

  function removeBird (bird) {
    const filteredCart = cart.filter((item) => item.name !== bird.name)
    setCart(filteredCart)
  }

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitInput("")
    alert("You have adopted birds. Thank you!")
  };
  

  return (
    <div>
      <Cart cart={cart} bonusItems={bonusItems} removeBird={removeBird}/>
      <Checkout handleSubmit={handleSubmit} submitInput={submitInput}/>
      <Cards birds={birdData} updateCart={updateCart} />
    </div>
  );
};

export default App;
