export default function Cart({ cart, discount, bonusItems }) {
  // console.log(cart.length)
  const total = cart.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  const checkoutInfo = cart.map((el) => {
    return (
      <li key={el.id}>
        {el.name}: ${el.amount}
      </li>
    );
  });
  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>Total: ${total}</h4>
      <span>Discount: {cart.length < 3 ? discount : (discount = 10)}%</span>
      <ol>{checkoutInfo}</ol>
      <span>Your donations have qualified you for the following item(s):</span>
      <ul>
        {total >= 100 ? <li>{bonusItems[0]}</li> : null}
        {total >= 300 ? <li>{bonusItems[(0, 1)]}</li> : null}
        {total >= 500 ? <li>{bonusItems[(0, 1, 2)]}</li> : null}
        {total >= 1000 ? <li>{bonusItems[(0, 1, 2, 3)]}</li> : null}
      </ul>
    </div>
  );
}