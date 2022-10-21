import { useState } from "react";
import birdData from "./data/birds";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Cards from "./Components/Cards";
import bonusItems from "./data/bonusItems";
import "./App.css";
import "./Components/Cards.css";
import "./Components/Cart.css";
import "./Components/Checkout.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      alert("You have already added this bird to the cart.");
    } else {
      setCartItems([
        ...cartItems,
        { ...product, name: product.name, amount: product.amount },
      ]);
    }
  };

    const handleRemoveProduct = (id) => {
      setCartItems(cartItems.filter((item) => item.id !== id))
    }

  return (
    <div className="App">
      <div>
        <Cart 
        cartItems={cartItems}
        handleRemoveProduct={handleRemoveProduct}
        bonusItems={bonusItems}/>
        <Checkout
        cartItems={cartItems}
        setCartItems={setCartItems} />
      </div>
      <div className="cards">
        <Cards
        birdData={birdData}
        handleAddProduct={handleAddProduct} />
      </div>
    </div>
  );
}

export default App;


