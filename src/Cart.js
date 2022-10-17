export default function Carts({ cart, discount }) {
  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>
        Total: $
        {cart.reduce((acc, curr) => {
          return acc + curr.amount;
        }, 0)}
      </h4>
      <span>Discount: {discount}</span>
    </div>
  );
}
