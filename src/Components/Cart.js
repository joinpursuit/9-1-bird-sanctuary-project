import bonusItems from '../data/bonusItems'


export default function Cart ({ adoptedBirds, total }) {

    return (
        <aside className="Cart">
            <h2>Cart</h2>
            {adoptedBirds.length < 3 && <h3>Discount: 0%</h3>}
            {adoptedBirds.length >= 3 && <h3>Discount: 10%</h3>}            
            <h4>Total: ${ total }
            </h4>
            <ol>
                {
                    adoptedBirds.map((bird, index) => {
                        return (
                            <li key={index}>
                                {bird.name}: ${bird.amount}
                            </li>
                            )
                        })
                }
            </ol>
            <p>Your donations have qualified you for the following items:</p>
            <ul>
                {total >= 100 && <li>{bonusItems[0]}</li>}
                {total >= 300 && <li>{bonusItems[1]}</li>}
                {total >= 500 && <li>{bonusItems[2]}</li>}
                {total >= 1000 && <li>{bonusItems[3]}</li>}
            </ul>
        </aside>
    )
}