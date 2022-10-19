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
      // console.log(bird);
      calcDiscount(bird);
    }
  }
  // calcTotal()
  //   (total = cartBirds.reduce((accu, bird) => {
  //     return accu + bird.amount;
  //   }, 0))
  // }
  // function calcTotal() {
  //   let num =cartBirds.reduce((accu, bird) => {
  //     return accu + bird.amount;
  //   }, 0)
  //   if()
  //   return num
  // }

  function calcDiscount(bird) {
    if (cartBirds.length + 1 > 2) {
      console.log("calcDiscount", total);
      setDiscount(10);
      setTotal((total += bird.amount) * 0.9);
    } else {
      setTotal((total += bird.amount));
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
        <Checkout
          setCartBirds={setCartBirds}
          setTotal={setTotal}
          setDiscount={setDiscount}
        />
      </div>
      <div className="card" id="card">
        {birds.map((bird) => {
          return (
            <Cards
              birds={birds}
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
