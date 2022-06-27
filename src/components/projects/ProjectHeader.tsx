import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Projects from "../../images/projects_icon.svg";

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
      <Grid container id="projects-scrollpoint">
        <Grid container item xs={12}>
          <img alt="projects" src={Projects} style={{ height: "70%" }} />
          <Typography
            className={classes.projectsText}
            color="textPrimary"
            variant="h3"
          >
            Projects
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectHeader;
