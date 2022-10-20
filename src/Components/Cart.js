import { useState } from "react";

const Cart = ({ cartBirds, bonuses, setCartBirds }) => {
  // ******* CART TOTAL ********
  let cartTotal = cartBirds.reduce((total, bird) => (total += bird.amount), 0);

  //******* DELETE *******
  //Remove Bird
  const removeBird = (birdId) => {
    const filteredBirds = cartBirds.filter((bird) => {
      return bird.id !== birdId;
    });
    setCartBirds([...filteredBirds]);
  };

  const liBirds = cartBirds.map((bird) => {
    return (
      <li>
        {bird.name} <button onClick={() => removeBird(bird.id)}>Delete</button>
      </li>
    );
  });

  //******* BONUSES *******/
  const cartBonuses = (cartTotal) => {
    console.log(typeof cartTotal);
    // return <li>hello</li>;
    if (cartTotal === 100) {
      return <li>{bonuses[0]}</li>;
    }

    // if (cartTotal > 99 && cartTotal < 299) {
    //   return <li>{bonuses[0]}</li>;
    // }
    // if (cartTotal > 299 && cartTotal < 499) {
    //   return <li>{bonuses[1]}</li>;
    // }
    // if (cartTotal > 499 && cartTotal < 1001) {
    //   return <li>{bonuses[2]}</li>;
    // }
    // if (cartTotal >= 1000) {
    //   return <li>{bonuses[3]}</li>;
    // }
  };

  console.log(cartBonuses);
  //********** RETURN *******/
  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>Total: ${cartTotal}</h4>
      <span>Discount: 0%</span>
      <ol>{liBirds}</ol>
      <p>Your donations have qualified you for the following</p>
      <ul>{cartBonuses()}</ul>
    </div>
  );
};
export default Cart;
