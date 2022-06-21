import React from "react";
import { Paper, Typography, makeStyles, Grid } from "@material-ui/core";
import { PROFILE_IMAGE_SIZE } from "../../constants/Testimony";
import TestimonyInterface from "../../interfaces/TestimonyInterface";

interface TestimonyItemProps {
  data: TestimonyInterface;
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
    content: {
      fontSize: "80%",
    },
  };
});

const TestimonyItem = ({ data }: TestimonyItemProps) => {
  const { headline, content, profilePicture, name } = data;
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
      <Typography color="textSecondary" className={classes.content}>
        {content}
      </Typography>
    </Paper>
  );
};

export default TestimonyItem;
