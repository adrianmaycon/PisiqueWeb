import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Listagem from './pages/Listagem';
import Cadastrar from './pages/Cadastro';
import { AuthProvider } from './auth/AuthContext';
import { RotaPrivada } from './auth/RotaPrivada';

function Routes() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/cadastro" component={Cadastrar} />
                <RotaPrivada exact path="/atendimento" component={Listagem} />
            </BrowserRouter>
        </AuthProvider>
    )
}

export default Routes;
