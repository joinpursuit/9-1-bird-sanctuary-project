import React from "react";
import { useState } from "react";

export default function Checkout() {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [zipCode, setZipCode] = useState();

    // Using useState to later set the state as an empty string in order to make the form reset later.

    const submitAlert = (e) => {
        e.preventDefault() // Prevents page from refreshing upon submit.
        alert("You have adopted birds. Thank you!")
        setFirstName('') // Sets firstName's initial state to an empty string.
        setLastName('') // Sets lastName's initial state to an empty string.
        setEmail('') // Sets email's initial state to an empty string.
        setZipCode('') // Sets zipCode's initial state to an empty string.
    }

    // The above is the initial state that the form will revert to once the form is submitted successfully. 

    return (
        <div className="Checkout">
            <form>
                <h1>Checkout</h1>
                    <label htmlFor="firstName"> </label>
                    <p><strong>First Name:</strong></p>
                    <input id="firstName" name="firstName" type='text' value={firstName}/>

                    <label htmlFor="lastName"> </label>
                    <p><strong>Last Name:</strong></p>
                    <input id="lastName" name="lastName" type='text' value={lastName}/>

                    <label htmlFor="email"> </label>
                    <p><strong>Email:</strong></p>
                    <input id="email" name="email" type='text' value={email} />

                    <label htmlFor="zipCode"> </label>
                    <p><strong>Zip Code:</strong></p>
                    <input id="zipCode" name="zipCode" type='text' value={zipCode}/>
            </form>
                <button id="submitButton" type="submit" onClick={submitAlert}> Submit </button> 
        </div>
    )

    
}