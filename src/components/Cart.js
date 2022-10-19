

function Cart({cart, removeBird}) {
    
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
            {cart.map((prop) => {      
                    return (
                    <><ol>{prop.name}: ${prop.amount}</ol><button onClick={() => removeBird(prop)}>Remove</button></>
                    )
                })}
            </ol>
                
            <p>Discount: {discount}%</p>
            <p>Your donations have qualified you for the following items:</p>
        </div>
    )
}


export default Cart