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
  const cartBonuses = () => {
    if (cartTotal > 99 && cartTotal < 299) {
      return <li>{bonuses[0]}</li>;
    }
    if (cartTotal > 299 && cartTotal < 499) {
      return (
        <>
          <li>{bonuses[0]}</li> <li>{bonuses[1]}</li>
        </>
      );
    }
    if (cartTotal > 499 && cartTotal < 1001) {
      return (
        <>
          <li>{bonuses[0]}</li>
          <li>{bonuses[1]}</li>
          <li>{bonuses[3]}</li>
        </>
      );
    }
    if (cartTotal >= 1000) {
      return (
        <>
          <li>{bonuses[0]}</li>
          <li>{bonuses[1]}</li>
          <li>{bonuses[3]}</li>
          <li>{bonuses[4]}</li>
        </>
      );
    }
  };

  console.log(cartBirds.length);
  console.log(cartTotal);

  //******* DISCOUNT *******/

  //********** RETURN *******/
  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>Total: ${cartBirds.length >= 3 ? cartTotal * 0.9 : cartTotal}</h4>
      <span>Discount: {cartBirds.length < 3 ? "0%" : "10%"} </span>
      <ol>{liBirds}</ol>
      <p>Your donations have qualified you for the following</p>
      <ul>{cartBonuses()}</ul>
    </div>
  );
};
export default Cart;
