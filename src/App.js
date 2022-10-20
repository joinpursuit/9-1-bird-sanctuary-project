import { useState } from "react";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import Cards from "./Components/Cards";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);

  function updatedCart(bird) {
    if (cart.includes(bird)) {
      return alert("You have already added this bird to the cart");
    } else {
      setCart([...cart, bird]);
    }
  }
  return (
    <div className="app">
      <div className="title">
        <h1>Birds Adoption App</h1>
      </div>
      <div className="joined">
        <div className="cart">
          <Cart
            cart={cart}
            bonusItems={bonusItems}
            discount={discount}
            setDiscount={setDiscount}
            setCart={setCart}
          />
        </div>
        <div className="checkout">
          <Checkout setCart={setCart} />
        </div>
      </div>
      <div className="cards">
        <Cards birdData={birdData} updatedCart={updatedCart} />
      </div>
    </div>
  );
}

export default App;
