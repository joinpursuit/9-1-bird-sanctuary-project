import react from 'react';
import { useState } from "react";



function Checkout({setResult}) {

    // start with input 
    // Declare a state for an input which will hold the value 
    // setUserInput to alter it 
    // useState is storing the intial value which is a empty string
    const [userInput, setUserInput]= useState("")
    const [firstName, setFirstName]= useState("")
    const [lastName, setLastName]= useState("")
    const [email,setEmail]=useState("")
    const [zipCode, setZipCode]= useState("")

    // Create a function to have the userinput(string) convert it into an array of numbers so we are going to have to use the 
    
    
    
    function handleSubmit (e){
        const ol = document.createElement("ol");
        ol.textContent = e.target.todo.value
        ol.classList.add("list")
        ol.append();
        e.preventDefault()
      }
    
    
      return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={(event)=> {handleSubmit(event)}}>
                <label>First Name</label>
                <input 
                name="fName" 
                type="text" 
                value={firstName}
                onChange ={(e)=>{setFirstName(e.target.value)}}/>
                <label>Last Name</label>
                <input 
                name="lName" 
                type="text" 
                value={lastName}
                onChange ={(e)=>{setLastName(e.target.value)}}/>
                <label>Email</label>
                <input 
                name="email" 
                type="text" 
                value={email}
                onChange ={(e)=>{setEmail(e.target.value)}}/>
                <label>Zip Code</label>
                <input 
                name="zipCode" 
                type="text" 
                value={zipCode}
                onChange ={(e)=>{setZipCode(e.target.value)}}/>
                
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default Checkout;