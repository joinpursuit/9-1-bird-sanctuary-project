// import { update } from 'cypress/types/lodash';

function Cards({ birdData, bonusItems, cart, updateCart }) {
  //   for (let i = 0; i < birdData.length; i++) {
  //     const image = birdData[i].img;
  //     const name = birdData[i].name;
  //     const amount = birdData[i].amount;
  //     const id = birdData[i].id;
  //     console.log(name, amount, image, id);
  //   }

  const mappedBirds = birdData.map((bird) => {
    return (
      <div key={bird.id} className="birds">
        <h4>{bird.name}</h4>
        <p>price: ${bird.amount} </p>
        <img src={bird.img} alt={bird.name} />
        <button onClick={() => updateCart(bird)}>Adopt</button>
      </div>
    );
  });
  return <div>{mappedBirds}</div>;
}

export default Cards;
