
 import React from "react";
 import Cards from "./Components/Cards"
 import Cart from "./Components/Cart"
 import Checkout from "./Components/Checkout"
 import birdData from "./data/birds"
 import Data from "./data/Data";
 import "./App.css"
import bonusItems from "./data/bonusItems";
import {useState} from "react"


function App () {
const [bird] = useState(birdData)
const [bonus] = useState(bonusItems)
const [data, setData] = useState(Data)

function handleEvent(datas){
  setData([...data, datas])
}


  return (
    <div className="birdInfo">
      <div className="customer">
        <div className="cart">
        <Cart bonusItems={bonus} birdData={bird} data={data}/>
        </div>
        <br></br>
        <div className="checkout">

        <Checkout setData={setData}/>
        </div>
      </div>
      <main>
        <Cards data={data} birdData={bird} handleEvent={handleEvent} />
      </main>
    </div>
  );
};

export default App;
