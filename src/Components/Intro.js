import React from "react";
import { Typography, Grid } from "@material-ui/core";

const Intro = ({ classes }) => {
  return (
    <Grid item sx={12} className={classes.intro}>
      <Typography variant="h1" align="center" color="textPrimary" gutterBottom>
        Bird Heaven
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Your donation will not only help us protect and restore the habitats
        birds rely on to thrive and survive; it will also allow us to help
        priority bird species in decline by broadening and deepening our
        education and conservation programs.{" "}
        <strong>
          Together we can be the voice of birds and we thank you for your
          support.
        </strong>
      </Typography>
    </Grid>
  );
};

export default Intro;
