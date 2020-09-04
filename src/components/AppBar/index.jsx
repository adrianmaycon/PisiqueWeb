import React, { useState, useCallback, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { Modal, Input } from "../../assets/styles/components";

import { FaTimes, FaExclamationCircle } from "react-icons/fa";
import './styles.css';

import { authConfig } from '../../auth/config';
import { AuthContext } from '../../auth/AuthContext';

const AppBar = withRouter(({ history }) => {
    const [logado, setLogado] = useState(false);

    const [conection, setConection] = useState(true);

    const [open, setOpen] = useState(false);

    const [openLogin, setOpenLogin] = useState(true);
    const [openCreate, setOpenCreate] = useState(false);
    const [recoverPassword, setRecoverPassword] = useState(false);

    const [erroConfirmPassword, setErroConfirmPassword] = useState(false);
    const [errorMessageLogin, setErrorMessageLogin] = useState(false);

    const [message, setMessage] = useState(false);

    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        if (!!usuario) {
            setLogado(true)
        } else {
            setLogado(false)
        }
    }, [usuario])

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
                history.push('/atendimento')
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
                    await authConfig
                        .auth()
                        .createUserWithEmailAndPassword(email.value, password.value);
                    history.push('/')
                } catch (error) {
                    console.log('ERRO: ', error)
                }
            }            
        },
        [history],
    );

    function handleRecoverPassword(e) {
        e.preventDefault();
    };

    const Access = () => (
        <Modal open={open}>
            <div className="container-modal">
                <header>
                    <FaTimes id="closeIcon" onClick={() => setOpen(false)} />
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
        <div>
            <Access />
            <div id="app-bar" >
                <div id="container">
                    <a href="/">Página inicial</a>
                    {logado ?
                        <button type="button" id="login" onClick={() => authConfig.auth().signOut()}>Deslogar</button>
                        :
                        <button type="button" id="login" onClick={() => setOpen(true)}>Entrar no sistema</button>
                    }
                </div>
            </div>
        </div>
    )
})

export default AppBar;