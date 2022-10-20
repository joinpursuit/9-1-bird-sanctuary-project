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
      return (
        <li className="bonusItem" key={idx}>
          - {item}
        </li>
      );
    });

    return res;
  };

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>
        Discount:{" "}
        <span id="discount">{adoptedBirds.length >= 3 ? 10 : 0}%</span>
      </h4>
      <h4>
        Total:{" "}
        <span id="discountedPrice">
          {adoptedBirds.length >= 3 ? `$${total}` : null}{" "}
        </span>
        <span id="total">
          ${adoptedBirds.length >= 3 ? 0.9 * total : total}
        </span>
      </h4>
      <br></br>
      <ol>
        {adoptedBirds.map((bird) => (
          <li className="cartItem" key={bird.id}>
            {`${bird.name} ($${bird.amount})`}
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
      <p className="donationsPrompt">
        Your Donations have qualified you for the following items:
      </p>
      <br></br>
      <ul>{bonusAlg(total)}</ul>
    </div>
  );
}
