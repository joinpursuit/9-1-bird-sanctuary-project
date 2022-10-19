import "./Cart.css";

export default function Cart({ bonusItems, cartBirds, setCartBirds }) {
  function deleteBird(id) {
    const newCart = cartBirds.filter((bird) => bird.id !== id);
    setCartBirds(newCart);
    console.log(newCart);
  }

  const total = cartBirds.reduce((acc, curr) => {
    return (acc += curr.amount);
  }, 0);

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>Total: ${cartBirds.length > 2 ? total * 0.9 : total}</h4>
      <span>Discount: {cartBirds.length > 2 ? 10 : 0}%</span>
      <ol>
        {cartBirds.map((bird) => {
          return (
            <li key={bird.id}>
              {bird.name} : ${bird.amount}{" "}
              <button onClick={() => deleteBird(bird.id)}>Delete</button>
            </li>
          );
        })}
      </ol>
      <p>Your donations have qualified you for the following items:</p>
      <ul>
        Bonus:
        {total >= 100 && <li>{bonusItems[0]}</li>}
        {total >= 300 && <li>{bonusItems[1]}</li>}
        {total >= 500 && <li>{bonusItems[2]}</li>}
        {total >= 1000 && <li>{bonusItems[3]}</li>}
      </ul>
    </div>
  );
}
