import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  IconButton,
  Typography,
  Button,
  AppBar
} from "@material-ui/core";

const usetyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(5)
  },
  title: {
    flexGrow: 1
  },
  navColor: {
    position: "relative",
    backgroundColor: "#0b83e6"
  }
}));

export default function Navigation() {
  const classes = usetyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navColor}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>

          <Typography variant="h5" className={classes.title}>
            Dhukuti
          </Typography>
          <Button size="large" color="inherit">
            Feed
          </Button>
          <Button size="large" color="inherit">
            Signup
          </Button>
          <Button size="large" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}