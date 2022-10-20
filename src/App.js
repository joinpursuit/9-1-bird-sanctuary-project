import React, { useState } from "react";
import Cards from "./components/Cards";
import Checkout from "./components/Checkout";
import Carts from "./components/Carts";
import birds from "./data/birds";
import "./App.css";
import bonusItems from "./data/bonusItems";

function App() {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  return (
    <div>
      <div className="title">
          <h1>Bird Adoption Sanctuary</h1>
      </div>
    <div id="fullPage">
      <div id="leftside">
        <div>
          <Carts
            setTotal={setTotal}
            cart={cart}
            total={total}
            items={bonusItems}
          />
        </div>
        <div>
          <Checkout />
        </div>
        <div className="extra">
          <div className="thanks">
            <h4>Thank You for saving Me!</h4>
            <img src="https://i.gifer.com/8G.gif" alt="thanks" />
          </div>
        </div>
      </div>
      <div id="cards">
        <Cards
          cart={cart}
          setCart={setCart}
          total={total}
          setTotal={setTotal}
          birdData={birds}
        />
      </div>
    </div>
    </div>
  );
}

export default App;
