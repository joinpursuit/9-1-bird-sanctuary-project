import birdData from './data/birds'
import Cards from './Components/Cards'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import { useState } from 'react'
import './App.css'

function App () {

  const [adoptedBirds, setAdoptedBirds] = useState([])
  // const [selectedBird, setSelectedBird] = useState({})

  const handleClick = (e) => {
    const selectedBird = {
      name: e.target.name,
      amount: e.target.value,
    }

    // setSelectedBird(selectBird)
    updateBirds(selectedBird)

  }

  const updateBirds = (selectedBird) => {
    console.log(selectedBird)
    // console.log(selectedBird)
  //   console.log(adoptedBirds)

    adoptedBirds.map((bird) => {
      if(bird.name === selectedBird.name){
        return alert('You have already added this bird to the cart')
      } else {
        return setAdoptedBirds([...adoptedBirds, selectedBird])
      }
    })
      
    setAdoptedBirds([...adoptedBirds, selectedBird])
  }

  return (
    <main>
      <aside>
        <Cart
          adoptedBirds={adoptedBirds}
          setAdoptedBirds={setAdoptedBirds}
        />
        <Checkout />
      </aside>
      <section className='Cards'>
        {
          birdData.map((bird) => {
            return (
                <Cards 
                  bird={bird}
                  key={bird.id}
                  handleClick={handleClick}
                  adoptedBirds={adoptedBirds}
                />
            )
          })
        }
      </section>
    </main>
  );
};

export default App;
