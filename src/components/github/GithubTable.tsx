import React, { useEffect, useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import GithubItem from "./GithubItem";
import { GithubRepoInterface } from "../../interfaces/GithubInterface";
import {
  fetchGithubRepos,
  removeForkedRepos,
  sortReposByPopularity,
} from "../../services/GithubService";

const useStyles = makeStyles((theme) => {
  return {
    gridItem: {
      marginTop: theme.spacing(4),
    },
  };
});

const GithubTable = () => {
  const classes = useStyles();
  const [githubRepos, setGithubRepos] = useState<GithubRepoInterface[]>([]);

  useEffect(() => {
    fetchGithubRepos().then((data) => {
      const filteredRepos = removeForkedRepos(data);
      const sortedRepos = sortReposByPopularity(filteredRepos);
      setGithubRepos(sortedRepos);
    });
  }, []);

  return (
    <Grid container spacing={4} alignItems="stretch">
      {githubRepos.map((repo) => (
        <Grid item sm={6} md={4} xs={12} className={classes.gridItem}>
          <GithubItem repo={repo} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GithubTable;
