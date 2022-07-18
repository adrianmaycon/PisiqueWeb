import React, { useState, useEffect, useContext } from 'react';

import { FaCaretDown, FaCaretUp, FaUserPlus, FaLaptop, FaFileAlt, FaFileContract, FaUsers, FaRegAddressCard } from "react-icons/fa";
import { Link } from 'react-router-dom';

import RegisterUser from '../../../../components/RegisterUser';
import RegisterHuman from '../../../../components/RegisterHuman';
import RegisterSeniors from '../../../../components/RegisterSeniors';
import ListHuman from '../../../../components/ListHuman';
import UsersService from '../../../../Services/UsersService';
import { AuthContext } from '../../../../auth/AuthContext';
import { authConfig } from '../../../../auth/config';
import { Container } from './styled';
import Book from '../../../../components/book';

// import ModalAvatars from '../../../../components/common/ModalAvatars'

function Painel() {

    const [open, setOpen] = useState(false)
    const [openUser, setOpenUser] = useState(false)
    const [openSeniors, setOpenSeniors] = useState(false)
    const [openListHuman, setOpenListHuman] = useState(false)
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
                {/* <Link to="/dashboard">Painel</Link>
                <Link to="/dashboard">Histórico</Link>
                <Link to="/dashboard">Meus Livros</Link> */}
                <Link to="/" onClick={() => authConfig.auth().signOut()}>Sair</Link>
            </main>
        </div>
    )

    return (
        <>
            {open ? <RegisterHuman close={() => setOpen(false)} /> : null}
            {openUser ? <RegisterUser close={() => setOpenUser(false)} /> : null}
            {openSeniors ? <RegisterSeniors close={() => setOpenSeniors(false)} /> : null}
            {openListHuman ? <ListHuman close={() => setOpenListHuman(false)} /> : null}
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

                    <h3 style={{ marginTop: 40, marginBottom: 20 }}>Acesso Rápido</h3>

                    <div className='div-access-flash'>
                        <button type="button" className='bnt-access-flash' onClick={() => setOpenListHuman(true)}><FaFileAlt className='icon' /> Listagem de Pessoas</button>
                        <button type="button" className='bnt-access-flash' onClick={() => setOpen(true)}><FaFileAlt className='icon' /> Listagem de Idosos</button>
                        <button type="button" className='bnt-access-flash' onClick={() => setOpen(true)}><FaFileAlt className='icon' /> Listagem de Famílias</button>
                        <button type="button" className='bnt-access-flash' onClick={() => setOpen(true)}><FaFileContract className='icon' /> Lista de Presença</button>
                        <button type="button" className='bnt-access-flash' onClick={() => setOpen(true)}><FaUserPlus className='icon' /> Cadastro de Pessoa</button>
                        <button type="button" className='bnt-access-flash' onClick={() => setOpenUser(true)}><FaLaptop className='icon' /> Cadastro de Usuario</button>
                        <button type="button" className='bnt-access-flash' onClick={() => setOpenSeniors(true)}><FaRegAddressCard className='icon' /> Cadastro de Idosos</button>
                        <button type="button" className='bnt-access-flash' onClick={() => setOpenUser(true)}><FaUsers className='icon' /> Cadastro de Famílias</button>
                    </div>

                    {/* <Link to="/registrar"><button type="button" className='bnt-access-flash'>Cadastro de Pessoa</button></Link> */}

                    <Book />
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