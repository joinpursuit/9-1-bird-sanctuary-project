import { useState } from "react";
import birdData from "./data/birds";
import Card from "./Components/Card";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import bonusItems from "./data/bonusItems";


function App () {
const [birds,setBirds] = useState(birdData)
const [bonusItem,setBonusItem] = useState(bonusItems)
const [cart, setCart]= useState([])
const [discount, setDiscount] = useState(0)

// function AddedBonus() {
//   if (cart.length <= 3) {
//     setBonus(10%)
//   }
// }

function updateCart(bird) {
  setCart([...cart, bird ])
}

function addDiscount() {
  console.log(cart.length)

  if (cart.length > 3) {
      console.log(discount)
      setDiscount(10)
  }
  // else{
  //     setDiscountAmount((0))
  // }
}


function resetCart() {
  setCart([]);
}


  return (
    <div>
    <Card birds={birds} updateCart={updateCart}/>
    <Cart cart={cart} bonusItem={bonusItem} addDiscount={addDiscount}/>
    <Checkout resetCart={resetCart}/>
    </div>
  );
};

export default App;
