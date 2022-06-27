import React from "react";

import {
  Grid,
  IconButton,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Project from "../../default_values/Project";
import VisitChannel from "../../images/visit_channel.svg";

const useStyles = makeStyles((theme) => {
  return {
    actionsContainer: {
      marginTop: theme.spacing(3),
    },
    actionsIcon: {
      height: "2rem",
    },
    projectCardContainer: {
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(2),
    },
    videoTitle: {
      cursor: "pointer",
      marginTop: theme.spacing(2),
      "&:hover": {
        opacity: 0.8,
      },
    },
    videoInfo: {
      marginTop: theme.spacing(1),
    },
    videoDesc: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(1),
      fontSize: "0.85em",
    },
    test: {
      backgroundColor: "blue",
    },
    video: {
      width: "100%",
      height: "200px",
    },
    textContainer: {
      paddingLeft: theme.spacing(2),
    },
  };
});

const ProjectCard = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.projectCardContainer} elevation={2} square>
        <Grid container sm={12}>
          <Grid container item justify="center" sm={5}>
            <iframe
              className={classes.video}
              src={Project.embedUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Grid>
          <Grid item sm={7} className={classes.textContainer}>
            <Typography
              className={classes.videoTitle}
              onClick={() => window.open(Project.videoUrl)}
            >
              {Project.title}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.videoInfo}
            >
              {Project.author}
            </Typography>
            <Typography variant="body2" className={classes.videoDesc}>
              {Project.description}
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.actionsContainer} justify="center">
          <Grid item>
            <IconButton onClick={() => window.open(Project.authorUrl)}>
              <img
                alt="visit"
                src={VisitChannel}
                className={classes.actionsIcon}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ProjectCard;
