import { useState } from "react";
import BirdCards from './Components/BirdCards'
import Cart from './Components/Cart'
import Form from './Components/Form'
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";

import './App.css'

function App () {
  return (
    <div className="App">
      <main>
        <BirdCards
        birdData={birdData}
        />
      </main>
    </div>
  );
};

export default App;
