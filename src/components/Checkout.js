import { useState } from "react";

export default function Checkout({clearCheckout}){
    const [account, setAccount] = useState({
        firstName: '',
        lastName: '',
        email: '',
        zipcode: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`You have adopted birds. Thank you!`)
        clearCheckout()
        setAccount({
            firstName: '',
            lastName: '',
            email: '',
            zipcode: ''
        });
    }

    const handleChange = (e) => {
        setAccount({ ...account, [e.target.id]: e.target.value})
    }

    return (
        <div 
            style={{
                border: '1px solid black',
                padding: '10',
                width: '400px',
                textAlign: 'center',
                margin: '30px 0 0 30px'
            }}
            className="Checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    value={account.firstName}
                    onChange={handleChange}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    value={account.lastName}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={account.email}
                    onChange={handleChange}
                />
                <label htmlFor="zipcode">Zip Code</label>
                <input
                    type="text"
                    id="zipcode"
                    value={account.zipcode}
                    onChange={handleChange}
                />
                <br></br>
                <input 
                    type="submit"
                    value="submit"/>
            </form>
        </div>
    )
}



