export default function Cart({selectBirds, cartTotal, percent, bonusItems }) {
    function cartItems(items, total) {
        let cart = +total
        if (cart < 100){
            return null;
        } else if ( cart >= 100 && cart < 300){
            return (
                <>
                    <li>{items[0]}</li>
                </>
            )
        } else if (cart >= 300 && cart < 500){
            return (
                <>
                    <li>{items[0]}</li>
                    <li>{items[1]}</li>
                </>
            )
        } else if (cart >= 500 && cart < 1000){
            return (
                <>
                    <li>{items[0]}</li>
                    <li>{items[1]}</li>
                    <li>{items[2]}</li>
                </>
            )
        } else {
            return (
                <>
                    <li>{items[0]}</li>
                    <li>{items[1]}</li>
                    <li>{items[2]}</li>
                    <li>{items[3]}</li>
                </>
            )
        }
    }


    // const removeBird = (bird) => {
    //     setSelectBirds(selectBirds.filter(()))
    //   }

    return (
        <div 
            style={{
                border:'1px solid purple',
                padding: '10px',
                margin: '40px 0 30px 30px'
            }}  
            className="Cart"
        >
            <h2>Cart</h2>
            <h4>Total: ${cartTotal}</h4>
            <span>Discount: {percent}%</span>
            <ol>
                {selectBirds.map((bird) => {
                    return (
                        <li key={bird.id}>
                            {bird.name}: ${bird.amount}
                        </li>
                    )
                })}
            </ol>
            <p>Your donations have qualified you for the following items:</p>
            <ul>{cartItems(bonusItems, cartTotal)}</ul>
        </div>
    )
}