import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import { ACCOMPLISHMENT_MARGIN_TOP } from "../../constants/Accomplishment";
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
      <Grid container style={{ marginTop: ACCOMPLISHMENT_MARGIN_TOP }}>
        <Grid container item sm={11}>
          <img src={Accomplishment} style={{ height: "70%" }} />
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
