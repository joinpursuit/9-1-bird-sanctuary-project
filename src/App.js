import React from "react";
import {useState} from "react";
import birds from "./data/birds"
// import bonusItems from "./data/bonusItems"
import Cards from "./Components/Cards";
import Checkout from "./Components/Checkout";
import Cart from "./Components/Cart"

function App () {

  const[birdData, setBirdData] = useState(birds)
  const[adoptedBirds, setAdoptedBirds] = useState([])
  // const[bonusCounter, setBonusCounter] = useState(0)
  // const bonus = bonusItems
  
  function addBird (bird){
    console.log("bird= ",bird)
    setAdoptedBirds([...adoptedBirds, bird])
  }

  // handleClickBonus())
  // const bonusShell1 = document.querySelector(".p-hidden")
  // const bonusShell2 = document.querySelector('ul-hidden')
  
//   function handleClickBonus(bonus){
//     if(bonusCounter <= 4) {
//         bonusShell1.classList.remove("p-hidden")
//         bonusShell2.classList.remove("ul-hidden")
//         const bonusItem = document.createElement('li')
//         bonusShell1.append(bonusShell2)
//         bonusShell2.append(bonusItems)
//         bonusItem.append(bonus[bonusCounter])
//         setBonusCounter(bonusCounter+1)  
//         return bonusItem
//     }
// }

  return (
    <div className = "App">

    <div cart-checkout>
      <Cart  birdData={birdData} 
             adoptedBirds={adoptedBirds} /> 
      <Checkout /> 
    </div>
      <Cards birdData={birdData} 
             addBird={addBird} />
            
    </div>
  );
};

export default App;

     {/* handleClickBonus={handleClickBonus} */} 
//           <ul>
//             {birds.map((bird) => {
//               return <BirdListItem bird={bird} key={bird.id} updateBirdAttendance={updateBirdAttendance}
//               removeBird={removeBird}/>;
//             })}
//         



