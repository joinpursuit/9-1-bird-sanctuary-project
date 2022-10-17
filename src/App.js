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

  return (
    <div className="container">
      <div>
        <Cart
          bonusItems={bonusItems}
          discount={discount}
          total={total}
          cartBirds={cartBirds}
        />
        <Checkout />
      </div>
      <div className="birdCards">
        {birds.map((bird) => {
          return (
            <Cards
              birds={birds}
              bird={bird}
              setCartBirds={setCartBirds}
              cartBirds={cartBirds}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
