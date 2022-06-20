import React from "react";
import { Button, Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.primary.main,
      paddingRight: theme.spacing(20),
    },
    content: {
      backgroundColor: theme.palette.primary.light,
      borderStyle: "none",
      color: theme.palette.text.primary,
      marginTop: theme.spacing(1),
      minHeight: "120px",
      overflow: "auto",
      padding: theme.spacing(2),
      width: "100%",
    },
    subtitle: {
      fontSize: "70%",
    },
    submit: {
      marginTop: theme.spacing(1),
    },
  };
});

const OutroFeedback = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Typography variant="h4" color="textPrimary">
        I appreciate your feedback!
      </Typography>
      <Typography color="textSecondary" className={classes.subtitle}>
        onsectetur adipiscing elit. Vestibulum semper nisi a quam interdum
        sollicitudin. Praesent tincidunt malesuada purus, sit amet pretium nulla
        rhoncus eget. Integer eu urna ac nulla pellentesque molestie. Class
      </Typography>
      <textarea className={classes.content}></textarea>
      <Grid container justify="flex-end">
        <Button color="secondary" className={classes.submit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default OutroFeedback;
