import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";

const AppIntroduction = () => {
  return (
    <Container>
      <Grid container justify="center" alignItems="center">
        <Typography color="textSecondary">Hi there! I'm</Typography>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Typography
          color="textPrimary"
          variant="h2"
          style={{ fontWeight: 600, textAlign: "center" }}
        >
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
