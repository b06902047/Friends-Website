import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Login from "../Components/Login.js"

const useStyles = makeStyles((theme) => ({
  background: {
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundColor: '#bbff00',
      height: "100vh",
      display: 'grid',
      gridTemplateRows: "1fr 3fr",
      gridTemplateColumns: "1fr"
    },
    fontWelcome: {
      textAlign: 'center', 
      fontWeight: 'bold',
      fontSize: 100,
      fontFamily: 'Festive, cursive',
      justifyContent: 'center',
        alignItems: 'center'
    },
    fontLogin: {
      textAlign: 'center', 
      fontWeight: 'bold',
      fontSize: 50,
      fontFamily: 'Festive',
    },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  
  return (
    <Grid container className={classes.background}>
        <Grid item xs={12} className={classes.fontWelcome}>Welcome</Grid>
        <Grid item xs={12}><Login setLoggedIn={props.setLoggedIn}/></Grid>
    </Grid>
  );
}
