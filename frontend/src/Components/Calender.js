import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import bigCalendar from "react-big-calendar/lib/css/react-big-calendar.css"
import { subDays, addDays } from 'date-fns'

const locales = {
  'en-US': require('date-fns/locale/en-US'),
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const useStyles = makeStyles((theme) => ({
    form: {
        fontFamily: 'sansserif',
        textAlign: 'center',
        maxWidth: "80%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        background: "white",
        marginTop: "auto",
    },
    paper: {
        fontFamily: 'sansserif',
        textAlign: 'center',
        width: "80%",
        height: "80%",
        margin: "auto",
        marginTop: "5%",
        display: "flex",
        flexDirection: "column",
        background: "white",
        padding: 0,
    },
    dates: {
        
    },
    date:{

    }
  }));

export default function Login(props){
    const classes = useStyles();
    const myEventsList=[{
        start: new Date(),
        end: addDays(new Date(), 3),
        title: "Play"
      }]//backend

    return(
        <Paper className={classes.paper}>
            <Calendar
                className={bigCalendar}
                events={myEventsList}
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </Paper>
    );
}
