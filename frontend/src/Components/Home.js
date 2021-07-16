import myphoto from './photograph.png';
import Intro from './Intro';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    photo: {
      marginTop: '10%',
      borderRadius: '100%',
      marginLeft: "20%",
      marginRight: "10%",
      width: '80%',
    },
  }));

function Home() {
    const classes = useStyles();
    return (
        <>
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={4}>
                <img src={myphoto} alt="yen chen's photograph" className={classes.photo}/>
            </Grid>
            <Grid item xs={8}>
              <Intro/>
            </Grid>
        </Grid>
        </>
    );
  }
  
  
  export default Home;