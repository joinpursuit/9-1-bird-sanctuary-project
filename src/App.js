import {useState} from "react";
import birdData from "./data/birds";
import Card from "./Components/Card";
import Checkout from "./Components/Checkout";
import Cart from "./Components/Cart";


function App () {


  // const [birdInfo, getBirdInfo] = useState(birdData)
  // const [newEvent, setNewEvent] = useState({
  //   firstName: "",
  //   lastName: "",
  //   Email: "",
  //   ZipCode: "",
  //   eventImage: ""
  // });

//   const birdName = birdInfo.map(name => {
//     return (<li>{name}</li>)
// })

  return (
    <div>
      <Card />
      <Checkout />
      <Cart />
    </div>
  );
};

export default App;
