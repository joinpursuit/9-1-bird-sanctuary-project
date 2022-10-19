import "./Checkout.css";

export default function Checkout({ clearCart, user }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    alert("You have adopted birds. Thank you!");
  };

  return (
    <form
      className="Checkout"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <h2>Checkout</h2>
      <label htmlFor="firsName">
        First Name: <input type="text" id="firstName" onChange={null} />
      </label>
      <label htmlFor="lastName">
        Last Name: <input type="text" id="lastName" />
      </label>
      <label htmlFor="email">
        Email: <input type="email" id="email" />
      </label>
      <label htmlFor="zipcode">
        Zip Code: <input type="number" id="zipcode" />
      </label>
      <input type="submit"></input>
    </form>
  );
}
