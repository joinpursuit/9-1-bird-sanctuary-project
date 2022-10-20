import "./Cards.css";
export default function Cards({ birds, updateCart }) {
  return (
    <div className="birds">
      {birds.map((bird) => {
        return (
          <div key={bird.id}>
            <h4>{bird.name}</h4>
            <br />
            <p>Price: ${bird.amount}</p>
            <br />
            <img src={bird.img} alt={bird.name} />
            <br />
            <button onClick={() => updateCart(bird)}>ADOPT</button>
          </div>
        );
      })}
    </div>
  );
}
