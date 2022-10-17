import "./BirdCard.css";

export default function BirdCard({ bird }) {
  return (
    <li className="birdCard">
      <p>{bird.name}</p>
      <p>${bird.amount}</p>
      <img
        src={bird.img}
        height="100"
        style={{ display: "block", margin: "auto" }}
      ></img>
      <button>Adopt</button>
    </li>
  );
}
