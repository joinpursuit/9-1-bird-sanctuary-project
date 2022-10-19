import "./Cards.css";

export default function Cards({ bird, updateCart }) {
  return (
    <div className="birds">
      <h4>{bird.name}</h4>
      <p>Price: $ {bird.amount}</p>
      <img src={bird.img} alt={bird.img}></img>
      <button onClick={() => updateCart(bird)}>Adopt</button>
    </div>
  );
}
