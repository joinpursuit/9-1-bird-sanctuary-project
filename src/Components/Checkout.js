
import { useState } from "react";
// import { v1 as generateUniqueID } from "uuid";

export default function Checkout({setAdoptedBirds}) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [zipCode, setZipCode] = useState("")
  
    // const [birdAdopter, setBirdAdopters] = useState({
//       firstName: "",
//       lastName: "",
//       email: "",
//       zipCode: ""
//   })
  // const addBirdAdopter = (e) => {
  //     birdAdopter.firstName = firstName
  //     birdAdopter.lastName = lastName
  //     birdAdopter.email = email
  //     birdAdopter.zipCode = zipCode
  //     setBirdAdopters(addBirdAdopter)
  // }


   const handleChangeFirstName = (e) => {
      e.preventDefault()
    //console.log("first name input - target value = ", e)
    setFirstName(e.target.value)
    }

    const handleChangeLastName = (e) => {
      e.preventDefault()
    //console.log("Last name input - target value = ", e)
      setLastName(e.target.value)
    }

    const handleChangeEmail = (e) => {
      e.preventDefault()
    //console.log("email input - target value = ", e)
      setEmail(e.target.value)
    }

    const handleChangeZipCode = (e) => {
      e.preventDefault()
    //console.log("zipCode input - target value = ", e)
      setZipCode(e.target.value)
    }

    const handleSubmitForm = (e) => {
     e.preventDefault()
     setFirstName(e.target.value)
     setLastName(e.target.value)
     setEmail(e.target.value)
     setZipCode(e.target.value)
     alert( "Thank you for your donation!") 
     resetCheckoutForm()
     setAdoptedBirds([])
    }

    function resetCheckoutForm() {
      setFirstName("")
      setLastName("")
      setEmail("")
      setZipCode("")
      // setAdoptedBirds([])
    }

    
    return(
      <div className="checkOut">
        <h3>Checkout</h3>
        <form className="checkoutForm">
          <label htmlFor="firstName">First Name
              <input
                id="firstName"
                type="text"
                // value holds the state (current value) of firstName
                value={firstName}
                //onChange statement changes the state (to updated value) of firstName
                onChange={handleChangeFirstName}
              />
          </label>

          <label htmlFor="lastName">Last Name
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={handleChangeLastName}
            />
          </label>

          <label htmlFor="email">Email
            <input 
            id="email"
            type="text"
            value={email}
            onChange={handleChangeEmail}
            />
          </label>

          <label htmlFor="zipCode">Zip Code
            <input
              id="zipCode"
              type="text" 
              value={zipCode}
              onChange={handleChangeZipCode}
            />
          </label>

            <input
            type="submit"
            value="Submit"
            onClick={handleSubmitForm}
            />
            
        </form>
      </div>
    )
}



// function resetCheckoutForm() {
    // setBirdAdopter({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     zipCode: "",
    //     id: "",
    // });

    // const birdAdopter = [
    //   {
    //     firstName: "",
    //     lastName:"",
    //     email:"",
    //     zipCode:"",
    //   }
    // ]

    //  function addBirdAdopter() {
    //   const createBirdAdopter = {
    //   firstName: newBirdAdopter.firstName,
    //   lastName: newBirdAdopter.lastName,
    //   email: newBirdAdopter.email,
    //   zipCode: Number(newBirdAdopter.zipCode),
    // };



//   const [newBirdAdopter, setNewBirdAdopter] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     zipCode: "",
//     id: "",
//   });

//   function addBirdAdopter() {
//     const createBirdAdopter = {
//       firstName: newBirdAdopter.firstName,
//       lastName: newBirdAdopter.lastName,
//       email: newBirdAdopter.email,
//       zipCode: Number(newBirdAdopter.zipCode),
//       id: generateUniqueID(),
//     };


//   function handleTextChange(event) {
//     setNewBirdAdopter({
//       ...newBirdAdopter,
//       [event.target.id]: event.target.value,
//     });
//   }



// NOTES:

// The Checkout component has a class name of Checkout
// I can complete the inputs in the checkout form for first name, last name, email, and zip code
// When I complete the form with valid inputs and click Submit, an alert tells me: You have adopted birds. Thank you!
// When I close the alert box, the cart component fully resets (no birds, no discount, total = 0, no bonus items listed)