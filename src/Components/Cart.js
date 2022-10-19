import "./Cart.css";

export default function Cart({ total, discount, bonusItems, cartBirds }) {
  let bonuses;
  if (total >= 1000) {
    bonuses = (
      <>
        {" "}
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
        <li>{bonusItems[2]}</li>
        <li>{bonusItems[3]}</li>
      </>
    );
  } else if (total >= 500) {
    bonuses = (
      <>
        {" "}
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
        <li>{bonusItems[2]}</li>
      </>
    );
  } else if (total >= 300) {
    bonuses = (
      <>
        {" "}
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
      </>
    );
  } else if (total >= 100) {
    bonuses = <li>{bonusItems[0]}</li>;
  }

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>Total: ${total}</h4>
      <span>Discount: {discount}%</span>
      <ol>
        {cartBirds.map((bird) => {
          return (
            <li key={bird.id}>
              {bird.name} : ${bird.amount}
            </li>
          );
        })}
      </ol>
      <p>Your donations have qualified you for the following items:</p>
      <ul>
        Bonus:
        {bonuses}
      </ul>
    </div>
  );
}
