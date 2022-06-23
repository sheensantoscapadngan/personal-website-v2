import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import ProfilePicture from "../../images/intro_image.svg";
import CodeIcon from "../../images/code_icon.svg";

const useStyles = makeStyles((theme) => {
  return {
    cardContainer: {
      marginTop: theme.spacing(9),
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(2),
    },
    profileImageContainer: {
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        marginBottom: theme.spacing(1),
      },
    },
    profileImage: {
      maxWidth: "94%",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "60%",
      },
    },
    codeIcon: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      width: "1.1rem",
    },
    textContainer: {
      paddingTop: theme.spacing(2),
      textAlign: "justify",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2),
      },
    },
  };
});

const IntroCard = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.cardContainer} elevation={10} square>
        <Grid container sm={12}>
          <Grid
            container
            item
            md={4}
            sm={12}
            className={classes.profileImageContainer}
          >
            <img src={ProfilePicture} className={classes.profileImage}></img>
          </Grid>
          <Grid item className={classes.textContainer} md={8} sm={12}>
            <Typography variant="body1" style={{ fontSize: "1.2em" }}>
              I am...
            </Typography>
            <img src={CodeIcon} className={classes.codeIcon}></img>
            <Typography>
              a Full-time Developer, and a Part-time Student from
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Cebu, Philippines. I work as a full-stack developer at Symph,
              geared towards developing complete software solutions for
              businesses and organizations. Currently, I'm studying as a
              grade-11 scholar of Philippine Science High School - Central
              Visayas Campus. I make computer science youtube videos for fun and
              I work on completely random projects with high hopes of soon
              becoming a crazy rich asian.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default IntroCard;
