import React, { useState, useEffect, useContext } from 'react';

import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

import UsersService from '../../../../Services/UsersService';
import { AuthContext } from '../../../../auth/AuthContext';
import { authConfig } from '../../../../auth/config';
import { Container } from './styled';

// import ModalAvatars from '../../../../components/common/ModalAvatars'

function Painel() {

    const [openConfig, setOpenConfig] = useState(false)
    const [dataUser, setDataUser] = useState({})

    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        if (!!usuario) {
            UsersService.GetDataUser(usuario.email)
                .then(user => {
                    // console.log(user)
                    setDataUser(user)
                })
        }

    }, [usuario])

    const DivPopover = () => (
        <div className="div-popover">
            <main>
                <Link to="/dashboard">Painel</Link>
                <Link to="/dashboard">Histórico</Link>
                <Link to="/dashboard">Meus Livros</Link>
                <Link to="/" onClick={() => authConfig.auth().signOut()}>Sair</Link>
            </main>
        </div>
    )

    return (
        <>
            {/* <ModalAvatars /> */}
            <Container>
                <section id="sectionPrimary">
                    <header>
                        <h1 id="name">Olá {String(dataUser.fullName).split(" ", 2).join(' ')}, seja bem vindo! </h1>

                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setOpenConfig(!openConfig)}>
                                <img src={dataUser.avatar || 'https://firebasestorage.googleapis.com/v0/b/pisiqueapp.appspot.com/o/avatars%2Fuser.png?alt=media&token=120e160a-29e9-4fe4-82ad-830598d37e75'} alt="Abrir configuração de perfil" />
                                {openConfig ? <FaCaretUp /> : <FaCaretDown />}
                            </div>
                            {openConfig && <DivPopover />}
                        </div>
                    </header>

                    <div className="alert-info">
                    </div>

                    <h3 style={{ marginTop: 20, marginBottom: 10 }}>Acesso Rápido</h3>

                    <Link to="/registrar"><button type="button" className='bnt-access-flash'>Cadastro de Pessoa</button></Link>
                </section>

                <section id="sectionSecundary">
                    <header>
                        <img src={dataUser.avatar || 'https://firebasestorage.googleapis.com/v0/b/pisiqueapp.appspot.com/o/avatars%2Fuser.png?alt=media&token=120e160a-29e9-4fe4-82ad-830598d37e75'} alt="Foto de perfil do usuario" />

                        <h1>{String(dataUser.fullName).split(" ", 2).join(' ')}</h1>
                        <h4>{dataUser.email}</h4>

                    </header>
                </section>
            </Container>
        </>
    )
}

export default Painel;