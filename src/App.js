import Cart from "./components/Cart"
import Cards from "./components/Cards"
import Checkout from "./components/Checkout"
import birdData from "./data/birds"
// import bonusItems  from "./data/bonusItems"
import { useState } from "react"

function App() {
  const [birds, setBirds] = useState(birdData)
  const [birdCart, setbirdsCart] = useState([])
  const [cartSum, setCartSum] = useState(0)

  function addbirdstoCart(bird) {
    setCartSum(bird.amount + cartSum)

    setbirdsCart((previous) => {
      return [...previous, bird]
    })
  }

  // function removeBird(birdsId) {
  //   const birdToRemove = birds.filter((bird) => bird.id !== birds.id)
  //   setBirds(birdToRemove)
  //   if (birdToRemove === -1) {
  //     return
  //   } else {
  //     return [...birds.slice(0, birdToRemove), ...birds.slice(birdToRemove + 1)]
  //   }
  // }

  return (
    <div>
      <h1>Bird Sanctuary!</h1>
      <div className="Carts">
        <Cart cartSum={cartSum} birdCart={birdCart} />
      </div>
      <div className="Checkouts">
        <Checkout />
      </div>
      <ul>
        {birds.map((bird) => {
          return (
            <div key={bird.id}>
              <Cards bird={bird} addbirdstoCart={addbirdstoCart} />
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default App
