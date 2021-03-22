import React, { useState, useEffect, useContext } from 'react';
import warningIcon from '../../../assets/images/icons/warning.svg';
import { AuthContext } from '../../../auth/AuthContext';
import { withRouter } from 'react-router-dom';
import PageHeader from '../../../components/PageHeader';
import MasksService, { mCPF } from '../../../services/masksService';
import Input from '../../../components/Input';
import { FaUser } from "react-icons/fa";
import { Container } from './styled';

const RegisterUser = withRouter(({ history }) => {

    const [errorCep, setErrorCep] = useState(false);

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [nickName, setNickName] = useState('');
    const [end, setEnd] = useState('');
    const [num, setNum] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [cep, setCep] = useState('');
    const [pais, setPais] = useState('Brasil');
    
    const [errorCpf, setErrorCpf] = useState(null);

    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        setEmail(usuario.email)
    }, [usuario])

    function handleCreateClass(e) {
        e.preventDefault();

        let data = {
            name: name,
            nickName: nickName,
            cpf: cpf,
            email: email
        }

        console.log(data);
    }

    function handleCep() {
        if (String(cep).length === 8) {
            MasksService.receiveCep(cep)
                .then((response) => {
                    setBairro(response.data.neighborhood)
                    setEnd(response.data.street)
                    setCidade(response.data.city)
                    setUf(response.data.state)
                    setErrorCep(false)
                })
                .catch((err) => {
                    if (err.response.status === 404) {
                        setErrorCep(true)
                    }
                })
        }
    };

    function handleNickName() {
        setNickName((name).split(" ", 2).join(' '))
    }

    function handleValidateCpf() {
        MasksService.validateCpf(cpf)
            .then((response) => {
                console.log(response);
                setErrorCpf(response);
            })
    }

    return (
        <Container id="register-user-form">
            <PageHeader
                title="Que incrível que você quer fazer parte do Pisiquê!"
                description="O primeiro passo é preencher esse formulário de inscrição"
                link="/choice"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados <FaUser /></legend>

                        <div className="div-names">
                            <Input
                                required
                                name="name"
                                label="Nome Completo *"
                                onBlur={handleNickName}
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                            />

                            <Input
                                required
                                name="apelido"
                                label="Apelido - (Nickname) *"
                                value={nickName}
                                onChange={(e) => { setNickName(e.target.value) }}
                            />
                        </div>

                        <div className="div-dados">
                            <Input
                                required
                                error={errorCpf === false}
                                success={errorCpf === true}
                                name="cpf"
                                label="CPF *"
                                value={cpf}
                                onChange={(e) => mCPF(e.target.value).then((v) => setCpf(v))}
                                maxLength="14"
                                minLength="14"
                                onBlur={() => cpf.length === 14 ? handleValidateCpf() : null}
                            />

                            <Input
                                disabled
                                name="email"
                                label="Email *"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Localização</legend>

                        <div className="div-end">
                            <Input
                                required
                                name="cep"
                                label="Digite seu Cep *"
                                value={cep}
                                onBlur={handleCep}
                                onChange={(e) => setCep((e.target.value).match(/[0-9]*/))}
                                maxLength={8}
                                minLength={8}
                                placeholder='00.000-00'
                            />

                            <div className="cont-div">
                                <Input
                                    disabled
                                    name="cidade"
                                    label="Cidade"
                                    value={cidade}
                                    placeholder='Cidade'
                                    className="off-mouse"
                                />

                                <Input
                                    disabled
                                    name="uf"
                                    label="UF"
                                    value={uf}
                                    placeholder='UF'
                                    className="off-mouse"
                                />
                            </div>
                        </div>

                        {errorCep && <h4 style={{ color: 'red', fontFamily: 'Lato', marginBottom: 20 }}>CEP não encontrado</h4>}

                        <div className="div-end-rua">
                            <Input
                                disabled
                                name="end"
                                label="Endereço"
                                value={end}
                                placeholder='Rua, Avenida, etc'
                                className="off-mouse"
                            />

                            <Input
                                required
                                label="Numero *"
                                value={num}
                                onChange={(e) => setNum(e.target.value)}
                                placeholder='123'
                            />
                        </div>

                        <div className="div-end-pais">
                            <Input
                                name="complemento"
                                label="Complemento"
                                value={complemento}
                                onChange={(e) => setComplemento(e.target.value)}
                                placeholder='Apto, Bloco'
                            />

                            <Input
                                disabled
                                name="bairro"
                                label="Bairro"
                                value={bairro}
                                placeholder='Nome do Bairro'
                                className="off-mouse"
                            />

                            <Input
                                disabled
                                name="pais"
                                label="País"
                                value={pais}
                                onChange={(e) => setPais(e.target.value)}
                                className="off-mouse"
                            />
                        </div>
                    </fieldset>

                    <fieldset>
                        <div style={{ display: 'grid', gridTemplateColumns: '0.2fr 3.8fr', gridGap: '5px' }}>
                            <input id="terms-of-service" style={{ width: 15, height: 15, marginTop: 4 }} type="checkbox" />
                            <label htmlFor="terms-of-service" style={{ fontSize: 16 }}>Ao criar uma conta você concorda com nossos <a href="/#">Termos de Uso</a> e nossa <a href="/#">Política de Privacidade</a></label>
                        </div>
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
        </Container >
    )
})

export default RegisterUser;