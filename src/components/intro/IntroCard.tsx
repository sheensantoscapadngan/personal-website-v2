import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import { INTRO_CARD_MARGIN_TOP, CODE_ICON_WIDTH } from "../../constants/Intro";
import ProfilePicture from "../../images/intro_image.svg";
import CodeIcon from "../../images/code_icon.svg";

const useStyles = makeStyles((theme) => {
  return {
    introCardContainer: {
      marginTop: INTRO_CARD_MARGIN_TOP,
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(2),
    },
    introProfileImage: {
      maxWidth: "94%",
    },
    codeIcon: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      width: CODE_ICON_WIDTH,
    },
    introTextContainer: {
      paddingTop: theme.spacing(2),
    },
  };
});

const IntroCard = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.introCardContainer} elevation={10} square>
        <Grid container item sm={12}>
          <Grid item sm={4}>
            <img
              src={ProfilePicture}
              className={classes.introProfileImage}
            ></img>
          </Grid>
          <Grid item className={classes.introTextContainer} sm={8}>
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
