import { useState } from "react"

export default function Checkout({resetCart}) {
const [form,setForm] = useState({firstName:'',lastName:'',email:'',zipCode:''})

function handleChange (e){
    setForm({...form, [e.target.id]: e.target.value})
  }
 
function submit(e) {
    e.preventDefault()
    alert('You have adopted birds. Thank you!')
    resetCart()
}

    return(
        <div className="Checkout">
            <h3>Checkout</h3>
            <form onSubmit={submit}>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" placeholder="First Name" value={form.firstName} onChange={handleChange}></input>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" placeholder="Last Name" value={form.lastName} onChange={handleChange}></input>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Email" value={form.email} onChange={handleChange}></input>
                <label htmlFor="zipCode">Zip Code</label>
                <input id="zipCode" type="number" placeholder="Zip Code" value={form.zipCode} onChange={handleChange}></input>
                <br></br>
                <input type="submit"></input>
            </form>
        </div>
    )
}