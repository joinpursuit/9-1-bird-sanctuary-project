import Card from "./Card";
export default function Cards({
  name,
  // amount,
  // img,
  // id,
  // cartOption,
  // setCartOption,
  handleBirdOption,
  birdData,
}) {
  return (
    <div className="card">
      {birdData.map((bird) => {
        return (
          <div key={bird.id} className="birds">
            <h5>{bird.name}</h5>
            <img src={bird.img} alt={bird.name} />
            <p>Price: $ {bird.amount}</p>
            <button value={bird.id} onClick={() => handleBirdOption(bird)}>
              Adopt
            </button>
          </div>
        );
      })}
    </div>
  );
}
