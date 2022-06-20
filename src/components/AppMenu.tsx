import React from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Logo from "../images/logo.svg";
import MenuBubble from "../images/menu_bubble.svg";
import { MENU_BUBBLE_HEIGHT, MENU_ICON_HEIGHT } from "../constants/AppMenu";

const useStyles = makeStyles((theme) => {
  return {
    menuContainer: {
      display: "flex",
    },
    menuIcon: {
      height: MENU_ICON_HEIGHT,
      marginRight: theme.spacing(4),
    },
    menuItem: {
      marginRight: theme.spacing(4),
    },
    menuBubbleContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    menuBubble: {
      height: MENU_BUBBLE_HEIGHT,
    },
  };
});

const AppMenu = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar style={{ margin: 0, padding: 0 }}>
        <Grid container>
          <Grid
            item
            sm={6}
            className={classes.menuContainer}
            alignItems="center"
            justify="center"
          >
            <img src={Logo} className={classes.menuIcon} />
            <Typography
              align="left"
              className={classes.menuItem}
              color="textSecondary"
            >
              Home
            </Typography>
            <Typography className={classes.menuItem} color="textSecondary">
              Projects
            </Typography>
            <Typography className={classes.menuItem} color="textSecondary">
              Accomplishments
            </Typography>
            <Typography className={classes.menuItem} color="textSecondary">
              Github
            </Typography>
            <Typography className={classes.menuItem} color="textSecondary">
              Feedback
            </Typography>
          </Grid>
          <Grid item sm={6} className={classes.menuBubbleContainer}>
            <img src={MenuBubble} className={classes.menuBubble}></img>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppMenu;
