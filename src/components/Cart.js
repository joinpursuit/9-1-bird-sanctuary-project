export default function Cart({ birdsCart, discount, setDiscount }) {
  const calcTotal = () => {
    let total = birdsCart.reduce((acc, el) => acc + el.amount, 0);
    if (discount) {
      total *= (100 - discount) / 100;
    }
    return total;
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <h4>Total: ${birdsCart.length ? <>{calcTotal()}</> : <>0</>}</h4>
      <p>
        Discount: {birdsCart.length > 2 ? setDiscount(10) : setDiscount(0)}
        {discount}%
      </p>
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
      <ul>Your donations have qualified you for the following items:</ul>
    </div>
  );
}
