import React from "react";
import IntroText from "./IntroText";
import IntroCard from "./IntroCard";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(5),
    },
  },
}));

const Intro = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <IntroText />
      <IntroCard />
    </div>
  );
};

export default Intro;
