import birdData from './data/birds'
import Cards from './Components/Cards'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import { useState } from 'react'
import './App.css'

function App () {

  const [adoptedBirds, setAdoptedBirds] = useState([])
  const [total, setTotal] = useState(0)

  const handleClick = (bird) => {
    if (adoptedBirds.includes(bird)){
      return alert('You have already added this bird to the cart')
    } else {
      setAdoptedBirds([...adoptedBirds, bird])
      setTotal(total + Number(bird.amount))
    }
  }

  return (
    <main>
      <aside>
        <Cart
          adoptedBirds={adoptedBirds}
          total={total}
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
