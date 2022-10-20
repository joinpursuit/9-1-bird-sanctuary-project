import "./Cards.css";

export default function Cards({ birdData, bonusItems, cart, updatedCart }) {
  const allBirds = birdData.map((birdy) => {
    return (
      <div key={birdy.id}>
        <h4>{birdy.name}</h4>
        <p>Price: ${birdy.amount}</p>
        <img src={birdy.img} alt={birdy.name}></img>
        <br></br>
        <button onClick={() => updatedCart(birdy)}>Adopt</button>
      </div>
    );
  });

  return <div className="birds">{allBirds}</div>;
}
