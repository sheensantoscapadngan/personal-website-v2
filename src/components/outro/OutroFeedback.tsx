import React, { useState } from "react";
import { Button, Grid, Typography, makeStyles } from "@material-ui/core";
import Swal from "sweetalert2";
import { publishFeedback } from "../../services/FeedbackService";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.up("sm")]: {
        paddingRight: theme.spacing(5),
      },
      [theme.breakpoints.up("lg")]: {
        paddingRight: theme.spacing(20),
      },
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
  const [feedback, setFeedback] = useState("");

  const handleInputChange = (event: any) => {
    event.preventDefault();

    setFeedback(event.target.value);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    publishFeedback(feedback);

    Swal.fire({
      title: "Thank you for your feedback",
      text: "I will look into this when I can.",
    });
  };

  return (
    <Grid container className={classes.container} id="feedback-scrollpoint">
      <Typography variant="h4" color="textPrimary">
        I appreciate your feedback!
      </Typography>
      <Typography color="textSecondary" className={classes.subtitle}>
        onsectetur adipiscing elit. Vestibulum semper nisi a quam interdum
        sollicitudin. Praesent tincidunt malesuada purus, sit amet pretium nulla
        rhoncus eget. Integer eu urna ac nulla pellentesque molestie. Class
      </Typography>
      <textarea
        className={classes.content}
        onChange={handleInputChange}
      ></textarea>
      <Grid container justify="flex-end">
        <Button
          color="secondary"
          className={classes.submit}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default OutroFeedback;
