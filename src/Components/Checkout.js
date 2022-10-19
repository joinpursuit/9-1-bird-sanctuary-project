import { useState } from "react"

export default function AdoptBird({setUserCart,setTotalCart,setDiscount}){
    const [userInfo,setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        zip: ""
      })
      
      const handleChange = (e) =>{
        setUserInfo({...userInfo,[e.target.id]:e.target.value})
        console.log(userInfo)
      }
      
     
      const handleSubmit = (e) => {
        e.preventDefault()
        alert("You have adopted birds. Thank you!")
        setUserInfo({
        firstName: "",
        lastName: "",
        email: "",
        zip: ""})
        setUserCart([])
        setTotalCart(0)
        setDiscount(0)
      }
    return(
        <div className="Checkout">
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

                
                <label htmlFor='zip'> Zip Code </label>
                    <input id='zip'
                    type='text'
                    placeholder='Zip Code' 
                    value={userInfo.zip}
                    onChange={handleChange}/>
                
                <input type="submit"Submit />
                
            </form>
        </div>
    )
}