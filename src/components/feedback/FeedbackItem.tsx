import React from "react";
import { Paper, Typography, makeStyles, Grid } from "@material-ui/core";
import { PROFILE_IMAGE_SIZE } from "../../constants/Feedback";
import FeedbackInterface from "../../interfaces/FeedbackInterface";

interface FeedbackItemProps {
  data: FeedbackInterface;
}

const useStyles = makeStyles((theme) => {
  return {
    itemContainer: {
      backgroundColor: theme.palette.primary.light,
      margin: theme.spacing(1),
      padding: theme.spacing(4),
    },
    picture: {
      width: PROFILE_IMAGE_SIZE,
      height: PROFILE_IMAGE_SIZE,
      borderRadius: "50%",
    },
    name: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    feedback: {
      fontSize: "80%",
    },
  };
});

const FeedbackItem = ({ data }: FeedbackItemProps) => {
  const { headline, feedback, profilePicture, name } = data;
  const classes = useStyles();
  return (
    <Paper elevation={10} className={classes.itemContainer}>
      <Grid container justify="center" alignItems="center">
        <img src={profilePicture} className={classes.picture} alt="profile" />
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Typography variant="body1" className={classes.name}>
          {name}
        </Typography>
      </Grid>
      <Typography>{headline}</Typography>
      <Typography color="textSecondary" className={classes.feedback}>
        {feedback}
      </Typography>
    </Paper>
  );
};

export default FeedbackItem;
