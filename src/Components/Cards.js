import React from "react";

import {
  Typography,
  Card,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  ListItem,
} from "@material-ui/core";

const Cards = ({
  classes,
  birdData,
  adoption,
  setAdoption,
  handleBirdsAdoption,
}) => {
  return (
    <>
      <Grid item className={classes.cardGrid}>
        <Grid container spacing={2}>
          {birdData.map((bird) => (
            <Grid item xs={6} md={3}>
              <Card className={classes.card}>
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h4">
                    {bird.name}
                  </Typography>
                  <Typography gutterBottom variant="h6">
                    Price: ${bird.amount}
                  </Typography>
                </CardContent>
                <CardMedia
                  className={classes.cardMedia}
                  image={bird.img}
                  alt={bird.name}
                />
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    align="center"
                    color="primary"
                    value={bird.id}
                    onClick={() => {
                      handleBirdsAdoption(bird);
                    }}
                    //  onClick={() => setAdoption([...adoption, { name, amount }])}
                  >
                    ADOPT
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Cards;
