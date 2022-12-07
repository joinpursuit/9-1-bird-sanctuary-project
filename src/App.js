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
      // reminder- great way to add while dropping in cart but cant reverse it to subtract from total NAN will appear
      // have to you use filter and reduce to get out obj and subtract the difference. check Later to see if you
      //  can use both at the same time
      setCartSum(cartSum + birds.amount)

      setBirdsInCart([...birdsInCart, birds])
    }
  }
  // reminder- (id) in param or whatever param used in the handleclick must be first
  function removeBird(id) {
    const itemRemoved = birdsInCart.filter((bird) => bird.id !== id)
    setBirdsInCart(itemRemoved)
  }

  return (
    <div className=" sanctuary">
      <div>
        <h1 className="header">Bird Sanctuary!</h1>
      </div>
      <div className="Cart">
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
      <ul className="Cards">
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
