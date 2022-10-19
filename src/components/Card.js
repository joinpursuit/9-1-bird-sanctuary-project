function Card ({bird, updateCart}) {
    return (
        <div className="card">
            <h2>{bird.name}</h2>
            <p>Price: ${bird.amount}</p>
            <img src={bird.img}/>
            <button onClick={() => updateCart(bird)}>Adopt</button>
        </div>
    )
}


export default Card;