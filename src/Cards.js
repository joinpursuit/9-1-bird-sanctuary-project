export default function Cards({ birds }) {
  return (
    <div className="birds">
      {birds.map((bird) => {
        return (
          <div key={bird.id}>
            <h5>{bird.name}</h5>
            <br />
            <span>Price: ${bird.amount}</span>
            <br />
            <img src={bird.img} alt={bird.name} />
            <button className="button">ADOPT</button>
          </div>
        );
      })}
    </div>
  );
}
