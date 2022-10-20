
// const Cart = ({birdName, birdPrice, totalAdoptionCost}) => {

// let discount
// let total
// const discountDisplay = discount * 100

// // condition to calculate discount
// // if (numberOfAdoptions< 3){
// //     discount = 0
// // }
// // else {
// //     discount = 10
// // }
// // const handlechangeAdoption = (e)=>{
// // if (numberOfAdoptions > 0){
// //     show Adoptions
// // }}

// return(
//       <>
//       <h2>Discount: {discountDisplay}%</h2> <br />
//       <h2>Total: {totalAdoptionCost}</h2> <br />



//         <section>
//         /* hidden until first adoption */ 
//             <ul>
//                 <li id={birdData.id}>{birdPrice}</li>
//                 <li id={birdData.id}>{birdPrice}</li>
//                 <li id={birdData.id}>{birdPrice}</li>
//                 <li id={birdData.id}>{birdPrice}</li>
//             </ul> 
//         </section>

//         <section>
//             <p>Your donations have qualified you for the following items:</p>
//             <ul>
//                 <li id={id}>{bonus1}</li>
//                 <li id={id}>{bonus2}</li>
//                 <li id={id}>{bonus3}</li>
//                 <li id={id}>{bonus4}</li>
//             </ul> 
//         </section> 
//         </>
//   )
  
//   }
  
  
//   export default Cart;







// // NOTES:

// // The cart has a class name of Cart
// // When I click on a bird card's adopt button from Cards.js, its name appears in the Cart.js <ol> as a list item.
// // The total shows up as an <h4> element inside the cart
// // When I click on an additional item, the total cost is updated and additional bird name(s) is added as a list item to the unordered list
// // When I click on the same bird more than once, nothing happens after the first time
// // When there are less than 3 birds in the cart there is a 0% discount
// // When there are 3 or more birds in the cart there is a 10% discount which is listed in the Cart
// // When there is a 10% discount, it is reflected in the price
// // When my total is of the appropriate amount, I will receive bonuses that will be listed in the Cart

// // Checkout.js
// // The Checkout component has a class name of Checkout
// // I can complete the inputs in the checkout form for first name, last name, email, and zip code
// // When I complete the form with valid inputs and click Submit, an alert tells me: You have adopted birds. Thank you!
// // When I close the alert box, the cart component fully resets (no birds, no discount, total = 0, no bonus items listed)