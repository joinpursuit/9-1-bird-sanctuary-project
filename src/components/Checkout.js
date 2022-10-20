function Checkout({handleSubmit, submitInput, handleTextChange}) {
    return (
        <div className="Checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <h4>First Name</h4>
                <input 
                 type="text"
                 id="firstName"
                 value={submitInput.firstName}
                 onChange={handleTextChange}
                />
                <h4>Last Name</h4>
                <input 
                 type="text"
                 id="lastName"
                 value={submitInput.lastName}
                 onChange={handleTextChange}
                />
                <h4>Email</h4>
                <input 
                 type="text"
                 id="email"
                 value={submitInput.email}
                 onChange={handleTextChange}
                />
                <h4>Zip Code</h4>
                <input 
                 type="text"
                 id="zipCode"
                 value={submitInput.zipCode}
                 onChange={handleTextChange}
                />
                <input type="submit"/>
            </form>
        </div>
    )
}


export default Checkout