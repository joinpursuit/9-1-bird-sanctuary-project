export default function Checkout ({ setAdoptedBirds, setTotal }){

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('You have adopted birds. Thank you!')

        reset()
    }

    const reset  = () => {
        document.querySelector(`form`).reset()
    
        setAdoptedBirds([])
        setTotal(0)
      }

return (
    <form className="Checkout">
        <h1>Checkout</h1>
        <label htmlFor="first">First Name
        <input type="text" name="first" required/>
        </label>

        <label htmlFor="last">Last Name
        <input type="text" name="last" required/>
        </label>

        <label htmlFor="email">Email
        <input type="text" name="email" required />        
        </label>

        <label htmlFor="zip">Zip Code
        <input type="text" name="zip" required />        
        </label>

        <input type="submit" onClick={handleSubmit}></input>
    </form>
)
}