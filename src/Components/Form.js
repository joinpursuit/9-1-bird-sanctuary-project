import { useState } from "react"

export default function AdoptBird(){
    const [userInfo,setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        zip: ""
      })
      
      const handleChange = (e) =>{
        setUserInfo({...userInfo,[e.target.id]:e.target.value})
      }
      
     
      const handleSubmit = (e) => {
        e.preventDefault()
        alert("You have adopted birds. Thank you!")
        setUserInfo({
        firstName: "",
        lastName: "",
        email: "",
        zip: ""})
      }
    return(
        <div className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor='firstName'> First Name </label>
                    <input id='firstName'
                    type='text'
                    placeholder='First Name' 
                    value={userInfo.firstName}
                    onChange={handleChange}/>

                <label htmlFor='lastName'> Last Name </label>
                    <input id='lastName'
                    type='text'
                    placeholder='Last Name' 
                    value={userInfo.lastName}
                    onChange={handleChange}/>

                <label htmlFor='email'> Email </label>
                    <input id='email'
                    type='text'
                    placeholder='Email' 
                    value={userInfo.email}
                    onChange={handleChange}/>    

                
                <label htmlFor='zip'> Zip </label>
                    <input id='Zip'
                    type='text'
                    placeholder='Zip' 
                    value={userInfo.zip}
                    onChange={handleChange}/>
                

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}