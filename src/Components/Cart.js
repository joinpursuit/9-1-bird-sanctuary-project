import { useState } from "react"

export default function Cart ({ adoptedBirds, selectedBird, setAdoptedBirds }) {
    const [total, setTotal] = useState(0)

    return (
        <aside className="Cart">
            <h2>Cart</h2>
            <h3>Discount: </h3>
            <h4>Total: ${
                // adoptedBirds.reduce((acc, curr) => {
                //     return acc.amount += curr.amount
                // }, 0)
                }
            </h4>
            <ol>{
                adoptedBirds.map((bird, index) => {
                    console.log(selectedBird)
                    // if(bird.name === selectedBird.name){
                    //     return alert('You have already added this bird to the cart')
                    // } else {
                    //     setAdoptedBirds([...adoptedBirds, selectedBird])
                        return (
                            <li key={index} onChange={() => setAdoptedBirds([...adoptedBirds])}>
                                {bird.name}: ${bird.amount}
                            </li>
                        )
                    // }
                })
            }
            </ol>
        </aside>
    )
}