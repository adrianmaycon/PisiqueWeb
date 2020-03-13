import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect, Link } from "react-router-dom";
import app from "../../base.js";
import { AuthContext } from "../../Auth.js";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IconButton, Grid, TextField } from '@material-ui/core';
import './Css/styles.css';

import { Container, Body, Form, Button, ButtonSecundary, Title } from './styled'

const Login = ({ history }) => {
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
    <Container>
      <Body>
        <div style={{ width: '700px' }} class={`container ${active ? 'right-panel-active' : ''}`} >
          <div class="form-container sign-up-container">
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
                <Link href="/" onClick={() => setActive(false)}>
                  Já possui uma conta? Fazer login
                </Link>
              </Grid>
            </Form>
          </div>

          <div class="form-container sign-in-container">
            <Form noValidate onSubmit={handleLogin}>
              <Title size={40}>Login</Title>
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
              <Button type="submit" >Entrar</Button>
              <Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Link href="/" onClick={() => setActive(true)}>
                  Não possui uma conta? Inscrever-se
                </Link>
              </Grid>
            </Form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <Title size={50}>Pisiquê</Title>
                <p style={{ marginTop: 25, marginBottom: 25 }}>Para se manter conectado, faça login com suas informações pessoais</p>
                <ButtonSecundary onClick={() => setActive(false)}>Entrar na Conta</ButtonSecundary>
              </div>
              <div class="overlay-panel overlay-right">
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