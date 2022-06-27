import React, { useState } from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  makeStyles,
  Hidden,
  IconButton,
  SwipeableDrawer,
} from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import GitHubIcon from "@material-ui/icons/GitHub";
import MenuIcon from "@material-ui/icons/Menu";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import WorkIcon from "@material-ui/icons/Work";
import Logo from "../images/logo.svg";
import MenuBubble from "../images/menu_bubble.svg";
import { MENU_BUBBLE_HEIGHT, MENU_ICON_HEIGHT } from "../constants/AppMenu";

const useStyles = makeStyles((theme) => {
  return {
    drawerPaper: {
      backgroundColor: theme.palette.primary.main,
    },
    linkIcon: {
      marginRight: theme.spacing(2),
    },
    menuContainer: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        justifyContent: "center",
      },
    },
    menuIcon: {
      height: MENU_ICON_HEIGHT,
      marginRight: theme.spacing(4),
    },
    menuItem: {
      cursor: "pointer",
      display: "flex",
      marginRight: theme.spacing(4),
      "&:hover": {
        color: theme.palette.secondary.main,
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(2),
      },
    },
    menuBubbleContainer: {
      display: "flex",
      justifyContent: "flex-end",
    },
    menuBubble: {
      height: MENU_BUBBLE_HEIGHT,
    },
  };
});

const AppMenu = () => {
  const classes = useStyles();
  const [isDrawerOpen, setDrawerState] = useState(false);

  const scroll = (elementId: string) => {
    document
      ?.querySelector(`#${elementId}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

    setDrawerState(false);
  };

  const Links = ({ showLinkIcons }: { showLinkIcons?: boolean }) => (
    <>
      <Hidden smDown>
        <img alt="icon" className={classes.menuIcon} src={Logo} />
      </Hidden>
      <Typography
        align="left"
        className={classes.menuItem}
        color="textSecondary"
        onClick={() => scroll("projects-scrollpoint")}
      >
        {showLinkIcons && <DeveloperBoardIcon className={classes.linkIcon} />}
        Projects
      </Typography>
      <Typography
        className={classes.menuItem}
        color="textSecondary"
        onClick={() => scroll("accomplishments-scrollpoint")}
      >
        {showLinkIcons && <WorkIcon className={classes.linkIcon} />}
        Accomplishments
      </Typography>
      <Typography
        className={classes.menuItem}
        color="textSecondary"
        onClick={() => scroll("github-scrollpoint")}
      >
        {showLinkIcons && <GitHubIcon className={classes.linkIcon} />}
        Github
      </Typography>
      <Typography
        className={classes.menuItem}
        color="textSecondary"
        onClick={() => scroll("testimonies-scrollpoint")}
      >
        {showLinkIcons && <ThumbUpAltIcon className={classes.linkIcon} />}
        Testimonies
      </Typography>
      <Typography
        className={classes.menuItem}
        color="textSecondary"
        onClick={() => scroll("feedback-scrollpoint")}
      >
        {showLinkIcons && <ChatBubbleIcon className={classes.linkIcon} />}
        Feedback
      </Typography>
    </>
  );

  const toggleDrawer =
    (state: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerState(state);
    };

  const SmallScreenView = () => (
    <>
      <Hidden mdUp>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon color="secondary" fontSize="large" />
        </IconButton>
        <SwipeableDrawer
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Links showLinkIcons />
        </SwipeableDrawer>
      </Hidden>
    </>
  );

  const DefaultView = () => (
    <>
      <Hidden smDown>
        <Links />
      </Hidden>
    </>
  );

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar style={{ margin: 0, padding: 0 }}>
        <Grid container>
          <Grid
            item
            alignItems="center"
            className={classes.menuContainer}
            justify="flex-start"
            sm={10}
            lg={6}
          >
            <DefaultView />
            <SmallScreenView />
          </Grid>
          <Hidden xsDown>
            <Grid item sm={2} lg={6} className={classes.menuBubbleContainer}>
              <img
                alt="bubble"
                src={MenuBubble}
                className={classes.menuBubble}
              ></img>
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppMenu;
