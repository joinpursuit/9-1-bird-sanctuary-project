import bonusItems from "../data/bonusItems";

export default function Cart({cart,removeBird}) {
    const total = cart.reduce((acc,bird)=> acc + bird.amount, 0)
    
    return(
        <>
      <h2>Cart</h2>
          <h3>Discount: {cart.length >= 3 ? 10 : 0}%</h3>
          <h4>Total: ${cart.length >= 3 ? total * .9 : total}</h4>
      <ol>
        {cart.map((birds) =>{
            return(
                <div>
                        <li key={birds.id}>
                        <h6>{birds.name} ${birds.amount}</h6>
                        <button className="button" onClick={() => removeBird(birds.id)}>Delete bird</button>
                        </li>
                </div>
            )
        })}
      </ol>
        <p>Your donation has qualified you for the following bonus</p>
        <ul>
        {total >= 100 && <li className="bonus">{bonusItems[0]}</li>}
        {total >= 300 && <li className="bonus">{bonusItems[1]}</li>}
        {total >= 500 && <li className="bonus">{bonusItems[2]}</li>}
        {total >= 1000 && <li className="bonus">{bonusItems[3]}</li>}
        </ul>
        </>
    )
}