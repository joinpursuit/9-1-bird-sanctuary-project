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
    setCartSum(cartSum + bird.amount)

    setbirdsCart((previous) => {
      return [...previous, bird]
    })
  }

  const removeBird = (birdID) => {
    const cartBird = birds.filter((bird) => bird.id === birdID)
    setbirdsCart(cartBird)
  }

  return (
    <div>
      <h1>Bird Sanctuary!</h1>
      <div className="Carts">
        <Cart cartSum={cartSum} birdCart={birdCart} removeBird={removeBird} />
      </div>
      <div className="Checkouts">
        <Checkout birds={birds} birdCart />
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
