import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  name: {
    fontWeight: 600,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.1rem",
    },
  },
}));

const AppIntroduction = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container justify="center" alignItems="center">
        <Typography color="textSecondary">Hi there! I'm</Typography>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Typography className={classes.name} color="textPrimary" variant="h2">
          Sheen Capadngan
        </Typography>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ marginTop: 15 }}
      >
        <Typography
          color="textPrimary"
          variant="body2"
          style={{ textAlign: "center", fontSize: "1rem" }}
        >
          Full-stack Software Developer & Programming Enthusiast
        </Typography>
      </Grid>
    </Container>
  );
};

export default AppIntroduction;
