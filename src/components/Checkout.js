function Checkout({handleSubmit, submitInput}) {
    return (
        <div className="Checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <h4>First Name</h4>
                <input 
                 type="text"
                 id="firstName"
                 value={submitInput.firstName}
                />
                <h4>Last Name</h4>
                <input 
                 type="text"
                 id="lastName"
                 value={submitInput.lastName}
                />
                <h4>Email</h4>
                <input 
                 type="text"
                 id="email"
                 value={submitInput.email}
                />
                <h4>Zip Code</h4>
                <input 
                 type="text"
                 id="zipCode"
                 value={submitInput.zipCode}
                />
                <input type="submit"/>
            </form>
        </div>
    )
}


export default Checkout