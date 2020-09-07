import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Listagem from './pages/Listagem';
import RegisterPsi from './pages/Cadastro/registerPsi';
import RegisterUser from './pages/Cadastro/registerUser';
import RegisterAcad from './pages/Cadastro/registerAcad';
import RegisterPost from './pages/Blog/registerPost';
import Choices from './pages/Choices';
import { AuthProvider } from './auth/AuthContext';
import { RotaPrivada } from './auth/RotaPrivada';

function Routes() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/register-psi" component={RegisterPsi} />
                <Route exact path="/register-user" component={RegisterUser} />
                <Route exact path="/register-acad" component={RegisterAcad} />
                <Route exact path="/register-post" component={RegisterPost} />
                <RotaPrivada exact path="/atendimento" component={Listagem} />
                <RotaPrivada exact path="/choice" component={Choices} />
            </BrowserRouter>
        </AuthProvider>
    )
}

export default Routes;
