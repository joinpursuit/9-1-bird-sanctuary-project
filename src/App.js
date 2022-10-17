import { useState } from 'react';
import birdData from './data/birds';
import bonusItems from './data/bonusItems';
import Cards from './Cards';
import Cart from './Cart';
import Checkout from './Checkout';

function App() {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);

  function updateCart(bird) {
    setCart([...cart, bird]);
  }
  return (
    <div>
      <Cart bonusItems={bonusItems} cart={cart} discount={discount} />
      <Checkout />
      <Cards birdData={birdData} updateCart={updateCart} />
    </div>
  );
}

export default App;
