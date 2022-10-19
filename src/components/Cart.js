export default function Cart ({ total, bonusItems, cart, removeBird}){
total = cart.reduce((a, bird) => a + bird.amount, 0)

 function bonus(){
    if(total > 1000){
        return(
            <ul className='ul'>
            <li>{bonusItems[0]}</li>
            <li>{bonusItems[1]}</li>
            <li>{bonusItems[2]}</li>
            <li>{bonusItems[3]}</li>
            </ul>
        )
    }if(total >= 500){
        return(
            <ul className='ul'>
            <li>{bonusItems[0]}</li>
            <li>{bonusItems[1]}</li>
            <li>{bonusItems[2]}</li>
            </ul>
        )
    }if(total >= 300){
        return(
            <ul className='ul'>
            <li>{bonusItems[0]}</li>
            <li>{bonusItems[1]}</li>
            </ul>
        )
    }if(total >= 100){
        return(
            <ul className='ul'>
            <li>{bonusItems[0]}</li>
            </ul>
        )
    }
 } 

 return(
    <div className='Cart'>
        <h2>Cart</h2>
        <p>Discount: {cart.length >= 3 ? 10 : 0}%</p>
        <h4>Total: ${total}</h4>
        <ol>
            {cart.map((bird, index) =>{
                    return (
                    <li key={index}>
                        {bird.name} ${bird.amount}
                    <button onClick={()=>{removeBird(index)}}>Remove Bird</button>
                    </li>
                    )
            })}
        </ol>
        <ul>
          Your Bonuses: {bonus()}
        </ul>
    </div>
 )
}
//Figure out how to Make it not click twice