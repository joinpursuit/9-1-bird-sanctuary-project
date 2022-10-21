import React from "react";
import {
  Grid,
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
} from "@material-ui/core";
const NavBar = () => {
  return (
    <Grid item sx={12}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <img
            src={window.location.origin + "/birdLogo.jpg"}
            style={{
              height: "50px",
              borderRadius: "5px",
              marginRight: "10px",
            }}
            alt="bird"
          />

          <Typography variant="h5">BirdHeaven</Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default NavBar;
