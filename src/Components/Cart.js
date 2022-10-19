import cart from "./cart.css"


const Cart = ({bonusItems, data, setData}) => {

const remove = (dataContent) => {
    const filter = data.filter((d) => d !== dataContent);
    console.log(filter)
    setData(filter)
}

let sum = 0 
    data.forEach((total) => {
     sum += Number(total.replace(/[^\d.-]/g, ''))
     
    })
    return(
        <section>
            <h2>Cart</h2>
            <h4>{data.length >= 3 ? `Total: $${sum * .9}`: `Total: $${sum}`}</h4>
            <p className="discount">{data.length >= 3 ? `Discount: 10%`: `Discount: 0%`}</p>
            <ol>
            {data.map((dt) => {
                return (
                 <li>{dt} <button onClick={() => remove(dt)}>Remove</button></li>
                )
            })}
            </ol>
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