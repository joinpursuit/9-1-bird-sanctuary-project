import "./BirdCard.css";

export default function BirdCard({ bird }) {
  return (
    <li className="birdCard">
      <p>{bird.name}</p>
      <p>${bird.amount}</p>
      <img src={bird.img} alt="bird"></img>
      <button>Adopt</button>
    </li>
  );
}
