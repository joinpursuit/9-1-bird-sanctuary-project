function Cards({ bird, handleaddBirds }) {
  return (
    <li key={bird.id}>
      <div className="birds">
        <span>
          <h4>{bird.name}</h4>

          <p>Price:${bird.amount}</p>

          <img src={bird.img} alt={bird.name} />
        </span>

        <div key={bird.id}>
          {<button onClick={handleaddBirds}>ADOPT</button>}
        </div>
      </div>
    </li>
  )
}

export default Cards
