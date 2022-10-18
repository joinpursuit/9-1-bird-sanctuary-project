export default function Card({birds, updateCart}) {
    return(
        <div className="card">
      <ul>
        {birds.map((bird)=> {
          return(
            <div className="birds">
              <li key={bird.id}>
                <h5>{bird.name}</h5>
                <h6>{bird.amount}</h6>
                <img src={bird.img} alt={bird.name}></img>
                <button className="birds button" onClick={() => updateCart(bird)}>Adopt</button>
              </li>
            </div>
          );
  })}
      </ul>
      </div>
    )
}