import Cart from "./components/Cart"
import Cards from "./components/Cards"
import Checkout from "./components/Checkout"
import birdData from "./data/birds"
// import bonusItems  from "./data/bonusItems"
import { useState } from "react"

function App() {
  const [birds, setBirds] = useState(birdData)
  // const [carts, setCart] = useState([])
  // console.log(carts)
  // console.log(birds)

  function handleaddBirds(bird) {
    setBirds([bird, ...birds])
  }

  function removeBird(birdsId) {
    const birdToRemove = birds.filter((bird) => bird.id !== birds.id)
    setBirds(birdToRemove)
    if (birdToRemove === -1) {
      return
    } else {
      return [...birds.slice(0, birdToRemove), ...birds.slice(birdToRemove + 1)]
    }
  }

  const cartSum = birds.reduce((acc, { currVal = 0 }) => {
    return acc + currVal
  }, 0)

  return (
    <div>
      <h1>Bird Sanctuary!</h1>
      <div className="Carts">
        <Cart
          cartSum={cartSum}
          removeBird={removeBird}
          handleaddBirds={handleaddBirds}
        />
      </div>
      <div className="Checkouts">
        <Checkout removeBird={removeBird} />
      </div>
      <ul>
        {birds.map((bird) => {
          return (
            <div key={bird.id}>
              <Cards handleaddBirds={handleaddBirds} bird={bird} />
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default App
