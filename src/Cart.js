import './Cart.css';

function Cart({ bonusItems, discount, cart, setCart }) {
  // console.log(cart.length);

  const cartTotal = cart.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  function removeBird(id) {
    let filterCart = cart.filter((bird) => {
      return bird.id !== id;
    });
    setCart(filterCart);
  }
  const checkoutBirds = cart.map((element) => {
    return (
      <li key={element.id}>
        {element.name}: ${element.amount}
        <button
          key={element.id}
          className="deleteItem"
          onClick={() => removeBird(element.id)}
          id="delete"
          type="submit"
        >
          Delete
        </button>
      </li>
    );
  });
  return (
    <div className="CartComp">
      <h2>Cart</h2>
      <h4>Total: ${cartTotal}</h4>
      <span>Discount: {cart.length < 3 ? discount : (discount = 10)}%</span>
      <ol>{checkoutBirds}</ol>
      <span>Your donations have qualifed you for the following items:</span>
      <ul>
        {cartTotal >= 100 ? <li>{bonusItems[0]}</li> : null}
        {cartTotal >= 300 ? <li>{bonusItems[(0, 1)]}</li> : null}
        {cartTotal >= 500 ? <li>{bonusItems[(0, 1, 2)]}</li> : null}
        {cartTotal >= 1000 ? <li>{bonusItems[(0, 1, 2, 3)]}</li> : null}
      </ul>
    </div>
  );
}
export default Cart;
