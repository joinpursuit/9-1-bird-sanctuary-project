import Cart from "./components/Cart"
import Cards from "./components/Cards"
import Checkout from "./components/Checkout"
import birdData from "./data/birds"
// import bonusItems  from "./data/bonusItems"
import { useState } from "react"

function App() {
  const [birds, setBirds] = useState(birdData)
  const [birdsInCart, setBirdsInCart] = useState([])
  const [cartSum, setCartSum] = useState(0)

  function addToCart(bird) {
    setCartSum(cartSum + bird.amount)

    setBirdsInCart((previous) => {
      return [...previous, bird]
    })
  }

  function removeBird(id) {
    birdsInCart.filter((birdsItem) => birdsItem.id !== id)
    setBirdsInCart(birdsInCart)
  }

  return (
    <div>
      <h1>Bird Sanctuary!</h1>
      <div className="Carts">
        <Cart
          cartSum={cartSum}
          cartItems={birdsInCart}
          removeBird={removeBird}
        />
      </div>
      <div className="Checkouts">
        <Checkout birds={birds} cartItems={birdsInCart} />
      </div>
      <ul>
        {birds.map((bird) => {
          return (
            <div key={bird.id}>
              <Cards bird={bird} handleaddBirds={addToCart} />
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default App
