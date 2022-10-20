import bonusItems from '../data/bonusItems'


export default function Cart ({ adoptedBirds, total, removeBird }) {

    return (
        <aside className="Cart">
            <h1>Cart</h1>
            {
                adoptedBirds.length < 3
                && <h3>Discount: 0%</h3>
                && <h4>Total: ${total}</h4>
            }

            {
                adoptedBirds.length >= 3
                && <h3>Discount: 10%</h3>
                && <h4>Total: ${total*0.9}</h4>
            }
            <ol>
                {
                    adoptedBirds.map((bird) => {
                        return (
                            <div className='list'>
                                <li key={bird.id}>
                                    {bird.name}: ${bird.amount}
                                <button onClick={() => removeBird(bird)}>Remove</button>
                                </li>
                            </div>
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