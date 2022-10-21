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
 
  
  function addBird (bird){
    console.log("bird= ",bird)
    setAdoptedBirds([...adoptedBirds, bird])
  }

  
//   const bonusShell1 = document.querySelector(".p-hidden")
//   const bonusShell2 = document.querySelector('ul-hidden')
  
//   function handleClickBonus(bonus){
//     if(bonusCounter <= 4) {
//         bonusShell1.classList.remove("p-hidden")
//         bonusShell2.classList.remove("ul-hidden")
//         const bonusItem = document.createElement('li')
//         bonusShell1.append(bonusShell2)
//         bonusShell2.append(bonusItems)
//         bonusItem.append(bonus[bonusCounter])
//         setBonusCounter(bonusCounter+1)  
//     }
//   }
// }
// The bonus items are added as list items in an <ul> list item as follows:
// 1 bonus (first array item) is given if the total is at least 100 and no more than 299
// 2 bonuses (first and second array items) are given if the total is at least 300 and no more than 499
// 3 bonuses are given if the total is at least 500 and no more than 1000
// 4 bonuses are given if the total is 1000 or more



  return (
    <div className = "App">

    <div cart-checkout>
      <Cart  birdData={birdData} 
             adoptedBirds={adoptedBirds}
             setAdoptedBirds = {setAdoptedBirds} /> 
      <Checkout 
              setAdoptedBirds = {setAdoptedBirds}
      /> 
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



