import React, { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { IoMdArrowDropdown, IoMdArrowDropup, IoIosMenu } from "react-icons/io";

import Access from '../access';

import UsersService from '../../Services/UsersService';

import { authConfig } from '../../auth/config';
import { AuthContext } from '../../auth/AuthContext';

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import logoCor from '../../assets/images/logo-cor.svg';

import { Container, ButtonsContainer, LinksContainer, MenuContainer, Logo, MenuIcon } from './styled';
import classNames from 'classnames';

const NavBar = withRouter(({ openProps, history, simple }) => {
    const [logado, setLogado] = useState(false);
    const [userData, setUserData] = useState({});

    const [open, setOpen] = useState(false);
    const [openPopover, setOpenPopover] = useState(false);
    const [activeShadow, setActiveShadow] = useState(false);

    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        let cookies = new Cookies();

        if (openProps) {
            setOpen(true)
        }

        if (!!usuario) {
            setLogado(true)
            cookies.set('email', usuario.email, { path: '/' })
            console.log(usuario.email)

            UsersService.GetDataUser(usuario.email)
                .then(user => {
                    setUserData(user)

                    history.push(!user && '/choice')
                })
        } else {
            setLogado(false)
        }

    }, [usuario, history, openProps])

    let doc = document.documentElement;

    window.addEventListener('scroll', function () {
        let value = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight))

        if (value === 0) {
            setActiveShadow(false)
        } else {
            setActiveShadow(true)
        }
    })

    const DivPopover = () => (
        <div className="div-popover">
            <header>
                <img className="avatar" src={userData.avatar || 'https://firebasestorage.googleapis.com/v0/b/pisiqueapp.appspot.com/o/avatars%2Fuser.png?alt=media&token=120e160a-29e9-4fe4-82ad-830598d37e75'} alt="Icone Usuário" onClick={() => console.log(true)} />
                <span>Editar Perfil</span>
            </header>

            <main>
                <Link to="/dashboard">Painel</Link><br />
                <Link to="/dashboard">Histórico</Link><br />
                <Link to="/dashboard">Meus Livros</Link><br />
                <Link to="/" onClick={() => authConfig.auth().signOut()}>Sair</Link>
            </main>
        </div>
    )

    return (
        <Container shadowOn={activeShadow} simple={simple}>
            {open ? <Access close={() => setOpen(false)} /> : null}
            <div className='bar-sub-info'>
                <div className='max-cont-row'>
                    <a href="tel:+5585984015318">Ligue: +55 (85) 98401-5318</a>
                    <a href="/">Seja um colaborador nosso</a>
                </div>
            </div>
            <div id="app-bar" >
                <nav className="box-container">
                    <MenuIcon simple={simple} >
                        <IoIosMenu className="icon-menu" onClick={() => alert('Aloo')} />
                    </MenuIcon>

                    <div style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>
                        <Logo src={simple ? logoCor : logo} alt="" />
                    </div>

                    <MenuContainer simple={simple}>
                        <Link to="/" className="link">Inicial</ Link>
                        <Link to="/blog" className="link">Blog</ Link>
                        <Link to="/" className="link">Voluntariado</ Link>
                        <Link to="/sobre" className="link">Sobre</ Link>
                        <Link to="/" className="link" style={{ marginRight: 0 }}>Contato</ Link>
                    </MenuContainer>


                    {logado ?
                        <div>
                            <LinksContainer onClick={() => setOpenPopover(!openPopover)}>
                                <img className="icon-avatar" src={userData.avatar || 'https://firebasestorage.googleapis.com/v0/b/pisiqueapp.appspot.com/o/avatars%2Fuser.png?alt=media&token=120e160a-29e9-4fe4-82ad-830598d37e75'} alt="" />
                                <span className="nome">{userData.fullName && `${(userData.fullName).split(" ", 2).join(' ')}`}</span>
                                {openPopover ? <IoMdArrowDropup className="icon" /> : <IoMdArrowDropdown className="icon" />}
                            </LinksContainer>
                            {openPopover &&
                                <DivPopover />}
                        </div>
                        :
                        <ButtonsContainer simple={simple}>
                            <h1 className="signIn" onClick={() => { setOpen(true) }}>Entrar</h1>
                            <button type="button" className={classNames("signUp bnt-blocked")} disabled onClick={() => { setOpen(true) }}>Inscrever-se</button>
                        </ButtonsContainer>
                    }
                </nav>
            </div>
        </Container>
    )
})

export default NavBar;