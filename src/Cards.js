import './Cards.css';

function Cards({ birdData, bonusItems, cart, updateCart }) {
  const mappedBirds = birdData.map((bird) => {
    return (
      <div key={bird.id} className="birds">
        <h4>{bird.name}</h4>
        <p>price: ${bird.amount} </p>
        <img src={bird.img} alt={bird.name} />
        <br />
        <button id="Adopt" onClick={() => updateCart(bird)}>
          Adopt
        </button>
      </div>
    );
  });
  return <div className="displayBird">{mappedBirds}</div>;
}

export default Cards;
