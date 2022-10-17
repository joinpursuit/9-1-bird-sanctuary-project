export default function BirdCard({ bird }) {
  return (
    <li className="birdCard" key={bird.id}>
      <p>{bird.name}</p>
      <p>${bird.amount}</p>
      <img src={bird.img} width={100}></img>
    </li>
  );
}
