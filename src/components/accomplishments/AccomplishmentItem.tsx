import React from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core";

interface AccomplishmentItemInterface {
  data: { headline: string; description: string; image: string };
}

const useStyles = makeStyles((theme) => {
  return {
    itemContainer: {
      backgroundColor: theme.palette.primary.main,
    },
    headline: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
    description: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      textAlign: "justify",
    },
  };
});

const AccomplishmentItem = ({ data }: AccomplishmentItemInterface) => {
  const classes = useStyles();
  const { image, headline, description } = data;
  return (
    <>
      <Grid container justify="center" className={classes.itemContainer}>
        <Grid item sm={1}></Grid>
        <Grid item>
          <img
            alt="accomplishment"
            loading="lazy"
            src={image}
            style={{ maxHeight: 240 }}
          />
        </Grid>
        <Grid item sm={1}></Grid>
      </Grid>

      <Grid item>
        <Typography
          variant="body1"
          color="textPrimary"
          className={classes.headline}
        >
          {headline}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="body2"
          color="textSecondary"
          className={classes.description}
        >
          {description}
        </Typography>
      </Grid>
    </>
  );
};

export default AccomplishmentItem;
