import React from "react";

import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import { useState } from "react";
import NavBar from "./Components/NavBar";
import Cards from "./Components/Cards";
import Intro from "./Components/Intro";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";

function App() {
  const classes = useStyles();
  const [adoption, setAdoption] = useState([]);
  let bonus = [];
  let totalPrice = adoption.reduce((accu, { amount }) => accu + amount, 0);
  if (adoption.length >= 3) {
    totalPrice = totalPrice - totalPrice * 0.1;
  }
  if (totalPrice >= 100 && totalPrice < 300) {
    bonus.push(bonusItems[0]);
  } else if (totalPrice >= 300 && totalPrice < 500) {
    bonus.push(bonusItems[0], bonusItems[1]);
  } else if (totalPrice >= 500 && totalPrice < 1000) {
    bonus.push(bonusItems[0], bonusItems[1], bonusItems[2]);
  } else if (totalPrice >= 1000) {
    bonus.push(bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3]);
  }

  function removeItem(id) {
    setAdoption(adoption.filter((item) => item.id !== id));
  }

  const handleBirdsAdoption = (bird) => {
    const birdExist = adoption.find((item) => item.id === bird.id);
    if (birdExist) {
      return alert("You have already added this bird to the cart");
    } else {
      setAdoption([
        ...adoption,
        { ...bird, name: bird.name, amount: bird.amount },
      ]);
    }
  };

  return (
    <>
      <Grid container spacing={3} sx={{ overflowY: "hidden" }}>
        <NavBar />
        <Intro classes={classes} />

        <Cards
          classes={classes}
          adoption={adoption}
          setAdoption={setAdoption}
          birdData={birdData}
          handleBirdsAdoption={handleBirdsAdoption}
        />

        <Grid container>
          <Cart
            classes={classes}
            birdData={birdData}
            adoption={adoption}
            setAdoption={setAdoption}
            removeItem={removeItem}
            bonusItems={bonusItems}
            totalPrice={totalPrice}
            bonus={bonus}
          />
          <Checkout
            classes={classes}
            birdData={birdData}
            adoption={adoption}
            setAdoption={setAdoption}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;

// const [total, setTotal] = useState(0);
// const [discount, setDiscount] = useState(0);
// setTotalPrice (adoption.reduce((accu, { amount }) => accu + amount, 0))

//
// if (adoption.length) {
//   adoption.length >= 3 ? setDiscount(10) : setDiscount(0);
//   let discountedAmount = 0;
//   adoption.forEach((ele) => (discountedAmount += ele.amount * 0.9));
//   setTotal(discountedAmount);
// } else {
//   setTotal(0);
//   setDiscount(0);
// }
