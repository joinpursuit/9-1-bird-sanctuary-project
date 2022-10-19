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
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipcode: null,
  });

  // Data variables
  const birds = [...birdData];
  const bonus = [...bonusItems];

  const removeBird = (birdToRemove) => {
    const filteredBirds = adoptedBirds.filter((bird) => {
      return birdToRemove.id !== bird.id;
    });
    setAdoptedBirds(filteredBirds);
  };

  // Helpers
  const adoptBird = (bird) => {
    if (!adoptedBirds.includes(bird)) {
      setAdoptedBirds([...adoptedBirds, bird]);
    } else alert("You have already added this bird to the cart");
  };

  const clearCart = () => {
    setAdoptedBirds([]);
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      zipcode: null,
    });
  };

  return (
    <div className="app">
      <header className="header">
        <h1>
          <span id="appTitle">Bird Sanctuary</span> Project
        </h1>
      </header>
      <main className="main">
        <aside className="aside">
          <Cart
            removeBird={removeBird}
            adoptedBirds={adoptedBirds}
            bonus={bonus}
          />
          <Checkout user={user} clearCart={clearCart} />
        </aside>
        <ul className="birds">
          {birds.map((bird) => {
            return <BirdCard key={bird.id} adoptBird={adoptBird} bird={bird} />;
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
