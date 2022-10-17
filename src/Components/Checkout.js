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

    // function for gathering all for inputs and updating UserInput
   // Function for handling UserInput -> onChange match .name prop to key in userInput, so updates that key in object
    function handleUserInput(e) {
        const value = e.target.value
        setUserInput({...userInput, [e.target.name] : value})
       
    }

    return (
        <div className='Checkout'>
            <h6>Checkout</h6>

            <form>

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
                name= "zipcode"
                onChange = {(event) => {handleUserInput(event)}}
                />
                
            </form>
            
        </div>
    );
}

export default Checkout;