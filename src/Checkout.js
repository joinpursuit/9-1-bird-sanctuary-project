import react from 'react';
import { useState } from "react";



function Checkout({cart}) {

    // start with input 
    // Declare a state for an input which will hold the value 
    // setUserInput to alter it 
    // useState is storing the intial value which is a empty string

    const [userInput, setUserInput]= useState({
        firstName:"",
        lastName:"",
        email:"",
        zipCode:"",
        })

    // Create a function to have the userinput(string) convert it into an array of numbers so we are going to have to use the 
    
    function handleChange (e){
        setUserInput({
            ...userInput,
            [e.target.id]: e.target.value
        })
    }
    
      

    function handleSubmit (e){
        e.preventDefault()
       
        setUserInput({
        firstName:"",
        lastName:"",
        email:"",
        zipCode:"",
       })
       
       alert("You have adopted birds. Thank you!")
       
      }
    
    
      return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input 
                name="fName" 
                id="firstName"
                type="text" 
                value={userInput.firstName}
                onChange ={handleChange}/>
               
               
                <label>Last Name</label>
                <input 
                name="lName" 
                id="lastName"
                type="text" 
                value={userInput.lastName}
                onChange ={handleChange}/>
               
               
                <label>Email</label>
                <input 
                name="email" 
                type="text" 
                id='email'
                value={userInput.email}
                onChange ={handleChange}/>
               
               
                <label>Zip Code</label>
                <input 
                name="zipCode" 
                type="text" 
                id='zipCode'
                value={userInput.zipCode}
                onChange ={handleChange}/>
                
                <button>submit</button>
            </form>
        </div>
    );
}

export default Checkout;