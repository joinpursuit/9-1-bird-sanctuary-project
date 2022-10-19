import { useState } from "react";
import Header from "./Components/Header";
import birdData from "./data/birds";
import Cards from "./Components/Cards";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

function App () {
// Declare state for birdData [{}]
const [birdsArr, setBirdsArr] = useState(birdData)
// keep track of selected birds
const [numOfBirds, setNumofBirds] = useState([])
// Declare state for total
const [total, setTotal] = useState(0)
// Declare State for discount
const [discount, setDiscount] = useState(false)

  return (
    <div className="topLevel">
      
      {/* Header */}
      <Header />
      
      {/* Bird Cards */}
      <main>

        <div className="card">
        <Cards
        birdsArr = {birdsArr}
        numOfBirds ={numOfBirds}
        setNumofBirds = {setNumofBirds}
        setTotal= {setTotal}
        setDiscount ={setDiscount}
         />
        </div>

      </main>
      
      {/* Cart and Checkout */}
      <aside>
        <div className="Cart">
          <Cart
          numOfBirds = {numOfBirds}
          total = {total}
          discount = {discount}
          />
        </div>

        <div className="Checkout">
          <Checkout
          setNumofBirds= {setNumofBirds}
          total = {total}
          setTotal= {setTotal}
          setDiscount = {setDiscount} />
        </div>
      </aside>
      
    </div>
  );
};

export default App;
