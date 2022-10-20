import bonusItems from "../data/bonusItems";

const Cart = ({birdsInCart, total, discount}) => {
    const bonusDiscountItems = [];

    if (total >= 100 && total < 299) {
        bonusDiscountItems.push(bonusItems[0]);
    } else if (total >= 300 && total < 499) {
        bonusDiscountItems.push(bonusItems[0])
        bonusDiscountItems.push(bonusItems[1])
    } else if (total >= 500 && (total < 1000)) {
        bonusDiscountItems.push(bonusItems[0])
        bonusDiscountItems.push(bonusItems[1])
        bonusDiscountItems.push(bonusItems[2])
    } else if (total >= 1000) {
        bonusDiscountItems.push(bonusItems[0])
        bonusDiscountItems.push(bonusItems[1])
        bonusDiscountItems.push(bonusItems[2])
        bonusDiscountItems.push(bonusItems[3])
    }
    const discountItems = bonusDiscountItems.map((element, i) => <li key={i}>{element}</li>)
        
    const birdCart = birdsInCart.map((element) => 
        <li key={element.id}>{element.name}</li>)
        
    return (
    <div className="Cart" style={{padding: "30px", border: "solid", borderColor: "green", margin: "20px"}}>

        <h2>Cart 🛒</h2>
        <p>Total: ${total}</p>
        <p>Discount: {discount}%</p>
        <div>
            <ol>{birdCart}</ol>
        </div>
        <p>Your donations have qualified you for the following items:</p>
        <div>
            <ul>{discountItems}</ul>
        </div>
    </div>
)}


export default Cart;