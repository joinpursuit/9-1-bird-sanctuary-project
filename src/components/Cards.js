import React, { useState } from "react"

function Cards({ bird }) {
  //   const [adopt, setAdopt] = useState(false)

  return (
    <li key={bird.id}>
      <div className="birds">
        <span>
          <p>
            <h4>{bird.name}</h4>
          </p>
          <p>Price:$ {bird.amount}</p>
          <p>
            <img src={bird.img} alt={bird.name} />
          </p>
        </span>
        <button onClick={(e) => handleSelectChange(e)}>ADOPT</button>
      </div>
    </li>
  )
}

export default Cards
