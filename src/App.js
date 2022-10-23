import React from "react";
import {useState} from "react";
import birds from "./data/birds"
import bonusItems from "./data/bonusItems"
import Cards from "./Components/Cards";
import Checkout from "./Components/Checkout";
import Cart from "./Components/Cart"

function App () {

  const[birdData, setBirdData] = useState(birds)
  const[adoptedBirds, setAdoptedBirds] = useState([])
  // const[bonusList, setBonusList] = useState(bonusItems)
  // setBonusList([...bonusItems])
  
  
  let total = 0  
  const bonusList = bonusItems
  let bonus = []


  
  const adoptedBirdsList = adoptedBirds
  //let bonusList2 = bonusList2
  let adoptedBirdsNum = adoptedBirdsList.length

  
  for (let thisBird of adoptedBirds){
      total = total + thisBird.amount 
  }

  if(adoptedBirdsNum >= 3){
      total = total - (total * .1)
  }

  
    if(total >= 100 && total <= 299){
        bonus.push(bonusList[0])

    } else if (total >=300 && total <500){
        bonus = []
        bonus.push(bonusList[0], bonusList[1])

    } else if (total >=500 && total < 1000){
        bonus = []
        bonus.push(bonusList[0], bonusList[1], bonusList[2])

    } else if( total >= 1000){
        bonus = []
        bonus.push(bonusList[0], bonusList[1], bonusList[2], bonusList[3])
    } 


  function addBird (bird){
    console.log("bird= ",bird)
    if(adoptedBirds.find((birdy) => birdy.id === bird.id )){
      alert("You already adopted this bird. You can only adopt a bird once.")
    } else {
    setAdoptedBirds([...adoptedBirds, bird])}
    }
  
  function removeBird(birdID) {
    const filteredBirds = adoptedBirds.filter((bird) => bird.id !== birdID);
    setAdoptedBirds(filteredBirds)
  }
  // function removeBonus(birdID) {
  //   const filteredBirds = adoptedBirds.filter((bird) => bird.id !== birdID);
  //   setAdoptedBirds(filteredBirds)
  //   setBonusList([])
  // }

  return (
    <div className = "App">

    <div>
      <Cart  adoptedBirds={adoptedBirds}
             setAdoptedBirds = {setAdoptedBirds} 
             adoptedBirdsNum = {adoptedBirdsNum}
             total = {total}
             bonus = {bonus}
             removeBird = {removeBird}
             /> 
      <Checkout 
              setAdoptedBirds = {setAdoptedBirds} /> 
    </div  >
<div className = "showCards">
      <Cards birdData={birdData} 
             addBird={addBird} />
     </div>      
    </div>
  );
};

export default App;



//handleClickBonus={handleClickBonus} 
//           <ul>
//             {birds.map((bird) => {
//               return <BirdListItem bird={bird} key={bird.id} updateBirdAttendance={updateBirdAttendance}
//               removeBird={removeBird}/>;
//             })}
//         

// function addBird (bird){
  //   console.log("bird= ",bird)
  //   setAdoptedBirds([...adoptedBirds, bird])
  // }

  
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
// 


 // function handleClickBonus(){
  //    if(total >= 100 && total <= 299){
  //       //  bonus.push(bonusList[0])
  //       setBonusList([bonusItems[0]])

  //    } else if (total >=300 && total <500){
  //       //  bonus.push(bonusList[0], bonusList[1])
  //       setBonusList([bonusItems[0], bonusItems[1] ])
 
  //    } else if (total >=500 && total < 1000){
  //       //bonus.push(bonusList[0], bonusList[1], bonusList[2])
  //       setBonusList([bonusItems[0], bonusItems[1], bonusItems[2] ])
 
  //    } else if( total >= 1000){
  //        setBonusList([bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3] ])
         
  //    } 
  //   }