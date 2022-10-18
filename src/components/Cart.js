export default function Cart({ birdsCart, discount, bonusItems }) {
  // maybe make total a state variable
  let total = 0;

  const calcTotal = () => {
    total = birdsCart.reduce((acc, el) => acc + el.amount, 0);
    if (discount) {
      total *= (100 - discount) / 100;
    }
    return total;
  };

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>Total: ${birdsCart.length ? <>{calcTotal()}</> : <>{total}</>}</h4>
      <p>Discount: {discount}%</p>
      <ol>
        {birdsCart.length ? (
          birdsCart.map((e) => (
            <li key={e.id}>
              {e.name}: ${e.amount}
            </li>
          ))
        ) : (
          <></>
        )}
      </ol>
      <p>Your donations have qualified you for the following items:</p>
      <ul>
        {total > 99 ? <li>{bonusItems[0]}</li> : <></>}
        {total > 299 ? <li>{bonusItems[1]}</li> : <></>}
        {total > 499 ? <li>{bonusItems[2]}</li> : <></>}
        {total > 999 ? <li>{bonusItems[3]}</li> : <></>}
      </ul>
    </div>
  );
}
