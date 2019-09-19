import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Logar from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Recover from './Components/Recover.jsx';
import Logo from '../../assets/img/logo.png';
import './Components/Css/styles.css';

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img
            src={Logo}
            alt="icon"
            className={classes.imgLogo}
          />
          <Logar />
          <Grid id="wrapper" className="wrapper">
            <Grid className="nav">
              <Recover />
            </Grid>
          </Grid>
          <Grid id="register" className="register">
            <Grid className="nav">
              <Register />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 100,
  },
  paper: {
    position: 'relative',
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 1,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#5767c2',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  imgLogo: {
    width: 180,
    zIndex: 90,
  },
}));