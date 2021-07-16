import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Appbar from "../Components/Appbar.js";
import Home from "../Components/Home.js";
import Calender from "../Components/Calender.js";

import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
}));

export default function MainPage(props) {
  const classes = useStyles();
  return (
    <>
    <Router>
       <Appbar 
        linkHome={<Link to="/" className={classes.font}>Home</Link>}
        linkChat={<Link to="/chat" className={classes.font}>Chat</Link>}
        linkCalendar={<Link to="/calender" className={classes.font}>Calender</Link>}
      />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/chat" component={Calender}></Route>
        <Route exact path="/calender" component={Calender}></Route>
    </Router>
    </>
  );
}
