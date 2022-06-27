import React from "react";
import { Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import SocialMedia from "../../default_values/SocialMedia";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.primary.main,
      marginBottom: theme.spacing(3),
      paddingLeft: theme.spacing(6),
      paddingTop: theme.spacing(3),
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
      cursor: "pointer",
      "&:hover": {
        opacity: 0.8,
      },
    },
  };
});

const OutroLinks = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      {SocialMedia.map((item) => (
        <Grid
          container
          item
          alignItems="center"
          className={classes.rowContainer}
          onClick={() => {
            window.open(item.link);
          }}
          lg={12}
          xs={4}
        >
          <img alt="logo" src={item.icon} className={classes.linkIcon} />
          <Hidden mdDown>
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.linkText}
            >
              {item.link}
            </Typography>
          </Hidden>
        </Grid>
      ))}
    </Grid>
  );
};

export default OutroLinks;
