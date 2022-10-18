// import { useState } from "react";
// import birdData from "../data/birds";

export default function Cart({
  setCartOption,
  cartOption,
  amount,
  discount,
  name,
  bird,
}) {
  // const [birdOption, setBirdOption] = useState({ birdData });
  // console.log(birdOption);
  // let total = 0;
  // setCartOption(amount + 1);

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <span>Discount:{discount}%</span>
      <br />
      <br />
      <h4>
        Total:{" "}
        {/* {cartOption.map((bird) => {
          return total + bird.amount;
        })} */}
        $
        {cartOption.reduce((prevOption, currentOption) => {
          return prevOption + currentOption.amount;
        }, 0)}
      </h4>
      <ol>
        {cartOption.map((bird) => {
          return (
            <li>
              {bird.name}: ${bird.amount.toFixed(2)}
            </li>
          );
        })}
      </ol>
      <span></span>
      <p>
        <b> Your donations have qualified you for the following items:</b>
      </p>
      <ul>BONUS IN HERE:</ul>
    </div>
  );
}