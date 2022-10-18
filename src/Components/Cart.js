import cart from "./cart.css"


const Cart = ({bonusItems}) => {
//     const [bonuses, setBonuses] = useState([])
//     bonusItems.forEach((b) => {
//         bonuses.push(b) 
//      })
// console.log(bonuses)
    return(
        <section>
            <h2>Cart</h2>
            <h4>Total: $0</h4>
            <p className="discount">Discount: 0%</p>
            <ol></ol>
            <p>Your donations have qualitfied you for the following items:</p>
            <ul>
                {bonusItems.map((item) => {
                    return(
                        <li key={item}className="items hidden">{item}</li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Cart 