import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Accomplishment from "../../images/accomplishment.svg";

const useStyles = makeStyles((theme) => {
  return {
    accomplishmentText: {
      fontWeight: 600,
      fontSize: "2em",
      marginLeft: theme.spacing(1),
    },
  };
});

const AccomplishmentHeader = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container id="accomplishments-scrollpoint">
        <Grid container item sm={11}>
          <img
            alt="accomplishment icon"
            src={Accomplishment}
            style={{ height: "70%" }}
          />
          <Typography
            className={classes.accomplishmentText}
            color="textPrimary"
            variant="h3"
          >
            Accomplishments
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AccomplishmentHeader;
