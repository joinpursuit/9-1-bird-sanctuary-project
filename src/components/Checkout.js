import React from "react";
import { useState } from "react";

export default function Checkout({birds, setBirds}) {


    const submitAlert = (e) => {
        e.preventDefault()
        setBirds([])
        SVGAnimateTransformElement({})
        alert("You have adopted birds. Thank you!")
       
    }
    

    return (
        <div className="Checkout">
            <form onSubmit={submitAlert}>
                <h1>Checkout</h1>
                    <label htmlFor="firstName"> </label>
                    <p><strong>First Name:</strong></p>
                    <input id="firstName" name="firstName" type='text' />

                    <label htmlFor="lastName"> </label>
                    <p><strong>Last Name:</strong></p>
                    <input id="lastName" name="lastName" type='text' />

                    <label htmlFor="email"> </label>
                    <p><strong>Email:</strong></p>
                    <input id="email" name="email" type='text' />

                    <label htmlFor="zipCode"> </label>
                    <p><strong>Zip Code:</strong></p>
                    <input id="zipCode" name="zipCode" type='text' />
                    <input type ="submit" valu="Submit" /> 
            </form>
               
        </div>
    )


}