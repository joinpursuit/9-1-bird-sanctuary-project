import Cards from './Cards'

export default function Cart (){
 /*
 The cart has a class name of Cart
When I click on a bird card's adopt button from Cards.js, its name appears in the Cart.js <ol> as a list item.
The total shows up as an <h4> element inside the cart
When I click on an additional item, the total cost is updated and additional bird name(s) is added as a list item to the unordered list
When I click on the same bird more than once, nothing happens after the first time
When there are less than 3 birds in the cart there is a 0% discount
When there are 3 or more birds in the cart there is a 10% discount which is listed in the Cart
When there is a 10% discount, it is reflected in the price
When my total is of the appropriate amount, I will receive bonuses that will be listed in the Cart
 The bonuses come from src/data/bonusItems.js and should be imported into App.js and passed to the proper children.

The bonus items are added as list items in an <ul> list item as follows:
1 bonus (first array item) is given if the total is at least 100 and no more than 299
2 bonuses (first and second array items) are given if the total is at least 300 and no more than 499
3 bonuses are given if the total is at least 500 and no more than 1000
4 bonuses are given if the total is 1000 or more
 */

 return(
    <div className='Cart'>
        <h2>Cart</h2>
        <h3>Discount: %</h3>
        <h4>Total:</h4>
        <ol>
        </ol>
    </div>
 )
}