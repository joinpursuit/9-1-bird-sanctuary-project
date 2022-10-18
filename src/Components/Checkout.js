import React, { useState } from 'react';

const Checkout = () => {
    const [checkoutInfo, setCheckoutInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        zipCode: "",
    })
    return (
        <div className="form-container">
        <form>
          <div>
            <h3>Checkout</h3>
          </div>

          <div>
            <label htmlFor="firstName">First Name:
            <br></br>
            <input
              type="text"
              name="firstName"
              value={checkoutInfo.firstName}
            />
            </label>
          </div>

          <div>
            <label htmlFor='lastName'>Last Name:
            <br></br>
            <input
              type="text"
              name="lastName"
              value={checkoutInfo.lastName}
            />
            </label>
          </div>

          <div>
            <label htmlFor='email'>Email:
            <br></br>
            <input
              type="email"
              name="email"
              value={checkoutInfo.email}
            />
            </label>
          </div>

          <div>
            <label htmlFor='zipcode'>Zip Code:
            <br></br>
            <input
              type="number"
              name="zipcode"
              value={checkoutInfo.zipCode}
            />
            </label>
          </div>

          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
};

export default Checkout;