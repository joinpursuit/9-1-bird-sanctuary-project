import {useState} from "react";
import birdData from "./data/birds";
import Card from "./Components/Card";
import Checkout from "./Components/Checkout";
import Cart from "./Components/Cart";

function App () {
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [birdsInCart, setBirdsInCart] = useState([])
  const [isDiscountApplied, setIsDiscountApplied] = useState(false)

  function handleSubmit(data) {
      const discountPrice = 10
      const name = data.name;
      const amount = data.amount;
      const id = data.id

      if(!birdsInCart.find(e => e.name === name || e.amount === amount)) {
          birdsInCart.push({name, amount, id});
          setTotal(total + amount)
      } else {
          alert('You have already added this bird to the cart')
      }
      if (birdsInCart.length === 3 && !isDiscountApplied) {
          setDiscount(discount + discountPrice)
          setIsDiscountApplied(true);
      }
      setBirdsInCart(birdsInCart)
  }
  
  return (
    <div style={{display: "flex"}}>
      <Cart birdsInCart={birdsInCart} total={total} discount={discount}></Cart>
      <Card birdData={birdData} handleSubmit={handleSubmit}/>
      <Checkout />
    </div>
  );
};

export default App;
