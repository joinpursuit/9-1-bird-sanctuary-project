
import { useState } from "react";
// import { v1 as generateUniqueID } from "uuid";

export default function Checkout() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [zipCode, setZipCode] = useState("")
  
    

    const handleChangeFirstName = (e) => {
    //console.log("first name input - target value = ", e)
    setFirstName(e.target.id)
    }

    const handleChangeLastName = (e) => {
    //console.log("Last name input - target value = ", e)
      setLastName(e.target.id)
    }

    const handleChangeEmail = (e) => {
    //console.log("email input - target value = ", e)
      setEmail(e.target.id)
    }

    const handleChangeZipCode = (e) => {
    //console.log("zipCode input - target value = ", e)
      setZipCode(e.target.id)
    }

    const handleSubmitForm = (e) => {
     setFirstName("")
     setLastName("")
     setEmail("")
     setZipCode("")
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

//     handleAddBirdAdopter(createBirdAdopter);
//   }

//   function handleSelectChange(event) {
//     setSelectOption(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     addBirdAdopter();
//     resetBirdAdopterForm();
//   }

//   function handleTextChange(event) {
//     setNewBirdAdopter({
//       ...newBirdAdopter,
//       [event.target.id]: event.target.value,
//     });
//   }
//   function resetBirdAdopterForm() {
//     setNewBirdAdopter({
//         firstName: "",
//         lastName: "",
//         email: "",
//         zipCode: "",
//         id: "",
//     });
// 
//   }



//   );
// }











// // NOTES:

// // The Checkout component has a class name of Checkout
// // I can complete the inputs in the checkout form for first name, last name, email, and zip code
// // When I complete the form with valid inputs and click Submit, an alert tells me: You have adopted birds. Thank you!
// // When I close the alert box, the cart component fully resets (no birds, no discount, total = 0, no bonus items listed)