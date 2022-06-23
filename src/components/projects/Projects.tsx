import React from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectCard from "./ProjectCard";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      marginTop: theme.spacing(6),
      [theme.breakpoints.down("xs")]: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
      },
    },
  };
});

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ProjectHeader />
      <ProjectCard />
    </div>
  );
};

export default Projects;
