import React from 'react';
import './Components/Css/styles.css';

export default function SignInSide() {

  return (
    <body>
      <div class="container" id="container">
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
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button>Cadastrar</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Login</h1>
            <div class="social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>ou use sua conta</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <a href="#">Esqueceu sua senha?</a>
            <button>Entrar</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Grupo Pisiquê</h1>
              <p>Para se manter conectado, faça login com suas informações pessoais</p>
              <button class="ghost" id="signIn">Entrar na Conta</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Grupo Pisiquê</h1>
              <p>Digite seus dados pessoais e comece a jornada conosco</p>
              <button class="ghost" id="signUp">Inscrever-se</button>
            </div>
          </div>
        </div>
      </div>
    </body >
  )
}
