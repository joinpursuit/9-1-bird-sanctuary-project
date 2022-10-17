import { useState } from "react";
import birdData from "./data/birds";
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
          <div className="cart">
            <h2>Cart</h2>
            <h4>
              Discount: <span>{discount}%</span>
            </h4>
            <h4>
              Total: <span>${cost}</span>
            </h4>
            <ol>
              <li>Adoped bird</li>
            </ol>
            <p>Your Donations have qualified you for the following items:</p>
            <ol>
              <li>First discount</li>
            </ol>
          </div>
          <div className="checkout">Checkout</div>
        </aside>
        <div className="birds">Birds</div>
      </main>
    </>
  );
}

export default App;
