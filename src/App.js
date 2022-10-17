import { useState } from "react";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import Cart from "./Components/Cart";
import Cards from "./Components/Cards";
import Checkout from "./Components/Checkout";
import "./App.css";

function App() {
  const [birds, setBirds] = useState(birdData);
  const [cartBirds, setCartBirds] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  function updateCart(bird) {
    if (cartBirds.includes(bird)) {
      alert("");
    }
    setCartBirds([bird, ...cartBirds]);
    console.log(bird);
  }

  return (
    <div className="container">
      <div>
        <Cart
          setTotal={setTotal}
          bonusItems={bonusItems}
          discount={discount}
          total={total}
          cartBirds={cartBirds}
        />
        <Checkout />
      </div>
      <div className="card">
        {birds.map((bird) => {
          return <Cards birds={birds} bird={bird} updateCart={updateCart} />;
        })}
      </div>
    </div>
  );
}

export default App;
