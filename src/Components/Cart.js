import "./Cart.css";

export default function Cart({ total, discount, bonusItem }) {
  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>Total: $ {total}</h4>
      <span>Discount: {discount}%</span>
      <ol></ol>
      <p>Your donations have qualified you for the following items:</p>
      <ul></ul>
    </div>
  );
}
