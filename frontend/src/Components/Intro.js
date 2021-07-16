import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Card } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  intro: {
    fontFamily: 'fantasy',
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  box: {
    marginTop: '15%',
    marginLeft: "20%",
    marginRight: "20%",
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        <h2 className={classes.intro}>Hello~~</h2>
        <h2 className={classes.intro}>My name is Yen Chen!!</h2>
        <h2 className={classes.intro}>I am a NTU CSIE student XD</h2>
        <h2 className={classes.intro}>I will start my exchanging life in Sweden in August!!</h2>
        <h2 className={classes.intro}>Nice to meet you :))))))))</h2>
      </Box>    
    </div>
  );
};