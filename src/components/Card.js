import Adopt from "./Adopt";

export default function Card({ bird }) {
  return (
    <div className="card">
      <h3>{bird.name}</h3>
      <p>Price: ${bird.amount}</p>
      <img src={bird.img} height="140" width="140"></img>
      <br />
      <Adopt />
    </div>
  );
}
