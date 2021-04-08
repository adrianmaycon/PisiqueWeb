import React from 'react';

import { Container } from './styled';

function Admin() {

    return (
        <Container>
            <form>

                <div className="segment">
                    <h1>Admin</h1>
                </div>

                <label>
                    <input type="text" placeholder="E-mail" />
                </label>
                <label>
                    <input type="password" placeholder="Senha" />
                </label>
                <button className="red" type="button"><i className="icon ion-md-lock"></i>Conecte-se</button>

                <div className="segment">
                    <button className="unit" type="button"><i className="icon ion-md-arrow-back"></i></button>
                    <button className="unit" type="button"><i className="icon ion-md-bookmark"></i></button>
                    <button className="unit" type="button"><i className="icon ion-md-settings"></i></button>
                </div>

                {/* <div className="input-group">
                    <label>
                        <input type="text" placeholder="Recuperar senha" />
                    </label>
                    <button className="unit" type="button"><i className="icon ion-md-search"></i></button>
                </div> */}

            </form>
        </Container>
    );
}

export default Admin;