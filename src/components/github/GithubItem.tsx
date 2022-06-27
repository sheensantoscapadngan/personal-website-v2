import React from "react";
import { Grid, Paper, Typography, makeStyles, Link } from "@material-ui/core";
import WatchIcon from "../../images/watch_icon.svg";
import StarIcon from "../../images/star_icon.svg";
import ForkIcon from "../../images/fork_icon.svg";
import { GithubRepoInterface } from "../../interfaces/GithubInterface";

const useStyles = makeStyles((theme) => {
  return {
    description: {
      fontSize: "85%",
    },
    icon: {
      width: "25%",
    },
    iconText: {
      fontSize: "60%",
      marginLeft: theme.spacing(0.5),
    },
    name: {
      marginTop: 10,
      display: "inline-block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "calc(90%)",
    },
    repoContainer: {
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(2),
      height: "100%",
      borderRadius: 10,
    },
  };
});

interface Props {
  repo: GithubRepoInterface;
}

const GithubItem = (props: Props) => {
  const { repo } = props;
  const classes = useStyles();
  return (
    <Paper elevation={10} className={classes.repoContainer}>
      <Grid container justify="flex-end">
        <Grid item>
          <Grid container item>
            <img alt="watch" src={WatchIcon} className={classes.icon} />
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.iconText}
            >
              Watch
            </Typography>
            <Typography
              variant="body2"
              color="secondary"
              className={classes.iconText}
            >
              {repo.watchersCount}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container item>
            <img alt="star" src={StarIcon} className={classes.icon} />
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.iconText}
            >
              Star
            </Typography>
            <Typography
              variant="body2"
              color="secondary"
              className={classes.iconText}
            >
              {repo.starsCount}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container item>
            <img alt="fork" src={ForkIcon} className={classes.icon} />
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.iconText}
            >
              Fork
            </Typography>
            <Typography
              variant="body2"
              color="secondary"
              className={classes.iconText}
            >
              {repo.forksCount}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Link
        color="textPrimary"
        className={classes.name}
        href={repo.url}
        rel="noreferrer"
        target="_blank"
        variant="h6"
      >
        {repo.name}
      </Link>
      <Typography
        color="textSecondary"
        variant="body2"
        className={classes.description}
      >
        {repo.description}
      </Typography>
    </Paper>
  );
};

export default GithubItem;
