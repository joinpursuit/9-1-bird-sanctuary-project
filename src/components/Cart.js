function Cart({cart, removeBird, bonusItems}) {
    
   function cartSum(cartItems) {
    let cartTotal = 0
   
    for(const item of cartItems) {
        cartTotal += item.amount
    }
    if (cart.length >= 3) {
        cartTotal -= (cartTotal * 0.1)
    }
    return cartTotal
   }
   let discount = 0
    if (cart.length >= 3) {
        discount = 10
    }
    return (
        <div className="Cart">
            <h2>Cart</h2>
            <h4>Total: ${cartSum(cart)}</h4>
            <ol>
            {cart.map((bird) => {      
                    return (
                    <li key={bird.id}>{bird.name}: ${bird.amount} <button onClick={() => removeBird(bird)}>Remove</button></li>
                    )
                })}
            </ol>
                
            <p>Discount: {discount}%</p>
            <p>Your donations have qualified you for the following items:</p>
            <ul>
                {cartSum(cart) >= 100 ? <li>{bonusItems[0]}</li> : null}  
                {cartSum(cart) >= 300 ? <li>{bonusItems[1]}</li> : null}
                {cartSum(cart) >= 500 ? <li>{bonusItems[2]}</li> : null}
                {cartSum(cart) >= 1000 ? <li>{bonusItems[3]}</li> : null}
            </ul>
        </div>
    )
}


export default Cart