import { useState } from "react";
import CheckoutBird from "./Checkout";
import BirdCarts from "./Cart";
import BirdCards from "./Cards";
import birdData from "./data/birds";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(bird) {
    setCart([...cart, bird]);

    let duplicateBoolean = cart.map((e) => e.id);

    if (duplicateBoolean.includes(bird.id)) {
      alert("you've already slected this bird!");
    }
  }

  return (
    <div className="landing">
      <aside>
        <BirdCarts
          recDon={birdData}
          addToCart={cart.filter((e, i, a) => a.indexOf(e) === i)}
          setCart={setCart}
        />
        <CheckoutBird recDon={birdData} setCart={setCart} />
      </aside>
      <main className="Main-Content">
        {<BirdCards recDon={birdData} addToCart={addToCart} />}
      </main>
    </div>
  );
}

export default App;
