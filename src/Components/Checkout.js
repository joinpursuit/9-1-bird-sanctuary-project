import {useState} from "react"

const Checkout = ({setData}) => {

    const [form , setForm] = useState({
        firtName: "",
        lastName: "",
        email: "",
        zip: ""
    })

   
    
    const formText = (event) => {
        setForm({...form, [event.target.id]: event.target.value})
    }
    
    let sum = 0

    const reset = () => {
        setForm({
            firtName: "",
            lastName: "",
            email: "",
            zip: "" 
        })
        document.querySelector("h4").textContent = `Total: $${sum} `
        document.querySelector(".discount").textContent = `Discount: ${sum}%`
        setData([])
        const item = document.querySelectorAll(".items")
        item.forEach((i) => {
           i.classList.add("hidden")
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("You have adopted birds. Thank you!")
        reset()
    }
    
    return(
        <section>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firtName">First Name <input 
                id="firtName"
                value={form.firtName}
                onChange={formText}
                type="text"
                placeholder="First Name">
                </input></label>
                <label htmlFor="lastName">Last Name <input 
                id="lastName"
                value={form.lastName}
                onChange={formText}
                type="text"
                placeholder="Last Name">
                </input></label>
                <label htmlFor="email">Email <input 
                id="email"
                value={form.email}
                onChange={formText}
                type="email"
                placeholder="Email">
                </input></label>
                <label htmlFor="zip">Zip Code <input 
                id="zip"
                value={form.zip}
                onChange={formText}
                type="text"
                placeholder="Zip Code">
                </input></label>
                <button>submit</button>
            </form>
        </section>
    )
}

export default Checkout