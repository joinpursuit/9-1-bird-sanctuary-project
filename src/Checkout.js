import React from "react";
import { useState } from "react";

export default function Checkout() {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [zipCode, setZipCode] = useState();

    const submitAlert = (e) => {
        e.preventDefault()
        alert("You have adopted birds. Thank you!")
        setFirstName('')
        setLastName('')
        setEmail('')
        setZipCode('')
    }

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