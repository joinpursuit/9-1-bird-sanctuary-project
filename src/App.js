 import  React, {useState} from "react";
import birdData from "./data/birds";
import Cards from "./Cards"
import Checkout from "./Checkout"



function App () {
  const [bird, setBird] = useState = (birdData)



  
return(





 

  <div>  

         
     <Checkout />
     <Cards 
     birds={bird}/>
   
</div>

 
)}
export default App;
