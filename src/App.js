import { useState } from 'react';
import birdData from './data/birds';
import bonusItems from './data/bonusItems';
import Cards from './Cards';
import Cart from './Cart';
import Checkout from './Checkout';

function App() {
  const [cart, setCart] = useState([]);
  let [discount, setDiscount] = useState(0);

  function updateCart(bird) {
    setCart([...cart, bird]);
  }
  function discountCheck() {
    if (cart.length < 3) {
      discount = 0;
    } else if (cart.length >= 3) {
      discount = 10;
    }
  }
  return (
    <div>
      <Cart
        bonusItems={bonusItems}
        cart={cart}
        discount={discount}
        setDiscount={setDiscount}
        discountCheck={discountCheck}
      />
      <Checkout />

      <Cards birdData={birdData} updateCart={updateCart} />
    </div>
  );
}

export default App;
