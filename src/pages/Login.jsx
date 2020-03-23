import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import app from "../config/base";
import { AuthContext } from "../config/Auth";
import { SupervisedUserCircle, Facebook, LinkedIn, Close } from '@material-ui/icons';
import { IconButton, Grid, TextField, Backdrop, CircularProgress, Snackbar } from '@material-ui/core';
import './styles/StyleLogin.css';
import { Container, Body, Form, Button, ButtonSecundary, Title, Link } from './styles/StyleLogin.js'

const Login = ({ history }) => {

  const [active, setActive] = React.useState(false);
  const [info, setInfo] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  // React.useEffect(() => {
  //   setOpen(true);
  //   setTimeout(() => setOpen(false), 1000);
  // }, []);

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        if (email.value && password.value) {
          setOpen(true);
        }
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        setInfo(true)
        setOpen(false);
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
    <Container>
      <Backdrop style={{ zIndex: 200, color: '#fff' }} open={open} >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Body>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={info}
          autoHideDuration={6000}
          onClose={() => setInfo(false)}
          message="Atenção! Login ou Senha inválidos!"
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={() => setInfo(false)}>
                <Close fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
        <div style={{ width: '700px' }} className={`container ${active ? 'right-panel-active' : ''}`} >
          <div className="form-container sign-up-container">
            <Form>
              <Title size={40}>Criar Conta</Title>
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
              <Button onClick={handleRegister}>Cadastrar</Button>
              <Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Link onClick={() => setActive(false)}>
                  Já possui uma conta? Fazer login
                </Link>
              </Grid>
            </Form>
          </div>

          <div className="form-container sign-in-container">
            <Form noValidate onSubmit={handleLogin}>
              <Title size={40}>Login</Title>
              <Grid style={{ display: 'flex', width: '70%', justifyContent: 'space-around', marginBottom: 20, marginTop: 20 }}>
                <IconButton aria-label="delete" style={{ backgroundColor: '#3b5998', color: '#FFFFFF' }}>
                  <Facebook />
                </IconButton>
                <IconButton aria-label="delete" style={{ backgroundColor: '#1664af', color: '#FFFFFF' }}>
                  <SupervisedUserCircle />
                </IconButton>
                <IconButton aria-label="delete" style={{ backgroundColor: '#0077b5', color: '#FFFFFF' }}>
                  <LinkedIn />
                </IconButton>
              </Grid>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="emailLogin"
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
                id="passwordLogin"
                autoComplete="current-password"
              />
              <Button type="submit" >Entrar</Button>
              <Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Link onClick={() => setActive(true)}>
                  Não possui uma conta? Inscrever-se
                </Link>
              </Grid>
            </Form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <Title size={50}>Pisiquê</Title>
                <p style={{ marginTop: 25, marginBottom: 25 }}>Para se manter conectado, faça login com suas informações pessoais</p>
                <ButtonSecundary onClick={() => setActive(false)}>Entrar na Conta</ButtonSecundary>
              </div>
              <div className="overlay-panel overlay-right">
                <Title size={50}>Pisiquê</Title>
                <p style={{ marginTop: 25, marginBottom: 25 }}>Digite seus dados pessoais e comece a jornada conosco</p>
                <ButtonSecundary onClick={() => setActive(true)}>Inscrever-se</ButtonSecundary>
              </div>
            </div>
          </div>
        </div>
      </Body>
    </Container>
  );
}

export default withRouter(Login);