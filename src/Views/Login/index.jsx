import React from 'react';
import { CssBaseline, Paper, Grid } from '@material-ui/core'
import { Route } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Logar from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Logo from '../../assets/img/logo.png';
import './Components/Css/styles.css';

export default function SignInSide() {
  const classes = useStyles();

  const routes = [
    {
      path: "/login",
      exact: true,
      sidebar: () => <div>Login</div>,
      main: () => <Logar />
    },
    {
      path: `/register`,
      exact: true,
      sidebar: () => <div>Resgitrar</div>,
      main: () => <Register />
    }
  ];

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
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
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
    // backgroundImage: 'url(http://2.bp.blogspot.com/-eFkxgztEHBM/VrJHNCJyFGI/AAAAAAABK2M/oVMwBBYfNr0/s1600/3000x2000%2B%25282%2529.jpg)',
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
  imgLogo: {
    width: 180,
    zIndex: 90,
  },
}));