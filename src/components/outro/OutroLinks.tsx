import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import SocialMedia from "../../default_values/SocialMedia";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.primary.main,
      paddingLeft: theme.spacing(6),
      paddingTop: theme.spacing(5),
    },
    linkIcon: {
      maxWidth: "2rem",
    },
    linkText: {
      fontSize: "0.7rem",
      marginLeft: theme.spacing(2),
    },
    rowContainer: {
      marginBottom: theme.spacing(2),
    },
  };
});

const OutroLinks = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid container>
        {SocialMedia.map((item) => (
          <Grid
            container
            item
            alignItems="center"
            className={classes.rowContainer}
          >
            <img src={item.icon} className={classes.linkIcon} />
            <a href={item.link} target="_blank" rel="noreferrer">
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.linkText}
              >
                {item.link}
              </Typography>
            </a>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default OutroLinks;
