import React from "react";

import {
  Grid,
  IconButton,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Thumbnail from "../../images/youtube_thumbnail.svg";
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
      marginTop: theme.spacing(2),
    },
    videoInfo: {
      marginTop: theme.spacing(1),
    },
    videoDesc: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(1),
      fontSize: "0.8em",
    },
    test: {
      backgroundColor: "blue",
    },
    thumbnail: {
      maxWidth: "100%",
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
          <Grid container item sm={5}>
            <img src={Thumbnail} className={classes.thumbnail}></img>
          </Grid>
          <Grid item sm={7} className={classes.textContainer}>
            <Typography className={classes.videoTitle}>
              I developed an app for downloading Spotify Playlists for FREE
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.videoInfo}
            >
              StickDoesCS · 31.2k views
            </Typography>
            <Typography variant="body2" className={classes.videoDesc}>
              If this video gets 100 likes, I'll continue to push updates and
              make it even better! Oh, and I apologize for the bad UI, its uhhhh
              well, the best I could do for now :')
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.actionsContainer} justify="center">
          <Grid item>
            <IconButton>
              <img src={VisitChannel} className={classes.actionsIcon} />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ProjectCard;
