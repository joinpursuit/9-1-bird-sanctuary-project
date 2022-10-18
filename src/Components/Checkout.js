export default function Checkout (){

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('You have adopted birds. Thank you!')

        document.querySelector(`form`).reset()
    }

return (
    <form onSubmit={handleSubmit}>
        <h1>Checkout</h1>
        <label htmlFor="first">First Name</label>
        <input type="text" required/>
        <label htmlFor="last">Last Name</label>
        <input type="text" required/>
        <label htmlFor="email">Email</label>
        <input type="text" required />
        <label htmlFor="zip">Zip Code</label>
        <input type="text" required />
        <button type="submit">Submit</button>
    </form>
)
}