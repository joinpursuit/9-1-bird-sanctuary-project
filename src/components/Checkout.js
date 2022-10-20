import React, { useState } from 'react'

function Checkout() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email:"",
    zipCode:""
  })
  const handleChange = (e) => {
    setUser({...user, [e.target.id]: e.target.id })
  }

  return (
    <div className='Checkout'>
      <h1>Checkout</h1>
			<form>
        <label htmlFor='firstName'>First Name:</label>
        <input id='firstName' type='text' value={user.firstName} onChange={handleChange}/>
      </form>
      <form>
        <label htmlFor='lastName'>Last Name:</label>
        <input id='lastName' type='text' value={user.lastName} onChange={handleChange}/>
      </form>
      <form>
        <label htmlFor='email'>Email:</label>
        <input id='email' type='email' value={user.email} onChange={handleChange}/>
      </form>
      <form>
        <label htmlFor='zipCode'>Zip Code:</label>
        <input id='zipCode' type='text' value={user.zipCode} onChange={handleChange}/>
      </form>
      <input value="Submit" type={'submit'} onClick={() => {
        alert("You have adopted birds. Thank you!")
        window.location.reload()
        }} />
    </div>
  )
}

export default Checkout