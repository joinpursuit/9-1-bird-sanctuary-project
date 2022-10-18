import "./BirdCard.css";

export default function BirdCard({ bird, adoptBird, adoptedBirds }) {
  return (
    <li className="birdCard">
      <p className="birdName">{bird.name}</p>
      <p>${bird.amount}</p>
      <div className="birdImageContainer">
        <img className="birdImg" src={bird.img} alt="bird"></img>
      </div>
      <div className="adoptButtonContainer">
        <button
          onClick={() => {
            adoptBird(bird);
            console.log("clicked");
          }}
          className="adoptButton"
        >
          Adopt
        </button>
      </div>
    </li>
  );
}
