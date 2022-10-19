import "./Cart.css";

export default function Cart({ adoptedBirds, removeBird, bonus }) {
  let total = adoptedBirds.reduce((acc, bird) => {
    return acc + bird.amount;
  }, 0);

  const totalWithRemovedBird = (bird) => {
    total -= bird.amount;
  };

  const bonusAlg = (total) => {
    let array = [];

    for (let i = 1; i <= 3; i++) {
      if (Math.floor(i * 1.67) <= Math.floor(0.01 * total)) {
        array = bonus.slice(0, i);
      }
      if (total >= 1000) {
        array = bonus.slice(0, 4);
      }
    }

    const res = array.map((item, idx) => {
      return <li key={idx}>{item}</li>;
    });

    return res;
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <h4>
        Discount: <span>{adoptedBirds.length >= 3 ? 10 : 0}%</span>
      </h4>
      <h4>
        Total: <span>${adoptedBirds.length >= 3 ? 0.9 * total : total}</span>
      </h4>
      <ol>
        {adoptedBirds.map((bird) => (
          <li className="cartItem" key={bird.id}>
            {bird.name}
            <button
              id="removeBirdButton"
              onClick={() => {
                totalWithRemovedBird(bird);
                removeBird(bird);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
      <p>Your Donations have qualified you for the following items:</p>
      <ul>{bonusAlg(total)}</ul>
    </div>
  );
}
