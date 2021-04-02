import React, { useState, useCallback, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { Modal, Input } from "../../assets/styles/components";

import { FaTimes, FaExclamationCircle } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup, IoIosMenu } from "react-icons/io";

import UsersService from '../../services/UsersService';

import { authConfig } from '../../auth/config';
import { AuthContext } from '../../auth/AuthContext';

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import logoCor from '../../assets/images/logo-cor.svg';

import { Container, ButtonsContainer, LinksContainer, MenuContainer, Logo } from './styled';

const NavBar = withRouter(({ openProps, close, history, simple }) => {
    const [logado, setLogado] = useState(false);

    const [conection, setConection] = useState(true);

    const [userData, setUserData] = useState({});

    const [open, setOpen] = useState(false);
    const [openPopover, setOpenPopover] = useState(false);

    const [openLogin, setOpenLogin] = useState(true);
    const [openCreate, setOpenCreate] = useState(false);
    const [recoverPassword, setRecoverPassword] = useState(false);

    const [erroConfirmPassword, setErroConfirmPassword] = useState(false);
    const [errorMessageLogin, setErrorMessageLogin] = useState(false);
    const [errorMessageCreate, setErrorMessageCreate] = useState(false);

    const [activeShadow, setActiveShadow] = useState(false);

    const [message, setMessage] = useState(false);

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
                    console.log(user)
                    setUserData(user)

                    history.push(!user && '/choice')
                })
        } else {
            setLogado(false)
        }

    }, [usuario, history, openProps])

    let doc = document.documentElement

    console.log(simple);

    window.addEventListener('scroll', function () {
        let value = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight))

        if (value === 0) {
            setActiveShadow(false)
        } else {
            setActiveShadow(true)
        }
        // console.log(value);
    })

    function visibleBox(value) {
        if (value === 1) {
            setOpenLogin(true)
            setOpenCreate(false)
        }

        if (value === 2) {
            setOpenLogin(false)
            setOpenCreate(true)
        }
    };

    function handleOpen() {
        if (recoverPassword) {
            setOpenLogin(true);
            setOpenCreate(false)
            setRecoverPassword(false);
        } else {
            setOpenLogin(false);
            setOpenCreate(false)
            setRecoverPassword(true);
        }
    };

    const handleLogin = useCallback(
        async (event) => {
            event.preventDefault();

            const { email, password } = event.target.elements;

            try {
                setErrorMessageLogin(false)
                await authConfig
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);

                UsersService.GetDataUser(email.value)
                    .then(user => {
                        history.push(user ? '/dashboard' : '/choice')
                    })

                setOpen(false)

            } catch (error) {
                setErrorMessageLogin(true)

                if (error.code === "auth/wrong-password") {
                    setMessage('Senha inválida')
                }

                if (error.code === "auth/user-not-found") {
                    setMessage('Usuário não cadastrado')
                }
                console.log(error)
            }
        },
        [history],
    );

    const handleRegister = useCallback(
        async (event) => {
            event.preventDefault();

            const { email, password, confirmPassword } = event.target.elements;

            if (password.value !== confirmPassword.value) {
                setErroConfirmPassword(true)
            } else {
                setErroConfirmPassword(false)

                try {
                    setErrorMessageCreate(false)

                    await authConfig
                        .auth()
                        .createUserWithEmailAndPassword(email.value, password.value);
                    history.push('/')
                } catch (error) {

                    if (error.code === 'auth/email-already-in-use') {
                        setErrorMessageCreate(true)
                        setMessage("Email ja cadastrado")
                    } else {
                        setErrorMessageCreate(false)
                    }

                }
            }
        },
        [history],
    );

    function handleRecoverPassword(e) {
        e.preventDefault();
    };

    const DivPopover = () => (
        <div className="div-popover">
            <header>
                <img className="avatar" src={userData.avatar || 'https://firebasestorage.googleapis.com/v0/b/pisiqueapp.appspot.com/o/avatars%2Fuser.png?alt=media&token=120e160a-29e9-4fe4-82ad-830598d37e75'} alt="Icone Usuário" onClick={() => console.log(true)} />
                <span>Editar Perfil</span>
            </header>

            <main>
                <Link to="/dashboard">Painel</Link>
                <Link to="/dashboard">Histórico</Link>
                <Link to="/dashboard">Meus Livros</Link>
                <Link to="/" onClick={() => authConfig.auth().signOut()}>Sair</Link>
            </main>
        </div>
    )


    const Access = () => (
        <Modal open={open}>
            <div className="container-modal">
                <header>
                    <FaTimes id="closeIcon" onClick={() => { setOpen(false); close() }} />
                </header>

                <main>
                    <h1 id="title">{recoverPassword ? 'Recuperar senha' : openLogin ? 'Fazer Login' : 'Criar conta'}</h1>

                    {openCreate || openLogin ?
                        <div id="division">

                            {/* Fazer Login */}

                            <form id="login" onSubmit={handleLogin}>
                                {openLogin ?
                                    <div>
                                        <label>Acesse com email e senha</label>

                                        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 5 }}>
                                            {errorMessageLogin && <span><FaExclamationCircle id="iconError" />{message}</span>}
                                        </div>

                                        <Input
                                            required
                                            width={'264px'}
                                            height={'40px'}
                                            marginTop={7}
                                            placeholder='E-mail'
                                            type="email"
                                            name="email"
                                        />

                                        <Input
                                            required
                                            width={'264px'}
                                            height={'40px'}
                                            marginTop={10}
                                            marginBottom={10}
                                            placeholder='Senha'
                                            type="password"
                                            name="password"
                                        />

                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <input checked={conection} onChange={(e) => e.target.checked ? setConection(true) : setConection(false)} type="checkbox" style={{ marginRight: 10 }} />
                                            <label>Mantenha-me conectado</label>
                                        </div>

                                        <button type="submit" className="submit">
                                            Acessar Conta
                                        </button>
                                    </div>
                                    :
                                    <div>
                                        <p className="description">Ja tem uma conta? Faça login!</p>

                                        <button type="button" className="off" onClick={() => visibleBox(1)}>
                                            Entrar no Pisiquê
                                        </button>
                                    </div>
                                }

                            </form>

                            {/* Criar conta */}

                            <form id="create" onSubmit={handleRegister}>
                                {openCreate ?
                                    <div>
                                        <label>Cadastre-se com email e senha</label>

                                        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 5 }}>
                                            {errorMessageCreate && <span><FaExclamationCircle id="iconError" />{message}</span>}
                                        </div>

                                        <Input
                                            required
                                            width={'264px'}
                                            height={'40px'}
                                            marginTop={7}
                                            placeholder='E-mail'
                                            type="email"
                                            name="email"
                                        />


                                        <Input
                                            required
                                            width={'264px'}
                                            height={'40px'}
                                            marginTop={10}
                                            marginBottom={10}
                                            placeholder='Senha'
                                            type="password"
                                            name="password"
                                        />

                                        <Input
                                            required
                                            width={'264px'}
                                            height={'40px'}
                                            marginTop={10}
                                            marginBottom={10}
                                            placeholder='Confirmar Senha'
                                            type="password"
                                            name="confirmPassword"
                                        />

                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            {erroConfirmPassword && <span> As senhas informadas não são iguais.</span>}
                                        </div>

                                        <button type="submit" className="submit">
                                            Criar Conta
                                        </button>
                                    </div> :
                                    <div>
                                        <p className="description">Não tem uma conta?</p>

                                        <button type="button" className="off" onClick={() => visibleBox(2)}>
                                            Criar conta
                                    </button>
                                    </div>
                                }
                            </form>
                        </div>
                        :

                        // Recuperar Senha

                        <form id="recover" onSubmit={handleRecoverPassword}>
                            <label>Nome de usuário ou endereço de e-mail</label>

                            <Input
                                required
                                width={'100%'}
                                height={'40px'}
                                marginTop={7}
                                placeholder='E-mail'
                                type='email'
                                name="email"
                            />

                            <button type="submit" className="submit">
                                Recuperar Senha
                            </button>
                        </form>
                    }
                </main>

                <footer>
                    {recoverPassword ? <p onClick={handleOpen}>Voltar para login</p> : <p onClick={handleOpen}>Não consegue acessar sua conta? Esqueceu a senha?</p>}
                </footer>
            </div>
        </Modal >
    )

    return (
        <Container shadowOn={activeShadow} simple={simple}>
            <Access />
            <div id="app-bar" >
                <nav className="box-container">
                    <IoIosMenu className="icon-menu" onClick={() => alert('Aloo')} />

                    <div style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>
                        <Logo src={simple ? logoCor : logo} alt="" />
                    </div>

                    <MenuContainer simple={simple}>
                        <Link to="/" className="link">Inicial</ Link>
                        <Link to="/" className="link">Sobre nós</ Link>
                        <Link to="/blog" className="link">Blog</ Link>
                        <Link to="/" className="link">Tutoriais</ Link>
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
                            <h1 className="signIn" onClick={() => { setOpen(true); visibleBox(1) }}>Entrar</h1>
                            <button type="button" className="signUp" onClick={() => { setOpen(true); visibleBox(2) }}>Inscrever-se</button>
                        </ButtonsContainer>
                    }
                </nav>
            </div>
        </Container>
    )
})

export default NavBar;