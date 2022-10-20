import React, { useState } from 'react';

const Checkout = () => {
    const [checkoutInfo, setCheckoutInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        zipCode: "",
    })

    const handleChange = (e) => {
      setCheckoutInfo({...checkoutInfo, [e.target.id]: e.target.value})
    }

    function handleCheckout(e) {
      alert('Purchase was successful!')
    }

    return (
        <div className="Checkout" style={{border: "dashed", borderColor: "green", padding: "20px", margin: "20px"}}>
        <form onSubmit={handleCheckout}>
          <div>
            <h3>Checkout</h3>
          </div>
          <div>
            <label htmlFor="firstName">First Name:
            <br></br>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={checkoutInfo.firstName}
              onChange = {handleChange}
            />
            </label>
          </div>

          <div>
            <label htmlFor='lastName'>Last Name:
            <br></br>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={checkoutInfo.lastName}
              onChange = {handleChange}
            />
            </label>
          </div>
          <div>
            <label htmlFor='email'>Email:
            <br></br>
            <input
              id="email"
              type="email"
              name="email"
              value={checkoutInfo.email}
              onChange = {handleChange}
            />
            </label>
          </div>
          <div>
            <label htmlFor='zipcode'>Zip Code:
            <br></br>
            <input
              id="zipCode"
              type="text"
              name="zipCode"
              value={checkoutInfo.zipCode}
              onChange = {handleChange}
            />
            </label>
          </div>
          <div>
            <input type="submit"></input>
          </div>
        </form>
      </div>
    );
};

export default Checkout;