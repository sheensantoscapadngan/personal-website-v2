import React from "react";
import OutroLinks from "./OutroLinks";
import OutroFeedback from "./OutroFeedback";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10),
    },
  };
});

const Outro = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item sm={5}>
        <OutroLinks />
      </Grid>
      <Grid item sm={7}>
        <OutroFeedback />
      </Grid>
    </Grid>
  );
};

export default Outro;
