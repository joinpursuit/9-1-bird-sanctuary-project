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
  let [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  function updateCart(bird) {
    if (cartBirds.includes(bird)) {
      return alert("You have already added this bird to the cart");
    } else {
      setCartBirds([...cartBirds, bird]);
      console.log(bird);
      calcDiscount();
    }
    // calcTotal()
  }
  // function calcTotal() {
  //   let num =cartBirds.reduce((accu, bird) => {
  //     return accu + bird.amount;
  //   }, 0)
  //   if()
  //   return num
  // }

  function calcDiscount() {
    if (cartBirds.length + 1 > 2) {
      console.log("calcDiscount", total);
      setDiscount(10);
      setTotal((total *= 0.9));
    }
  }

  return (
    <div className="container">
      <div id="cart+checkout">
        <Cart
          setTotal={setTotal}
          bonusItems={bonusItems}
          setDiscount={setDiscount}
          discount={discount}
          total={total}
          cartBirds={cartBirds}
        />
        <Checkout />
      </div>
      <div className="card" id="card">
        {birds.map((bird) => {
          return <Cards birds={birds} bird={bird} updateCart={updateCart} />;
        })}
      </div>
    </div>
  );
}

export default App;
