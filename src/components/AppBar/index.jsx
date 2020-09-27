import React, { useState, useCallback, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { Modal, Input } from "../../assets/styles/components";

import { FaTimes, FaExclamationCircle, FaChevronCircleRight } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import './styles.css';

import UsersService from '../../services/UsersService';

import { authConfig } from '../../auth/config';
import { AuthContext } from '../../auth/AuthContext';

const AppBar = withRouter(({ openProps, close, history }) => {
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
                <img className="avatar" src={userData.avatar} alt="Icone Usuário" onClick={() => console.log(true)} />
                <span>Editar Perfil</span>
            </header>

            <main>
                <a href="/dashboard">Painel</a>
                <a href="/dashboard">Histórico</a>
                <a href="/dashboard">Meus Livros</a>
                <a href="/" onClick={() => authConfig.auth().signOut()}>Sair</a>
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
                                            Entrar na kickante
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
        <div style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>
            <Access />
            <div id="app-bar" >
                <nav>
                    <div id="menu">
                        <a href="/">Página inicial</a>
                        <a href="/">Blog</a>
                        <a href="/">Sobre nós</a>
                        <a href="/">Contato</a>
                    </div>
                    <FaChevronCircleRight className="icon-menu" />
                    {logado ?
                        <div>
                            <button type="button" className="click" onClick={() => setOpenPopover(!openPopover)}>
                                <span>{userData.name && `Olá, ${(userData.name).split(" ", 1).join(' ')}`} {openPopover ? <IoMdArrowDropup className="icon" /> : <IoMdArrowDropdown className="icon" />}</span>
                            </button>
                            {openPopover &&
                                <DivPopover />}
                        </div>
                        :
                        <button type="button" id="login" onClick={() => setOpen(true)}>Entrar no sistema</button>
                    }
                </nav>
            </div>
        </div>
    )
})

export default AppBar;