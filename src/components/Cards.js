function Cards({ bird }) {
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
        <button>ADOPT</button>
      </div>
    </li>
  )
}

export default Cards
