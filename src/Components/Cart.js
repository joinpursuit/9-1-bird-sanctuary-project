export default function Cart({ bonusItems, cartOption, discount, bird }) {
  //*Bonuses
  let total = cartOption.reduce((prevOption, currentOption) => {
    return prevOption + currentOption.amount;
  }, 0);

  let price = 0;
  cartOption.map((bird) => {
    if (cartOption.length > 2) {
      price += bird.amount * 0.9;
    } else {
      price += bird.amount;
    }
    console.log(price);
  });

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <span>
        Discount:{cartOption.length > 2 ? (discount = 10) : (discount = 0)}%
      </span>
      <br />
      <br />
      <h4>Total: ${price}</h4>
      <ol>
        {cartOption.map((bird) => {
          return (
            <li>
              {bird.name}: ${bird.amount.toFixed(2)}
              {/* <button>DELET ME</button> */}
            </li>
          );
        })}
      </ol>
      <span></span>
      <p>
        <b> Your donations have qualified you for the following items:</b>
      </p>
      {/* {bonuses} */}

      <ul>
        {total >= 100 ? <li>{bonusItems[0]}</li> : null}
        {total >= 300 ? <li>{bonusItems[(0, 1)]}</li> : null}
        {total >= 500 ? <li>{bonusItems[(0, 1, 2)]}</li> : null}
        {total >= 1000 ? <li>{bonusItems[(0, 1, 2, 3)]}</li> : null}
      </ul>
    </div>
  );
}
