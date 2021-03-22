import React from 'react';
import './assets/styles/global.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Listagem from './pages/Listagem';
import RegisterPsi from './pages/Cadastro/registerPsi';
import RegisterUser from './pages/Cadastro/registerUser';
import RegisterAcad from './pages/Cadastro/registerAcad';
import RegisterPost from './pages/Blog/registerPost';
import Choices from './pages/Choices';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './auth/AuthContext';
import { RotaPrivada } from './auth/RotaPrivada';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Route exact path="/" component={Inicio} />
        <RotaPrivada exact path="/register-psi" component={RegisterPsi} />
        <RotaPrivada exact path="/register-user" component={RegisterUser} />
        <RotaPrivada exact path="/register-acad" component={RegisterAcad} />
        <RotaPrivada exact path="/register-post" component={RegisterPost} />
        <RotaPrivada exact path="/dashboard" component={Dashboard} />
        <RotaPrivada exact path="/atendimento" component={Listagem} />
        <RotaPrivada exact path="/choice" component={Choices} />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
