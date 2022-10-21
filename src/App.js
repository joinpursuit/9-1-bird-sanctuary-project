 import  React, {useState} from "react";
import birdData from "./data/birds";
import Cards from "./Cards"
import Checkout from "./Checkout"
import Cart from "./Cart"


function App () {
  const [bird, setBird] = useState = (birdData)



  
return(





 

  <div>  

         
     <Checkout />
     <Cards 
     birds={bird}/>
     
   <Cart/>
</div>

 
)}
export default App;
