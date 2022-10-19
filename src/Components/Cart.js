import "./Cart.css";

export default function Cart({ adoptedBirds, removeBird }) {
  let total = adoptedBirds.reduce((acc, bird) => {
    return acc + bird.amount;
  }, 0);

  const totalWithRemovedBird = (bird) => {
    total -= bird.amount;
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
          <li
            onClick={() => {
              totalWithRemovedBird(bird);
              removeBird(bird);
            }}
            key={bird.id}
          >
            {bird.name}
          </li>
        ))}
      </ol>
      <p>Your Donations have qualified you for the following items:</p>
      <ol>
        <li>First discount</li>
      </ol>
    </div>
  );
}
