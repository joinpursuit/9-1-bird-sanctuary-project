import { useState } from 'react';
import './Checkout.css';
function Checkout({ setCart }) {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [zipCode, setZipCode] = useState('');

  function doSubmit(event) {
    event.preventDefault();
    if (first && last && email && zipCode) {
      alert('You have adopted birds. Thank you!');
    }
    setCart([]);
    setFirst('');
    setLast('');
    setEmail('');
    setZipCode('');
  }

  return (
    <div className="CheckoutComp">
      <h2>Checkout</h2>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input
          onChange={(a) => setFirst(a.target.value)}
          type="text"
          placeholder="First Name"
          value={first}
        ></input>
        <label htmlFor="lastName">Last Name</label>
        <input
          onChange={(e) => setLast(e.target.value)}
          type="text"
          placeholder="Last Name"
          value={last}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          onChange={(i) => setEmail(i.target.value)}
          type="text"
          placeholder="Email"
          value={email}
        ></input>
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="number"
          placeholder="Zip Code"
          value={zipCode}
          onChange={(o) => setZipCode(o.target.value)}
        ></input>
        <button id="buttonForm" onClick={doSubmit} type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Checkout;
