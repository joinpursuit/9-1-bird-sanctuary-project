const Cards = ({ birds }) => {
  return birds.map((bird) => {
    return (
      <div className="birds" id={bird.id}>
        <h4>{bird.name}</h4>
        <p>Price: ${bird.amount}</p>
        <img src={bird.img} alt={bird.img}></img>
        <button>Adopt</button>
      </div>
    );
  });
  console.log(birds.img);
};
export default Cards;
