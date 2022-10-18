import birdData from './data/birds'
import Cards from './Components/Cards'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import { useState } from 'react'
import './App.css'

function App () {

  const [adoptedBirds, setAdoptedBirds] = useState([])

  const selectBird = (e) => {
    const selectedBird = {
      name: e.target.name,
      amount: e.target.value,
    }

    updateBirds(selectedBird, adoptedBirds)
  }

  const updateBirds = (selectedBird, adoptedBirds) => {
    console.log(selectedBird)
    console.log(adoptedBirds)

    // adoptedBirds.map((bird) => {
    //   if(bird.name === selectedBird.name){
    //     return alert('You have already added this bird to the cart')
    //   } else {
    //     return setAdoptedBirds([...adoptedBirds, selectedBird])
    //   }
    // }) 
    
    setAdoptedBirds([...adoptedBirds, selectedBird])
  }

  return (
    <main>
      <aside>
        <Cart
          adoptedBirds={adoptedBirds}
        />
        <Checkout />
      </aside>
      <section>
        {
          birdData.map((bird) => {
            return (
                <Cards 
                  bird={bird}
                  selectBird={selectBird}
                  updateBirds={updateBirds}
                  key={bird.id}
                />
            )
          })
        }
      </section>
    </main>
  );
};

export default App;
