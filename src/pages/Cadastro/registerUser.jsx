import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import { FaUser } from "react-icons/fa";
import './styles.css';

const RegisterUser = withRouter(({ history }) => {

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');

    function handleCreateClass(e) {
        e.preventDefault();

    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer fazer parte do Grupo Pisiquê!"
                description="O primeiro passo é preencher esse formulário de inscrição"
                link="/choice"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados <FaUser /></legend>

                        <Input
                            required
                            name="name"
                            label="Nome Completo"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />

                        <Input
                            required
                            name="avatar"
                            label="Avatar - (Nickname)"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />

                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                        <button type="submit">
                            Salvar cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </div >
    )
})

export default RegisterUser;