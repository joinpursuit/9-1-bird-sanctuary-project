import "./Cart.css";

export default function Cart({ bonusItems, cart, discount, setCart }) {
  const total = cart.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  function removeBirdy(birdID) {
    const filteredBirdArray = cart.filter((bird) => bird.id !== birdID);
    setCart(filteredBirdArray);
    console.log(setCart);
  }

  const birdsList = cart.map((el) => {
    return (
      <li key={el.id}>
        <span>
          {el.name}: ${el.amount}{" "}
        </span>
        <button type="submit" onClick={() => removeBirdy(el.id)}>
          Delete
        </button>
      </li>
    );
  });

  return (
    <>
      <h2>Cart</h2>
      <h4>Total:${cart.length < 3 ? total : total * 0.9}</h4>
      <span>Discount: {cart.length < 3 ? discount : (discount = 10)}%</span>
      <ol>{birdsList}</ol>
      <p>Your donations have qualified you for the following items: </p>
      <ul>
        {total >= 100 ? <li>{bonusItems[0]}</li> : null}
        {total >= 300 ? <li>{bonusItems[(0, 1)]}</li> : null}
        {total >= 500 ? <li>{bonusItems[(0, 1, 2)]}</li> : null}
        {total >= 1000 ? <li>{bonusItems[(0, 1, 2, 3)]}</li> : null}
      </ul>
    </>
  );
}
