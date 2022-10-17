import Cards from './Cards';

function Cart({
  bonusItems,
  total,
  discount,
  handleClick,
  cart,
  //   birdData,
  //   mappedBirds,
}) {
  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>
        Total: $
        {cart.reduce((acc, curr) => {
          return acc + curr.amount;
        }, 0)}
      </h4>
      <span>Discount: {discount}%</span>
      <ol>
        {/* {cart.forEach(element => {
            return {
                cartName = element.name,
                cartAmount =element.amount}
            
        })} */}
      </ol>
      <span>Your donations have qualifed you for the following items:</span>
      <ul>
        {bonusItems.map((e) => {
          if (total === '') {
          } else if (total === '') {
          } else if (total === '') {
          } else {
          }
        })}
      </ul>
    </div>
  );
}
export default Cart;
