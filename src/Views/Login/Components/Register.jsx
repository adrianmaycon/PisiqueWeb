import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './Css/styles.css';

export default function Register() {
  const classes = useStyles();

  const handleClickRegister = () => {
    const register = document.getElementById('register');
    register.classList.toggle('is-nav-open-register')
  }

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5" style={{ marginTop: 300 }}>
        Fazer Cadastro
          </Typography>
      <form className={classes.form} noValidate>
        <Grid style={{display: 'flex', justifyContent: 'space-between'}}>
          <TextField
            id="outlined-name"
            label="Nome"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Sobrenome"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Confirmar Email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Confirmar Senha"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Cadastrar
            </Button>
        <Grid container>
          <Grid item xs>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" onClick={() => handleClickRegister()}>
              Fechar
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    marginBottom: 80,
  },
  textField: {
    width: '49%',
  },
}));