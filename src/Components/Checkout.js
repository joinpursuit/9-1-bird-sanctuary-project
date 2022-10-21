import React from 'react';

function Checkout() {

    const submitForm = (e) => {
        e.preventDefault()
        alert('You have adopted birds. Thank you!')
        document.querySelector(`form`).reset()
    }
    return (
        <aside className='"Checkout"'>
           
      <form onSubmit={submitForm}>
        <label htmlFor="fName">First Name: </label>
        <input type="text" id="fName" />

        <label htmlFor="lName">Last Name: </label>
        <input type="text" id="lName" />

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" />

        <label htmlFor="zip">Zipcode: </label>
        <input type="number" id="zip" />

        <button>Submit</button>
      </form>
        </aside>
    );
}

export default Checkout;