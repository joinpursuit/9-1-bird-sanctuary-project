import { useState } from "react"

export default function Cart({cart, bonusItem}) {
    const [discount, setDiscount] = useState(0)

    function totalCost() {
        let total = 0
        for (let i = 0; i < cart.length; i++) {
           total += cart[i].amount
        }
        return total
      }

      function addDiscount() {
        // console.log(cart.length)

        if (cart.length > 3) {
            console.log('hi')
        //    return setDiscount(10)
        }
        // else{
        //     setDiscountAmount((0))
        // }
      }

      function addBonus() {
        // console.log(totalCost())
        if (cart.length === 0) {
            return null;
        }
        // console.log(cart)
        // if (cart[0].amount >= 100 && cart[0].amount < 299 ) {
        //     return(
        //     <>
        //     <li>{bonusItem[0]}</li>
        //     </>)
        // }
         if (cart.length === 2 && totalCost() >= 300 && totalCost() < 499 ) {
            return(
            <>
            <li>{bonusItem[0]}</li>
            <li>{bonusItem[1]}</li>
            </>)
        }
        // if (cart[0].amount >= 100 && cart[0].amount < 299 ) {
        //     return(
        //     <>
        //     <li>{bonusItem[0]}</li>
        //     </>)
        // }
        // if (cart[0].amount >= 100 && cart[0].amount < 299 ) {
        //     return(
        //     <>
        //     <li>{bonusItem[0]}</li>
        //     </>)
        // }
      }

    return(
        <div className="Cart">
      <h2>Cart</h2>
          <h3>Discount: {addDiscount()} %</h3>
          <h4>Total: ${totalCost()}</h4>
      <ol>
        {cart.map((birds) =>{
            return(
                <div>
                        <li key={birds.id}>
                        <h6>{birds.name} ${birds.amount}</h6>
                        </li>
                </div>
            )
        })}
      </ol>
        <p>Your donation has qualified you for the following bonus</p>
        <ul>
        {
        // cart.map((bird) => {
            // console.log(bird)
           addBonus()
        // })
    }
        </ul>

    </div>
    )
}