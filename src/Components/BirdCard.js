import "./BirdCard.css";

export default function BirdCard({ bird, adoptBird }) {
  return (
    <li className="birdCard">
      <p className="birdName">
        <strong>{bird.name}</strong>
      </p>
      <p className="cost">${bird.amount}</p>
      <div className="birdImageContainer">
        <img className="birdImg" src={bird.img} alt="bird"></img>
      </div>
      <div className="adoptButtonContainer">
        <button
          onClick={() => {
            adoptBird(bird);
          }}
          className="adoptButton"
        >
          Adopt
        </button>
      </div>
    </li>
  );
}
