import Cart from "./components/Cart"
import Cards from "./components/Cards"
import Checkout from "./components/Checkout"
import birdData from "./data/birds"
import bonusItems from "./data/bonusItems"
import { useState } from "react"

function App() {
  const [birds, setBirds] = useState(birdData)
  const [birdsInCart, setBirdsInCart] = useState([])
  const [cartSum, setCartSum] = useState(0)

  function addToCart(birds) {
    const exist = birdsInCart.find((item) => item.id === birds.id)
    if (exist) {
      return alert("You have already added this bird to the cart")
    } else {
      setCartSum(cartSum + birds.amount)
      setBirdsInCart([...birdsInCart, birds])
    }
  }
  function removeBird(id) {
    const itemRemoved = birdsInCart.filter((bird) => bird.id !== id)
    setBirdsInCart(itemRemoved)
  }

  return (
    <div>
      <h1>Bird Sanctuary!</h1>
      <div className="Carts">
        <Cart
          cartSum={cartSum}
          cartItems={birdsInCart}
          removeBird={removeBird}
          bonusItems={bonusItems}
        />
      </div>
      <div className="Checkouts">
        <Checkout
          birds={birds}
          cartItems={birdsInCart}
          setBirdsInCart={setBirdsInCart}
          setCartSum={setCartSum}
        />
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
