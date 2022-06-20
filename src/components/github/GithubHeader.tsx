import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import GithubIcon from "../../images/github_icon.svg";
import { GITHUB_HEADER_MARGIN_TOP } from "../../constants/Github";

const useStyles = makeStyles((theme) => {
  return {
    githubIcon: {
      width: "60%",
      float: "right",
      marginRight: theme.spacing(1),
    },
  };
});

const GithubHeader = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      style={{ marginTop: GITHUB_HEADER_MARGIN_TOP }}
    >
      <Grid container item sm={6} alignItems="center" justify="center">
        <Grid item>
          <img src={GithubIcon} className={classes.githubIcon} />
        </Grid>
        <Grid item>
          <Typography variant="h3" color="textPrimary">
            Github Repos
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GithubHeader;
