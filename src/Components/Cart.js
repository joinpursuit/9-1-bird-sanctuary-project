export default function getCart({userCart, totalCart,discount,bonusItems}){

function addBonus (bonus,total) {
    if(total>=100 && total<=299){
        return (
            <li>{bonus[0]}</li>
        )
    }else if(total>=300 && total<=499){
        return (
            <div>
            <li>{bonus[0]}</li>
            <li>{bonus[1]}</li>
            
            </div>
        )
    }else if(total>=500 && total<=999){
        return (
            <div>
            <li>{bonus[0]}</li>
            <li>{bonus[1]}</li>
            <li>{bonus[2]}</li>
            
            </div>
        )
    }else if(total>1000){
        return (
            <div>
            <li>{bonus[0]}</li>
            <li>{bonus[1]}</li>
            <li>{bonus[2]}</li>
            <li>{bonus[3]}</li>
            </div>
        )
    }

    
}

    return(
     <div className="Cart">
        <h2>Cart</h2>
        <h4>Total: ${Number(totalCart)}</h4>
       <ol>
        {
            userCart.map((bird) => 
            {
             return (
             <li key={bird.id}>
                    {bird.name}: ${bird.amount}
              </li>)
            }
            )
        }
        </ol>
        
        <p>Discount: {discount}%</p>
        <p>Your donations have qualified you for the following items:</p>
        <ul>
            {addBonus(bonusItems,totalCart)}
        </ul>
         </div>
    )
}