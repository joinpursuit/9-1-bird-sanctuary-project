import React from "react";

function Cards({ birdData, total, setTotal, cart, setCart}) {

  const handleClick = (bird, cart) => {
  const newTotal = total + bird.amount
  
  setTotal(newTotal)
  let hasBird = false;
  cart.forEach(cartBird => {
    if (cartBird.name === bird.name){
      hasBird = true
    }
  });
  if(!hasBird) {
    setCart([...cart, bird])
  }else{
    alert('You have already added this bird to the cart')
  }
 }

  return (
    <div className="card">
      {birdData.map((bird) => (
        <div className="birds" key={bird.id}>
          <h4>{bird.name}</h4>
          <p>Price:${bird.amount}</p>
          <img className="birdImg" src={bird.img} alt={bird.name} />
          <button className="adoptbtn" onClick={() => handleClick(bird, cart)}>Adopt</button>
        </div>
      ))}
    </div>
  );
}

export default Cards;
