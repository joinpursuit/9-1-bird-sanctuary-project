import Cards from "./Components/Cards";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import birdData from "./data/birds"
import { useState } from "react"
import bonusItems from "./data/bonusItems"


function App () {
  const [cart, setCart]= useState([])


    const handleClick = (bird) => {
      if (cart.includes(bird)) {
        return alert("You have already added this bird to the cart")
      }
        setCart([...cart, bird])
        console.log(bird)  
    }
    
    function removeFromCart(id) {
      let filterCart = cart.filter((bird) => {
        return bird.id !== id;
      })
      setCart(filterCart);
    }



    const cartTotal = cart.reduce((i, bird) => {
      return i + bird.amount
    }, 0)
  
  return (
    <div>
      <Cards handleClick={handleClick} birdData={birdData} />
      <Cart  
      removeFromCart={removeFromCart} 
      cart={cart} 
      cartTotal={cartTotal}
      bonusItems={bonusItems}
      />
      
      <Checkout />
    </div>
  );
};

export default App;
