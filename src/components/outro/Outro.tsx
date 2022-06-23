import React from "react";
import OutroLinks from "./OutroLinks";
import OutroFeedback from "./OutroFeedback";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(10),
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(2),
      },
      [theme.breakpoints.up("sm")]: {
        marginTop: theme.spacing(10),
      },
    },
  };
});

const Outro = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={5}>
        <OutroLinks />
      </Grid>
      <Grid item xs={12} sm={7}>
        <OutroFeedback />
      </Grid>
    </Grid>
  );
};

export default Outro;
