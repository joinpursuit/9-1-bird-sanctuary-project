function Checkout() {
  //   event.preventDefault();
  return (
    <div className="Checkout">
      <h2>Checkout</h2>
      <form>
        <label for="first">First Name</label>
        <input type="text" id="first"></input>
        <label for="last">Last Name</label>
        <input type="text" id="last"></input>
        <label for="email">Email</label>
        <input type="text" id="email"></input>
        <label for="zipCode">Zip Code</label>
        <input type="text" id="zipCode"></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default Checkout;
