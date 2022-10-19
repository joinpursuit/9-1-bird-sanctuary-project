import {useState} from 'react'
export default function Checkout({setCart}){
const [newbuy, setNewBuy] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zip: '',
})

 const enter = (e) => {
    setNewBuy({...newbuy, [e.target.id]: e.target.value})
 }

 const submit = (e) => {
    e.preventDefault()
    alert('You have adopted birds. Thank you!')
    setCart([])
}



return(
    <div>
        <h4>Checkout</h4>
        <form className="Checkout" onSubmit={submit}>
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
    </div>
)
}