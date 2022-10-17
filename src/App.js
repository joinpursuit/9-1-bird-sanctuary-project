import { useState } from "react";
import birdData from "./data/birds";
import Cart from "./Components/Cart.js";
import Checkout from "./Components/Checkout.js";
import BirdCard from "./Components/BirdCard";
import "./App.css";

function App() {
  const [birds, setBirds] = useState([...birdData]);
  const [cost, setCost] = useState(0);
  const [discount, setDiscount] = useState(0);

  return (
    <>
      <div className="header">
        <h1>Bird Sanctuary Project</h1>
      </div>
      <main className="main">
        <aside className="aside">
          <Cart discount={discount} cost={cost} />
          <Checkout />
        </aside>
        <ul className="birds">
          {birds.map((bird) => {
            return <BirdCard key={bird.id} bird={bird} />;
          })}
        </ul>
      </main>
    </>
  );
}

export default App;
