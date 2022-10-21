import React from "react";

import { Grid, TextField, Paper, Avatar } from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Checkout = ({ setAdoption, adoption }) => {
  const paperStyle = { padding: 10 };

  function handleSubmit(e) {
    e.preventDefault();

    adoption.length < 1
      ? alert("Please select your favorite bird.")
      : alert("You have adopted birds. Thank you!");
    e.target.reset();
    setAdoption([]);
  }

  return (
    <Grid xs={6}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "red" }}>
            <ShoppingCartIcon />
          </Avatar>
          <h2>Checkout</h2>
        </Grid>

        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            placeholder="First Name"
            fullWidth
            // onChange={handleFirstNameChange}
            required
          ></TextField>

          <TextField
            label="Last Name"
            placeholder="Last Name"
            fullWidth
            // onChange={handleLastNameChange}
            required
          ></TextField>

          <TextField
            label="Email"
            placeholder="Email"
            fullWidth
            // onChange={handleEmailChange}
            required
          ></TextField>

          <TextField
            label="Zipe Code"
            placeholder="Zip Code"
            fullWidth
            // onChange={handleZipCodeChange}
            required
          ></TextField>
          <input type="submit" value="Submit" />
        </form>
        {/* </div> */}
      </Paper>
    </Grid>
  );
};

export default Checkout;
