import React from "react";
// import {useState} from "react";
// import birdData from "./data/birds"
// import bonusItems from "./data/bonusItems"
// import Cards from "./Components/Cards";
import Checkout from "./Components/Checkout";
// import Cart from "./Components/Cart"


function App () {

  // const [img, name, amount, id  ] = birdData 


  


  // const [birds, setBirds] = useState(birdData)
  // function handleAddBird(bird) {
  //   setBirds([bird, ...birds]);
  //   console.log(bird)
  // }

  return (
    <div className = "App">
      {/* <h1>Hello, world!</h1>
      <Cards birdData={birdData}/>
      <Cart /> */}
      <Checkout /> 
    </div>
  );
};

export default App;

// import { useState } from "react";
// import { birdsData } from "./data";
// import BirdListItem from "./Components/BirdListItem";
// import NewBirdForm from "./Components/NewBirdForm";

// function App() {
//   const [birds, setBirds] = useState(birdsData);
//   const [showNewBirdForm, setNewBirdForm] = useState(false);

//   function handleAddBird(bird) {
//     setbirds([bird, ...birds]);
//   }

//   function removeBird(birdID) {
//     const filteredBirdArray = birds.filter((bird) => bird.id !== birdID);
//     setBirds(filteredBirdArray);
//   }

//   function ToggleNewBirdForm() {
//     setNewBirdForm(!showNewBirdForm);
//   }

//   function updateBirdAttendance(birdId) {
//     const birdArray = [...birds];
//     const index = birdArray.findIndex((bird) => birdId === bird.id);
//     birdArray[index].present = !birdArray[index].present;
//     setBirds(birdArray);
//   }
//   return (
//     <div className="App">
//       <header>
//         <h1> Bird Adoption</h1>
//       </header>
//       <main>
//         <div>
//           <button onClick={ToggleNewBirdForm}>
//             {showNewBirdForm ? "hide form" : "Add a new bird"}
//           </button>
//           {showNewBirdForm ? <NewBirdForm ToggleNewBirdForm={ToggleNewBirdForm}  handleAddBird={handleAddBird}/> : null}
//         </div>
//         <div>
//           <ul>
//             {birds.map((bird) => {
//               return <BirdListItem bird={bird} key={bird.id} updateBirdAttendance={updateBirdAttendance}
//               removeBird={removeBird}/>;
//             })}
//           </ul>
//         </div>
//       </main>
//     </div>
//   );
// }



