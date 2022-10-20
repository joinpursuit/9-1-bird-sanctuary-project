import { useState } from 'react';
import birdData from './data/birds';
import bonusItems from './data/bonusItems';
import Cards from './Cards';
import Cart from './Cart';
import Checkout from './Checkout';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  let [discount, setDiscount] = useState(0);

  function updateCart(bird) {
    if (cart.includes(bird)) {
      return alert('You have already added this bird to the cart');
    }
    setCart([...cart, bird]);
  }

  return (
    <div className="fullDiv">
      <div className="asideDiv">
        <div className="Cart">
          <Cart
            bonusItems={bonusItems}
            cart={cart}
            setCart={setCart}
            discount={discount}
            setDiscount={setDiscount}
          />
        </div>
        <div className="Checkout">
          <Checkout setCart={setCart} />
        </div>
      </div>

      <div className="Cards">
        <Cards birdData={birdData} updateCart={updateCart} />{' '}
      </div>
    </div>
  );
}

export default App;
