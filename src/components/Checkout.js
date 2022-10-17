
export default function Checkout ({setCart}){
    const submit = (event) =>{
        event.preventDefault()
        alert('You have adopted birds. Thank you!')
        document.getElementById('checkOut').reset();
        setCart([]);
        document.getElementById('discount').setAttribute('class', 'hidden')
    }
return(
    <div id='checkout'>
        {/* Might need to be in form*/}
        <>
        <h1>Checkout</h1>
        <form onSubmit={submit}>
            <label for="First Name">
                <input 
                /*should have: 
                Value
                on change maybe? 
                id
                type
                plae holder*/
                />
            </label>
            <label for="Last Name">
                <input 
                /*should have: 
                Value
                on change maybe? 
                id
                type
                plae holder*/
                />
            </label>
            <label for="EMAIL">
                <input 
                /*should have: 
                Value
                on change maybe? 
                id
                type
                plae holder*/
                />
            </label>
            <label for="ZIP">
                <input 
                /*should have: 
                Value
                on change maybe? 
                id
                type
                plae holder*/
                />
            </label>
            <input type='submit' text='Submit'/>
        </form>
        </>
    </div>
)
}