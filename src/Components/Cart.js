import "./Cart.css";

export default function Cart({
  total,
  discount,
  setDiscount,
  bonusItem,
  cartBirds,
}) {
  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>
        Total: ${" "}
        {
          (total = cartBirds.reduce((accu, bird) => {
            if (cartBirds.length >= 3) {
              discount = 10;
              return total * 0.9;
            }
            return accu + bird.amount;
          }, 0))
        }
      </h4>
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
