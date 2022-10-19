const Cards = ({ birds }) => {
  const clickAdopt = () => {
    //CODE TO PUSH BIRD INTO ARRAY HERE
  };
  return birds.map((bird) => {
    return (
      <div className="birds" id={bird.id}>
        <h4>{bird.name}</h4>
        <p>Price: ${bird.amount}</p>
        <img src={bird.img} alt={bird.img}></img>
        <button onClick={clickAdopt}>Adopt</button>
      </div>
    );
  });
};
export default Cards;
