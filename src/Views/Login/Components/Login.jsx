import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect, Link } from "react-router-dom";
import app from "../../../base.js";
import { AuthContext } from "../../../Auth.js";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './Css/styles.css';

const Login = ({ history }) => {
  const classes = useStyles();

  const [active, setActive] = React.useState(false);
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert('Login ou Senha inválidos!');
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <body>
      <div>
        <div class={`container ${active ? 'right-panel-active' : ''}`} id="container">
          <div class="form-container sign-up-container">
            <form action="#">
              <h1>Criar Conta</h1>
              <div class="social-container">
                <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
              </div>
              <span>ou use seu email para registro</span>
              <input type="text" placeholder="Nome" />
              <input style={{ marginTop: 5 }} type="email" placeholder="Email" />
              <input style={{ marginTop: 5 }} type="password" placeholder="Senha" />
              <button style={{ marginTop: 10, borderRadius: 30 }}>Cadastrar</button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form noValidate onSubmit={handleLogin}>
              <h1>Login</h1>
              <div class="social-container">
                <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
              </div>
              <span>ou use sua conta</span>
              <input type="email" placeholder="Email" />
              <input style={{ marginTop: 5 }} type="password" placeholder="Senha" />
              <a href="#">Esqueceu sua senha?</a>
              <button style={{ borderRadius: 30 }}>Entrar</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Pisiquê</h1>
                <p>Para se manter conectado, faça login com suas informações pessoais</p>
                <button style={{ borderRadius: 30 }} class="ghost" id="signIn" onClick={() => setActive(false)}>Entrar na Conta</button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Pisiquê</h1>
                <p>Digite seus dados pessoais e comece a jornada conosco</p>
                <button style={{ borderRadius: 30 }} class="ghost" id="signUp" onClick={() => setActive(true)}>Inscrever-se</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>

    // <div className={classes.paper}>
    //   <Typography component="h1" variant="h5">
    //     Login
    //   </Typography>
    //   <form className={classes.form} noValidate onSubmit={handleLogin}>
    //     <TextField
    //       variant="outlined"
    //       margin="normal"
    //       required
    //       fullWidth
    //       id="email"
    //       label="Email"
    //       placeholder="Digite seu email"
    //       name="email"
    //       autoComplete="email"
    //       autoFocus
    //     />
    //     <TextField
    //       variant="outlined"
    //       margin="normal"
    //       required
    //       fullWidth
    //       name="password"
    //       label="Senha"
    //       type="password"
    //       id="password"
    //       autoComplete="current-password"
    //     />
    //     <Button
    //       type="submit"
    //       fullWidth
    //       variant="contained"
    //       color="primary"
    //       className={classes.submit}
    //     >
    //       Entrar
    //     </Button>
    //     <Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
    //       <Link to="/register">
    //         {" Não possui uma conta? Inscrever-se"}
    //       </Link>
    //     </Grid>
    //   </form>
    // </div>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'relative',
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 1,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default withRouter(Login);