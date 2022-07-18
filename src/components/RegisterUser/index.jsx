import React, { useState } from 'react';
import logo from '../../assets/images/logo-instituto.png';
import { withRouter } from 'react-router-dom';
import MasksService, { mCPF, mTel } from '../../Services/masksService';
import Input from '../../components/common/Input';
import Select from '../../components/common/Select';
import InputDate from '../../components/common/InputDate';
import UsersService from '../../Services/UsersService';
import { FaLaptop } from "react-icons/fa";
import { Container, Modal } from './styled';

const RegisterUser = withRouter(({ history, close }) => {

    const [avatar, setAvatar] = useState('');
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [surnameName, setSurnameName] = useState('');
    const [genre, setGenre] = useState('');
    const [birth, setBirth] = useState('');

    const [successCpf, setSuccessCpf] = useState(null);

    function handleCreateClass(e) {
        e.preventDefault();

        if (successCpf) {
            let data = {
                type: type,
                avatar: avatar,
                fullName: name,
                SurnameName: surnameName,
                cpf: cpf,
                rg: rg,
                genre: genre,
                birth: birth,
                email: email,
                whatsapp: whatsapp,
                phone: telefone,
            }

            UsersService.RegisterUser(data)
                .then((response) => {
                    console.log(response);
                    setName('');
                    setSurnameName('');
                    setCpf('');
                    setRg('');
                    setType('');
                    setGenre('');
                    setBirth('');
                    setAvatar('');
                    setEmail('');
                    setWhatsapp('');
                    setTelefone('');
                    close();
                })
        }
    }

    function handleSurnameName() {

        if (!surnameName) {
            setSurnameName((((name).split(" ", 2).join(' ')).replace(/\s/g, '')).toLowerCase())
        }
    }

    function handleValidateCpf() {
        MasksService.validateCpf(cpf)
            .then((response) => {
                // console.log(response);
                setSuccessCpf(response);
            })
    }

    return (
        <Modal>
            <Container>
                <header>
                    <img className='logo-instituto-pisique' src={logo} alt="Logo do Instituto Pisiquê" />

                </header>
                <h1>Cadastro de usuario</h1>
                <main>
                    <form onSubmit={handleCreateClass}>
                        <fieldset>
                            <legend>Dados Pessoais <FaLaptop /></legend>

                            <Input
                                required
                                name="avatar"
                                label="Avatar *"
                                value={avatar}
                                onChange={(e) => { setAvatar(e.target.value) }}
                            />

                            <div className="div-names">
                                <Input
                                    required
                                    name="name"
                                    label="Nome Completo *"
                                    onBlur={handleSurnameName}
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                    placeholder="Ex.: Joao da Silva"
                                />

                                <Input
                                    required
                                    name="apelido"
                                    label="Apelido *"
                                    value={surnameName}
                                    maxLength="30"
                                    minLength="3"
                                    onChange={(e) => { setSurnameName(e.target.value) }}
                                    // onChange={(e) => { setSurnameName(((e.target.value).trim()).toLowerCase()) }}
                                    placeholder="Ex.: João Silva"
                                />
                            </div>

                            <div className="div-date">
                                <Select
                                    required
                                    value={genre}
                                    name="genre"
                                    label="Identidade de Gênero *"
                                    onChange={(e) => { setGenre(e.target.value) }}
                                    options={[
                                        { value: 'homem', label: 'Homem Cis' },
                                        { value: 'homem-trans', label: 'Homem Trans' },
                                        { value: 'mulher', label: 'Mulher Cis' },
                                        { value: 'mulher-trans', label: 'Mulher Trans' },
                                        { value: 'nao-binario', label: 'Não binário' },
                                    ]}
                                />

                                <InputDate
                                    required
                                    name="birth"
                                    value={birth}
                                    label="Data de Nascimento: *"
                                    onChange={(e) => { setBirth(e.target.value) }}
                                />
                            </div>

                            <div className="div-date">
                                <Input
                                    required
                                    error={successCpf === false}
                                    success={successCpf === true}
                                    name="cpf"
                                    label="CPF *"
                                    value={cpf}
                                    onChange={(e) => mCPF(e.target.value).then((v) => setCpf(v))}
                                    maxLength="14"
                                    minLength="14"
                                    onBlur={() => cpf.length === 14 ? handleValidateCpf() : null}
                                    placeholder="000.000.000-00"
                                />

                                <Input
                                    name="rg"
                                    label="RG"
                                    value={rg}
                                    onChange={(e) => setRg(e.target.value)}
                                    maxLength="11"
                                    minLength="11"
                                    placeholder="12345678910"
                                />
                            </div>

                            {successCpf === false && <h4 style={{ color: 'red', fontFamily: 'Lato', marginBottom: 5, marginTop: 0 }}>CPF Inválido</h4>}

                            <div className="div-date">
                                <Input
                                    name="telefone-whatsapp"
                                    label="Telefone (Whatsapp) "
                                    value={whatsapp}
                                    onChange={(e) => mTel(e.target.value).then((v) => setWhatsapp(v))}
                                    maxLength="15"
                                    minLength="15"
                                    placeholder="(00) 00000-0000"
                                />

                                <Input
                                    name="telefone-secundario"
                                    label="Telefone Secundário"
                                    value={telefone}
                                    onChange={(e) => mTel(e.target.value).then((v) => setTelefone(v))}
                                    maxLength="15"
                                    minLength="15"
                                    placeholder="(00) 00000-0000"
                                />
                            </div>

                            <div>
                                <Input
                                    title={email}
                                    type="email"
                                    name="email"
                                    label="Email"
                                    placeholder="institutopisique@exemplo.com"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </div>

                            <Select
                                required
                                value={type}
                                name="type"
                                label="Tipo de Permissão *"
                                onChange={(e) => { setType(e.target.value) }}
                                options={[
                                    { value: '1', label: 'Administrador' },
                                    { value: '2', label: 'Profissional' },
                                    { value: '3', label: 'Estudante' },
                                    { value: '4', label: 'Usuário Pisiquê' },
                                ]}
                            />
                        </fieldset>

                        <footer>
                            <button type="submit">
                                Fazer Cadastro
                            </button>

                            <button type="button" className='cancelar' onClick={() => close()}>
                                Cancelar Cadastro
                            </button>
                        </footer>
                    </form>
                </main>
            </Container >
        </Modal>
    )
})

export default RegisterUser;