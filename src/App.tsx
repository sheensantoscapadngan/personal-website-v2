import React from "react";
import {
  Grid,
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core";
import {
  PRIMARY_LIGHT,
  PRIMARY_MAIN,
  SECONDAY_MAIN,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "./constants/Colors";
import "./App.css";
import AppMenu from "./components/AppMenu";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Accomplishments from "./components/accomplishments/Accomplishments";
import Github from "./components/github/Github";
import Testimonies from "./components/testimony/Testimonies";
import Outro from "./components/outro/Outro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: PRIMARY_MAIN,
        light: PRIMARY_LIGHT,
      },
      secondary: {
        main: SECONDAY_MAIN,
      },
      text: {
        primary: TEXT_PRIMARY,
        secondary: TEXT_SECONDARY,
      },
    },
    typography: {
      fontFamily: "League Spartan",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  })
);

const useStyles = makeStyles((theme) => {
  return {
    githubContainer: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    testimonyContainer: {
      marginTop: theme.spacing(15),
    },
  };
});

const App = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <AppMenu />
        <Grid container>
          <Grid item sm={2} />
          <Grid container item sm={8}>
            <Intro />
            <Projects />
            <Accomplishments />
          </Grid>
        </Grid>
        <Grid container className={classes.githubContainer}>
          <Grid item sm={4}></Grid>
          <Github />
        </Grid>
        <Grid container className={classes.testimonyContainer}>
          <Testimonies />
        </Grid>
        <Outro />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
