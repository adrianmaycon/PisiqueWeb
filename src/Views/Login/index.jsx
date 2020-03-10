import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect, Link } from "react-router-dom";
import app from "../../base.js";
import { AuthContext } from "../../Auth.js";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IconButton, Grid, TextField, Button } from '@material-ui/core';
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

  const handleRegister = () => {
    console.log('Cadastro')
  }

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Grid className={classes.body}>
      <Grid className={classes.central}>
        <Grid style={{ width: 700 }} class={`container ${active ? 'right-panel-active' : ''}`} id="container">
          <Grid class="form-container sign-up-container">
            <form className={classes.form} >
              <h1 class="sub">Criar Conta</h1>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                placeholder="Escolha seu email"
                name="email"
                autoComplete="email"
                autoFocus
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                placeholder="Escolha sua chave de acesso"
                InputLabelProps={{ shrink: true }}
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
                placeholder="Confirme sua chave de acesso"
                InputLabelProps={{ shrink: true }}
                fullWidth
                name="password"
                label="Confirmar Senha"
                type="password"
                id="passwordConfirme"
                autoComplete="current-password"
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleRegister}
              >
                Cadastrar
              </Button>
              <Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Link onClick={() => setActive(false)}>
                  {" Já possui uma conta? Fazer login"}
                </Link>
              </Grid>
            </form>
          </Grid>

          <Grid class="form-container sign-in-container">
            <form className={classes.form} noValidate onSubmit={handleLogin}>
              <h1 class="sub">Login</h1>
              <Grid style={{ display: 'flex', width: '70%', justifyContent: 'space-around', marginBottom: 20, marginTop: 20 }}>
                <IconButton aria-label="delete" style={{ backgroundColor: '#3b5998', color: '#FFFFFF' }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton aria-label="delete" style={{ backgroundColor: '#1664af', color: '#FFFFFF' }}>
                  <SupervisedUserCircleIcon />
                </IconButton>
                <IconButton aria-label="delete" style={{ backgroundColor: '#0077b5', color: '#FFFFFF' }}>
                  <LinkedInIcon />
                </IconButton>
              </Grid>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                placeholder="Digite seu email"
                name="email"
                autoComplete="email"
                autoFocus
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                placeholder="Digite sua chave de acesso"
                InputLabelProps={{ shrink: true }}
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Entrar
              </Button>
              <Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Link onClick={() => setActive(true)}>
                  {" Não possui uma conta? Inscrever-se"}
                </Link>
              </Grid>
            </form>
          </Grid>
          <Grid class="overlay-container">
            <Grid class="overlay">
              <Grid class="overlay-panel overlay-left">
                <h1 class="pisique">Pisiquê</h1>
                <p style={{ marginTop: 25, marginBottom: 25 }}>Para se manter conectado, faça login com suas informações pessoais</p>
                <button style={{ borderRadius: 30 }} class="ghost" id="signIn" onClick={() => setActive(false)}>Entrar na Conta</button>
              </Grid>
              <Grid class="overlay-panel overlay-right">
                <h1 class="pisique">Pisiquê</h1>
                <p style={{ marginTop: 25, marginBottom: 25 }}>Digite seus dados pessoais e comece a jornada conosco</p>
                <button style={{ borderRadius: 30 }} class="ghost" id="signUp" onClick={() => setActive(true)}>Inscrever-se</button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  body: {
    // backgroundImage: 'url(https://raw.githubusercontent.com/grupopisique/Template/master/src/assets/img/capa.png)',
    backgroundImage: 'url(https://conteudo.imguol.com.br/c/noticias/26/2019/12/20/tecnologia-dados-saude-health-tech-digital-digitalizacao-1576876624906_v2_1920x1280.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  },
  central: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: 'Montserrat, sans-serif',
    height: '98.3vh',
  },
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
    borderRadius: '20px',
    border: '1px solid #5c7bd7',
    backgroundColor: '#5c7bd7',
    color: '#FFFFFF',
    fontSize: '12px',
    marginTop: 15,
    width: 200,
    fontWeight: 'bold',
    padding: '12px 45px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'transform 80ms ease-in',
  },
}));

export default withRouter(Login);