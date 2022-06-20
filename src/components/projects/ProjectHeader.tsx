import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Youtube from "../../images/youtube.svg";
import Projects from "../../images/projects_icon.svg";
import { PROJECTS_MARGIN_TOP } from "../../constants/Projects";

const useStyles = makeStyles((theme) => {
  return {
    projectsText: {
      fontWeight: 600,
      fontSize: "2em",
      marginLeft: theme.spacing(1),
    },
  };
});

const ProjectHeader = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container style={{ marginTop: PROJECTS_MARGIN_TOP }}>
        <Grid container item sm={11}>
          <img src={Projects} style={{ height: "70%" }} />
          <Typography
            className={classes.projectsText}
            color="textPrimary"
            variant="h3"
          >
            Projects
          </Typography>
        </Grid>
        <Grid item sm={1}>
          <img src={Youtube} style={{ width: "100%" }}></img>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectHeader;
