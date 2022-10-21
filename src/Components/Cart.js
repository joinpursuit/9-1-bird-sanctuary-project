import React from "react";
// import { useState } from "react";
import { Typography, Grid, List, Button, ListItem } from "@material-ui/core";

const Cart = ({ classes, adoption, removeItem, totalPrice, bonus }) => {
  return (
    <Grid item xs={6} maxWidth="sm" className={classes.cart}>
      <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        Cart
      </Typography>
      <Typography variant="h4" color="textPrimary">
        Discount: {adoption.length < 3 ? 0 : 10}
      </Typography>
      <Typography variant="h5" color="textPrimary">
        Total:
        {totalPrice}
      </Typography>

      {adoption.map((items) => {
        return (
          <>
            <List component="ol">
              <ListItem key={items.id} className={classes.list}>
                <Typography variant="h5" color="textPrimary">
                  {items.name}: ${items.amount}
                </Typography>
                <Button
                  className={classes.button}
                  size="small"
                  variant="contained"
                  align="center"
                  color="secondary"
                  onClick={() => removeItem(items.id)}
                >
                  Delete
                </Button>
              </ListItem>
            </List>
          </>
        );
      })}

      <Typography variant="h5">
        Your donation has qualified you for the following items:{" "}
      </Typography>

      <List component="ul">
        {bonus.map((item, index) => {
          return (
            <ListItem className={classes.list} key={index}>
              <Typography variant="h5">{item}</Typography>
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
};

export default Cart;
