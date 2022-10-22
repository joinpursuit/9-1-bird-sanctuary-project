import React from "react";
import bonusItems from "../data/bonusItems";
function Cart ({ birds, setBirds}) {


const updateBirdsArray = (bird) => {
  birds.splice(birds.indexOf(bird), 1);

  setBirds([...birds]);
};

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>Total: ${birds.reduce((a, b) => {
  return b.amount + a}, 0)}</h4>
      {/*birds is a interable collection from the state state(=birds) value 4 birds */}
      <p>Discount: {birds.length >= 3 ? "10%" : "0%"}</p>
      <ol>
        {birds.map((bird) => {
          return (
            <li key={bird.id}>
              {bird.name}: ${bird.amount}
              <button
                onClick={() => {
                  updateBirdsArray(bird);
                }}
                > 
              </button>
            </li>
          );
        })}
      </ol>
      <p>Your donations have qualified you for the following items:</p>
      {/* <ul>
        {total >= 100 && <li>{bonusItems[0]}</li>}
        {total >= 300 && <li>{bonusItems[1]}</li>}
        {total >= 500 && <li>{bonusItems[2]}</li>}
        {total >= 1000 && <li>{bonusItems[3]}</li>}
      </ul> */}
    </div>
  );
};

export default Cart;