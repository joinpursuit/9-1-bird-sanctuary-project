import React from 'react';
import { useState } from 'react';

function Checkout(props) {
    //  Declare State for user Inputs
    const [userInput, setUserInput] = useState(
        {
            first: "",
            last: "",
            email: "",
            zip: null

        }
    )
    
    // Function for handling UserInput -> onChange match name prop to key in userInput, so updates that key in object
    function handleUserInput(e) {
        const value = e.target.value
        setUserInput({...userInput, [e.target.name] : value})
    }

    // function for form reset (needs access to cart data/ states to reset values on submit as well)
    function resetCheckoutForm() {
        setUserInput(
            {
                first: "",
                last: "",
                email: "",
                zip: ""
    
            }
        )
    }

    // handleSubmit function for form
    function handleSubmit(e) {
        e.preventDefault()
        alert(`You have adopted birds. Thank you!`)
        resetCheckoutForm()
    }

    return (
        <div className='Checkout'>
            <h6>Checkout</h6>

            <form onSubmit={(event) => {handleSubmit(event)}}>

                <label htmlFor='firstName'>First Name</label>
                <input
                type = "text"
                id = "firstName"
                value= {userInput.first}
                name= "first"
                onChange = {(event) => {handleUserInput(event)}}
                />

                <label htmlFor='lastName'>Last Name</label>
                <input
                type = "text"
                id = "lastName"
                value= {userInput.last}
                name= "last"
                onChange = {(event) => {handleUserInput(event)}}
                />

                <label htmlFor='email'>Email</label>
                <input
                type = "email"
                id = "email"
                value= {userInput.email}
                name= "email"
                onChange = {(event) => {handleUserInput(event)}}
                />

                <label htmlFor='zipcode'>Zipcode</label>
                <input
                type = "number"
                id = "zip"
                value= {userInput.zip}
                name= "zip"
                onChange = {(event) => {handleUserInput(event)}}
                />

                <button type= 'submit'>SUBMIT</button>
                
            </form>
            
        </div>
    );
}

export default Checkout;