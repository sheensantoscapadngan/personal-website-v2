import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Github from "../../default_values/Github";
import GithubItem from "./GithubItem";

const useStyles = makeStyles((theme) => {
  return {
    gridItem: {
      marginTop: theme.spacing(4),
    },
  };
});

const GithubTable = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={4} alignItems="stretch">
      {Github.map((repo) => (
        <Grid item sm={4} className={classes.gridItem}>
          <GithubItem repo={repo} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GithubTable;
