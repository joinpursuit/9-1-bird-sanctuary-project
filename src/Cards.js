import './Cards.css';

function Cards({ birdData, bonusItems, cart, updateCart }) {
  const mappedBirds = birdData.map((bird) => {
    return (
      <div className="allBirds">
        <div key={bird.id} className="birds">
          <h4>{bird.name}</h4>
          <p>price: ${bird.amount} </p>
          <img src={bird.img} alt={bird.name} />
          <button onClick={() => updateCart(bird)}>Adopt</button>
        </div>{' '}
      </div>
    );
  });
  return <div>{mappedBirds}</div>;
}

export default Cards;
