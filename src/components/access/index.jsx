import React, { useState, useCallback } from 'react';
import { Modal, Box } from './styled';
import { withRouter } from 'react-router-dom';
import logo from '../../assets/images/logo-instituto.png';
import { Button } from '../../assets/styles/styled';
import { IoCloseCircleOutline } from "react-icons/io5";
import { authConfig } from '../../auth/config';
import UsersService from '../../Services/UsersService';
import Input from '../common/Input';

const Access = withRouter(({ close, history }) => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [message, setMessage] = useState(false);
    const [errorMessageLogin, setErrorMessageLogin] = useState(false);

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
                        history.push(user ? '/dashboard' : '/dashboard')
                    })

                // setOpen(false)

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

    return (
        <Modal>
            <div className='access-row'>
                <Box>
                    <form id="login" onSubmit={handleLogin}>
                        <img className="logo-acess" src={logo} alt="logo instituto" />
                        {errorMessageLogin && <span>{message}</span>}
                        <Input
                            title={email}
                            type="email"
                            name="email"
                            label="Email"
                            placeholder="institutopisique@exemplo.com"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />

                        <Input
                            title={senha}
                            type="password"
                            name="password"
                            label="Senha"
                            placeholder="********"
                            value={senha}
                            onChange={(e) => { setSenha(e.target.value) }}
                        />

                        <Button type='submit'>Entrar</Button>
                    </form>
                </Box>

                <IoCloseCircleOutline className='close-access' onClick={close} />
            </div>
        </Modal>
    )
});

export default Access;