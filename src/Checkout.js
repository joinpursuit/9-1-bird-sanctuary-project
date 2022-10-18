export default function Checkout() {
  return (
    <div className="Checkout">
      <form>
        <label htmlFor="fName">First Name: </label>
        <input type="text" id="fName" />

        <label htmlFor="lName">Last Name: </label>
        <input type="text" id="lName" />

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" />

        <label htmlFor="zip">Zipcode: </label>
        <input type="number" id="zip" />

        <button>SUBMIT</button>
      </form>
    </div>
  );
}
