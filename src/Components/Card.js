export default function Card({ name, img, amount }) {
  return (
    <div className="card">
      <h6>{name}</h6>
      <img src={img} alt={name} />
      <p>Price:{amount}</p>
      <img src={img} alt={name} />
      <button onClick={() => {}}>Adopt</button>
    </div>
  );
}
