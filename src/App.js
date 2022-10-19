import { useState } from "react";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import Cart from "./Components/Cart";
import Cards from "./Components/Cards";
import Checkout from "./Components/Checkout";
import "./App.css";

function App() {
  const [cartBirds, setCartBirds] = useState([]);

  function updateCart(bird) {
    if (cartBirds.includes(bird)) {
      return alert("You have already added this bird to the cart");
    } else {
      setCartBirds([...cartBirds, bird]);
    }
  }

  return (
    <div className="container">
      <div id="cart+checkout">
        <Cart
          bonusItems={bonusItems}
          cartBirds={cartBirds}
          setCartBirds={setCartBirds}
        />
        <Checkout setCartBirds={setCartBirds} />
      </div>
      <div className="card" id="card">
        {birdData.map((bird) => {
          return (
            <Cards
              birdData={birdData}
              bird={bird}
              updateCart={updateCart}
              key={bird.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
