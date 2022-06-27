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
      fontSize: "80%",
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
    });
  };

  return (
    <Grid container className={classes.container} id="feedback-scrollpoint">
      <Typography variant="h4" color="textPrimary">
        Got any feedback for me?
      </Typography>
      <Typography color="textSecondary" className={classes.subtitle}>
        Let me know. I would really appreciate it if you would take the time to
        leave me your inputs on how I can improve. Don't worry, you'll be
        anonymous so feel free to be as honest as possible!
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
