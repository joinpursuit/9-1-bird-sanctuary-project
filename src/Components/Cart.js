export default function getCart({userCart}){
    return(
     <div className="cart">
        <h2>Cart</h2>
        <h4>Total: $:num</h4>
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
        <p>Discount: 0%</p>
        <p>Your donations have qualified you for the following items:</p>
         </div>
    )
}