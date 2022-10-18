import Cart from "./components/Cart"
import Cards from "./components/Cards"
import Checkout from "./components/Checkout"
import birdData from "./data/birds"
// import bonusItems  from "./data/bonusItems"
import { useState } from "react"

function App() {
  const [birds, setBirds] = useState(birdData)

  function addAdopted() {
    const adopted = {
      name: "",
      amount: 0,
      id: "",
    }
    setBirds([adopted, ...birds])
  }

  const getSum = (birds) => {
    const sum = birds.reduce((acc, curr) => {
      return (acc += curr.amount)
    }, 0)
    return sum
  }

  return (
    <div>
      <h1>Bird Sanctuary!</h1>

      <div className="Carts">
        <Cart getSum={getSum} />
      </div>

      <div className="Checkouts">
        <Checkout />
      </div>
      <ul>
        {birds.map((bird) => {
          return <Cards bird={bird} />
        })}
      </ul>
    </div>
  )
}

export default App
