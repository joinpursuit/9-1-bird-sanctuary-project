import {useState} from "react";
import birdData from "./data/birds";
import Card from "./Components/Card";
import Checkout from "./Components/Checkout";



function App () {

const [birdInfo, getBirdInfo] = useState(birdData)


  return (
    <div>
      <Card birdData={birdData}/>
      <Checkout />
    </div>
  );
};

export default App;
