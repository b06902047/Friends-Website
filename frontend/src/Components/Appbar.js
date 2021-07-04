import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MyDrawer from "./Drawer.js"
import { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import {
  Link
} from "react-router-dom";
import { Drawer } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginTop: '10%',
    fontFamily: 'fantasy',
    fontStyle: 'bold',
    fontDisplay: 'swap',
    fontSize: 25,
    fontWeight: 'bold',
  },
  font: {
    marginTop: '15%',
    fontFamily: 'fantasy',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontSize: 20,
    color: "white",
    "&:hover": {
      color: "red",
    },
  },
  visit: {
    marginTop: '10%',
    fontFamily: 'fantasy',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontSize: 20,
    marginLeft: '50%',
    color: "white",
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const [count, setCount] = useState(0)
  const username = "All";
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#ff9800' }}>
        <Toolbar>
        <MyDrawer></MyDrawer>
          
          <Grid container className={classes.root}>
                  <Grid item xs={4}>
                    <h3 className={classes.title}>
                      Happy Website
                    </h3>
                  </Grid>
                  <Grid item xs={2}>
                    <h4 className={classes.font}>Home</h4>
                  </Grid>
                  <Grid item xs={2}>
                    <h4 className={classes.font}>Chat</h4>
                  </Grid>
                  <Grid item xs={2}>
                    <h4 className={classes.font}>Calender</h4>
                  </Grid>
                  <Grid item xs={2}>
                    {props.loggedIn===false?
                      <h4 className={classes.font}>Login</h4>
                      :<h4 className={classes.font}>{username}</h4>
                    }
                  </Grid>
          </Grid>
        </Toolbar>
        
      </AppBar>
    </div>
  );
}
