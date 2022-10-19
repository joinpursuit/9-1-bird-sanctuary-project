import Cards from "./Components/Cards";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import birdData from "./data/birds"
import { useState } from "react"

function App () {

  const [birds, setBirds] = useState(birdData)
  const [cart, setCart]= useState([])
    const handleClick = (bird) => {
        setCart([...cart, bird])
        console.log(bird)
    }
  
  // const addCart = (product) => {
  //   const exist = cartItems.find(x=> x.id === product.id)
  //   if(exist){
  //     setCartItems(cartItems.map(x => x.id === product.id ? {...exist}:x
  //       ))}
  //       else {
  //         setCartItems([...cartItems, {...product}])
  //       }
  //   }
  // const addCart = (bird) => {
  //   setBirds([bird])
  // }  


  return (
    <div>
      {/* <Cards addCart={addCart}  birds={birds} /> */}
      {/* <Cart addCart={addCart} cartItems={cartItems}/> */}
      <Cards handleClick={handleClick} birds={birds} />
      <Cart  cart={cart} setCart={setCart} birds={birds}/>
      <Checkout />
    </div>
  );
};

export default App;
