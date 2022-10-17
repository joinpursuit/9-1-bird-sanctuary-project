export default function Checkout() {
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="checkout">
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
