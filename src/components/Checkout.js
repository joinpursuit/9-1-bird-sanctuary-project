import {useState} from 'react'
export default function Checkout (){
const [newbuy, setNewBuy] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zip: '',
})


 const submit = (e) => {
    e.preventDefault()
    alert('You have adopted birds. Thank you!')   
}

return(
    <div id='checkout'>
        <>
        <h1>Checkout</h1>
        <form onSubmit={submit}>
            <label for="First Name">
                <input 
                type="text"
                value={newbuy.lastName}
                placeholder="First Name"
                required
                />
            </label>
            <label for="Last Name">
                <input 
                type="text"
                value={newbuy.lastName}
                placeholder="Last Name"
                required
                />
            </label>
            <label for="EMAIL">
                <input 
                type="email"
                value={newbuy.email}
                placeholder="Email"
                required
                />
            </label>
            <label for="ZIP">
                <input 
               type="text"
               value={newbuy.zip}
               placeholder="Zip Code"
               required
                />
            </label>
            <input onSubmit={submit}type='submit' text='Submit'/>
        </form>
        </>
    </div>
)
}