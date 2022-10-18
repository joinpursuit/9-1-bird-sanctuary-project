export default function Cart({ cart, discount }) {
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
      <ol></ol>
      <span>Your donations have qualified you for the following items:</span>
      <ul></ul>
    </div>
  );
}
