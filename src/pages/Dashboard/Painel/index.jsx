import React, { useState, useEffect, useContext } from 'react';

import { FaCaretDown, FaCaretUp } from "react-icons/fa";

import UsersService from '../../../services/UsersService';
import { AuthContext } from '../../../auth/AuthContext';
import { authConfig } from '../../../auth/config';
import './styles.css';

function Painel() {

    const [openConfig, setOpenConfig] = useState(false)
    const [dataUser, setDataUser] = useState({})

    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        if (!!usuario) {
            UsersService.GetDataUser(usuario.email)
                .then(user => {
                    console.log(user)
                    setDataUser(user)
                })
        }

    }, [usuario])

    const DivPopover = () => (
        <div className="div-popover">
            <main>
                <a href="/dashboard">Painel</a>
                <a href="/dashboard">Histórico</a>
                <a href="/dashboard">Meus Livros</a>
                <a href="/" onClick={() => authConfig.auth().signOut()}>Sair</a>
            </main>
        </div>
    )

    return (
        <div className="container-painel">
            <section id="sectionPrimary">
                <header>
                    <h1 id="name">Olá {String(dataUser.name).split(" ", 1).join(' ')}, seja bem vindo! </h1>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setOpenConfig(!openConfig)}>
                            <img src={dataUser.avatar} alt="Abrir configuração de perfil" />
                            {openConfig ? <FaCaretUp /> : <FaCaretDown />}
                        </div>
                        {openConfig && <DivPopover />}
                    </div>
                </header>
            </section>

            <section id="sectionSecundary">
                <header>
                    <img src={dataUser.avatar} alt="Foto de perfil do usuario" />

                    <h1>{String(dataUser.name).split(" ", 2).join(' ')}</h1>
                    <h4>{dataUser.email}</h4>
                </header>
            </section>
        </div>
    )
}

export default Painel;