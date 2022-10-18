import "./BirdCard.css";

export default function BirdCard({ bird }) {
  return (
    <li className="birdCard">
      <p className="birdName">{bird.name}</p>
      <p>${bird.amount}</p>
      <div className="birdImageContainer">
        <img className="birdImg" src={bird.img} alt="bird"></img>
      </div>
      <div className="adoptButtonContainer">
        <button className="adoptButton">Adopt</button>
      </div>
    </li>
  );
}
