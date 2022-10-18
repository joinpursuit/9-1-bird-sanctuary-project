import { useState } from "react";

// Data
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";

// Components
import Cart from "./Components/Cart.js";
import Checkout from "./Components/Checkout.js";
import BirdCard from "./Components/BirdCard";
import "./App.css";

function App() {
  // State hooks
  const [adoptedBirds, setAdoptedBirds] = useState([]);
  const [cost, setCost] = useState(0);
  const [discount, setDiscount] = useState(0);

  // Variables
  const birds = [...birdData];
  const bonus = [...bonusItems];

  // Helpers
  const adoptBird = (bird) => {
    if (!adoptedBirds.includes(bird)) {
      setAdoptedBirds([...adoptedBirds, bird]);
    } else alert("You have already adopted this bird");
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Bird Sanctuary Project</h1>
      </header>
      <main className="main">
        <aside className="aside">
          <Cart
            adoptedBirds={adoptedBirds}
            discount={discount}
            bonus={bonus}
            cost={cost}
          />
          <Checkout />
        </aside>
        <ul className="birds">
          {birds.map((bird) => {
            return <BirdCard adoptBird={adoptBird} key={bird.id} bird={bird} />;
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
