export default function Checkout({ setBirdsCart, setDiscount }) {
  const formSubmit = (e) => {
    e.preventDefault();
    alert("You have adopted birds. Thank you!");
    setBirdsCart([]);
    setDiscount(0);
  };
  return (
    <div className="Checkout">
      <h2>Checkout</h2>
      <form onSubmit={formSubmit}>
        <label>
          First Name
          <br />
          <input type="text" name="fName"></input>
        </label>
        <label>
          Last Name
          <br />
          <input type="text" name="lName"></input>
        </label>
        <label>
          Email
          <br />
          <input type="email" name="email"></input>
        </label>
        <label>
          Zip Code
          <br />
          <input type="number" name="zipCode"></input>
        </label>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}
