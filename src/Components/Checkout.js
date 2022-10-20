export default function Checkout ({ setAdoptedBirds, setTotal, user, setUser }){

    const handleTextChange = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('You have adopted birds. Thank you!')

        reset()
    }

    const reset  = () => {
        setUser({
            first: "",
            last: "",
            email: "",
            zip: ""
        })
        setAdoptedBirds([])
        setTotal(0)
      }

return (
    <form className="Checkout">
        <h1>Checkout</h1>
        <label htmlFor="first">First Name
        <br/>
        <input type="text" name="first" onChange={handleTextChange} required/>
        </label>

        <label htmlFor="last">Last Name
        <br/>
        <input type="text" name="last" onChange={handleTextChange} required/>
        </label>

        <label htmlFor="email">Email
        <br/>
        <input type="text" name="email" onChange={handleTextChange} required />        
        </label>

        <label htmlFor="zip">Zip Code
        <br/>
        <input type="text" name="zip" onChange={handleTextChange} required />        
        </label>

        <input type="submit" onClick={handleSubmit} id="submit"></input>
    </form>
)
}