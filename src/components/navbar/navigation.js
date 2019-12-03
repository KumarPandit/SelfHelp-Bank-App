import React from "react";
import "./navigation.css";
import { makeStyles, fade } from "@material-ui/core/styles";
import {
  Toolbar,
  Typography,
  Button,
  AppBar,
  InputBase
} from "@material-ui/core";

import SearchIcon from '@material-ui/icons/Search';

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
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    }
  },

  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

export default function Navigation() {
  const classes = usetyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navColor}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            DHUKUTI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className="navbarlt">

            <Button size="large" color="inherit">
              Feed
            </Button>
            <Button size="large" color="inherit">
              Signup
            </Button>
            <Button size="large" color="inherit">
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
