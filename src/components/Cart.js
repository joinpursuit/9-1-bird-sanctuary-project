import { useState } from "react";

export default function Cart(props) {
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [birdList, setBirdList] = useState([]);
  const [itemList, setItemList] = useState([]);
  return (
    <div className="cart">
      <h2>Cart</h2>
      <h3>Total: ${total}</h3>
      <p>Discount: {discount}%</p>
      <ol>{birdList}</ol>
      <ul>
        Your donations have qualified you for the following items: {itemList}
      </ul>
    </div>
  );
}
