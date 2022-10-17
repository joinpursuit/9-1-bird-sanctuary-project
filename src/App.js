import Cart from "./components/Cart"
import Cards from "./components/Cards"
import Checkout from "./components/Checkout"
import birdData from "./data/birds"
// import bonusItems  from "./data/bonusItems"
import { useState } from "react"

function App() {
  const [birds, setBirds] = useState(birdData)
  console.log(birds)
  return (
    <div>
      <h1>Bird Sanctuary!</h1>
      <Cart />
      <Checkout />
      <ul>
        {birds.map((bird) => {
          return (
            <Cards
              bird={bird}
              key={bird.id}
              bname={bird.name}
              bimg={bird.img}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default App
