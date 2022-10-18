export default function Checkout({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  zip,
  setZip,
  clickSubmit,
}) {
  return (
    <div className="Checkout">
      <form>
        <label htmlFor="fName">First Name: </label>
        <input
          type="text"
          id="fName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lName">Last Name: </label>
        <input
          type="text"
          id="lNiame"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="zip">Zipcode: </label>
        <input
          type="number"
          id="zip"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />

        <button onClick={clickSubmit}>SUBMIT</button>
      </form>
    </div>
  );
}
