import {useState} from 'react'
export default function Checkout (){
const [newbuy, setNewBuy] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zip: '',

})

 const enter = (e) => {
    setNewBuy({...newbuy, [e.target.id]: e.target.value})
 }

//WITHOUT THIS IT HAS CORRECT FUNCTION BUT DOESNT ACTUALLY INPUT ANYTHING


 const submit = (e) => {
    e.preventDefault()
    if(!newbuy){
        alert("Please complete form")
    }else{
        alert('You have adopted birds. Thank you!')
        e.target.value.reset()
    }
}
//Form now resets when finished.
//FIX HTMLFOR and CALL SetNewBuy 

return(
    <div id='Checkout'>
        <>
        <h4>Checkout</h4>
        <form id="form" onSubmit={submit}>
            <label htmlFor="firstName">
                First Name
                <br/>
                <input 
                id='firstName'
                type="text"
                value={newbuy.firstName}
                placeholder="First Name"
                onChange={enter}
                required
                />
            </label>
            <label htmlFor="lastName">
                Last Name
                <br/>
                <input 
                id='lastName'
                type="text"
                value={newbuy.lastName}
                placeholder="Last Name"
                onChange={enter}
                required
                />
            </label>
            <label htmlFor="email">
                Email
                <br/>
                <input 
                id='email'
                type="email"
                value={newbuy.email}
                placeholder="Email"
                onChange={enter}
                required
                />
            </label>
            <label htmlFor="zip">
                Zip Code 
                <br/>
                <input 
               id='zip'
               type="text"
               value={newbuy.zip}
               placeholder="Zip Code"
               onChange={enter}
               required
                />
            </label>
            <input type='submit' text='Submit'/>
        </form>
        </>
    </div>
)
}