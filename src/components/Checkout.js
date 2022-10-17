export default function Checkout() {
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={formSubmit}>
        <label>
          First Name
          <input type="text" name="fName"></input>
        </label>
        <label>
          Last Name
          <input type="text" name="lName"></input>
        </label>
        <label>
          Email
          <input type="email" name="email"></input>
        </label>
        <label>
          Zip Code
          <input type="number" name="zipCode"></input>
        </label>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}
