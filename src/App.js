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
    if (cart.includes(bird)) {
      alert("You have already added this bird to the cart")
    } else {
    setCart([...cart,bird])
    }
  }

  function removeBird (bird) {
    const filteredCart = cart.filter((item) => item.name !== bird.name)
    setCart(filteredCart)
  }

  function handleSubmit (event) {
    event.preventDefault();
    setSubmitInput(
      {
        firstName: "",
        lastName: "",
        email: "",
        zipCode: ""
      }
    )
    setCart([])
    alert("You have adopted birds. Thank you!")
  };

  function handleTextChange(event) {
    setSubmitInput({
      ...submitInput,
      [event.target.id]: event.target.value
    })
  }
  
  return (
    <div>
      <Cart cart={cart} bonusItems={bonusItems} removeBird={removeBird} />
      <Checkout handleSubmit={handleSubmit} submitInput={submitInput} handleTextChange={handleTextChange}/>
      <Cards birds={birdData} updateCart={updateCart} />
    </div>
  );
};

export default App;
