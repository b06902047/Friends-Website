import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    form: {
        fontFamily: 'sansserif',
        textAlign: 'center',
        maxWidth: 330,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        background: "white",
        marginTop: "auto",
    },
    paper: {
        fontFamily: 'sansserif',
        textAlign: 'center',
        maxWidth: 330,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        background: "white",
        padding: 20,
    },
    input: {
        margin: "auto",
        borderColor: 'green',
        variant: "outlined",
    },
    input_label:{
        margin: "auto",
        marginTop: 30,
        fontFamily: 'fantasy',
        fontStyle: 'normal',
        fontWeight: "bold",
        fontDisplay: 'swap',
        fontSize: 20,
    },
    button:{
        marginTop: '20%',
        variant: "outlined",
        fontFamily: 'fantasy',
        fontStyle: 'normal',
        fontWeight: "bold",
        fontDisplay: 'swap',
        borderBlock: "3px solid rgb(212, 212, 212)",
        borderLeft: "3px solid rgb(212, 212, 212)",
        borderRight: "3px solid rgb(212, 212, 212)",
    }
  }));

export default function Login(props){
    const classes = useStyles();
    const [username, setUsernameInput] = useState("");
    const [password, setPasswordInput] = useState("");
    const [status, setStatus] = useState("");

    const handleUsernameInputChange = (e) => {
        setUsernameInput(e.target.value);
    }
    
    const handlePasswordInputChange = (e) => {
        setPasswordInput(e.target.value);
    }

    const handleLoginFormSubmit =  async () => {
        setUsernameInput("");
        setPasswordInput("");
        props.setLoggedIn(true)
    }

    return(
        <Paper className={classes.paper}>
            <InputLabel className={classes.input_label}>USERNAME</InputLabel>
            <TextField className={classes.input} value={username} onChange={handleUsernameInputChange}/>
            <InputLabel className={classes.input_label}>PASSWORD</InputLabel>
            <TextField className={classes.input} value={password} type="password" onChange={handlePasswordInputChange}/>
            <Button type="submit" className={classes.button} onClick={handleLoginFormSubmit}> LOGIN </Button>
        </Paper>
    );
}
