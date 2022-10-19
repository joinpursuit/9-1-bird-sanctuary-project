import "./Cart.css";

export default function Cart({ total, discount, bonusItem, cartBirds }) {
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
      <ul></ul>
    </div>
  );
}
