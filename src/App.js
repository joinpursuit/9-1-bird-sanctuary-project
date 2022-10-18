import Cart from "./components/Cart"
import Cards from "./components/Cards"
import Checkout from "./components/Checkout"
import birdData from "./data/birds"
// import bonusItems  from "./data/bonusItems"
import { useState } from "react"

function App() {
  const [birds, setBirds] = useState(birdData)
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
  })

  // console.log(birds)
  function handleTextChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value })
    console.log(setUser)
  }

  function handleSubmit(event) {
    event.preventDefault()
    resetForm()
    alert("You have adopted birds. Thank You!")
  }
  function resetForm() {
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      zipCode: "",
    })
  }

  return (
    <div>
      <h1>Bird Sanctuary!</h1>
      <Cart />
      <div className="Checkouts">
        <Checkout
          handleTextChange={handleTextChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <ul>
        {birds.map((bird) => {
          return <Cards bird={bird} key={bird.id} />
        })}
      </ul>
    </div>
  )
}

export default App
