import React, { useState } from 'react';
import logo from '../../../assets/images/logo-instituto.png';
import { withRouter } from 'react-router-dom';
import MasksService, { mCPF, mCEP, mTel } from '../../../Services/masksService';
import Input from '../../../components/common/Input';
import Select from '../../../components/common/Select';
import InputDate from '../../../components/common/InputDate';
import UsersService from '../../../Services/UsersService';
import { FaUser, FaHome } from "react-icons/fa";
import { Container } from './styled';

const RegisterHuman = withRouter(({ history }) => {

    const [name, setName] = useState('');
    const [nameMae, setNameMae] = useState('');
    const [namePai, setNamePai] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [surnameName, setSurnameName] = useState('');
    const [genre, setGenre] = useState('');
    const [birth, setBirth] = useState('');
    const [end, setEnd] = useState('');
    const [num, setNum] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [cep, setCep] = useState('');
    const [pais, setPais] = useState('Brasil');

    const [errorCep, setErrorCep] = useState(false);
    const [successCpf, setSuccessCpf] = useState(null);

    function handleCreateClass(e) {
        e.preventDefault();

        if (successCpf) {
            let data = {
                fullName: name,
                SurnameName: surnameName,
                cpf: cpf,
                rg: rg,
                genre: genre,
                birth: birth,
                motherName: nameMae,
                fatherName: namePai,
                email: email,
                whatsapp: whatsapp,
                phone: telefone,
                address: {
                    cep: cep,
                    city: cidade,
                    uf: uf,
                    logradouro: end,
                    number: num,
                    complement: complemento,
                    district: bairro,
                    country: pais
                }
            }

            UsersService.RegisterHuman(data)
                .then((response) => {
                    console.log(response);
                })
        }
    }

    function handleCep() {
        if (String(cep).length === 10) {
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
        <Container>
            <header>
                <img className='logo-instituto-pisique' src={logo} alt="Logo do Instituto Pisiquê" />

            </header>
            <h1>Cadastro de Pessoa</h1>
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Dados Pessoais <FaUser /></legend>

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
                                minLength="30"
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
                                name="namePai"
                                label="Nome do Pai"
                                value={namePai}
                                onChange={(e) => { setNamePai(e.target.value) }}
                                placeholder="Ex.: Jose da Silva"
                            />

                            <Input
                                required
                                name="nameMae"
                                label="Nome da Mãe *"
                                value={nameMae}
                                onChange={(e) => { setNameMae(e.target.value) }}
                                placeholder="Ex.: Maria da Silva"
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

                    </fieldset>

                    <fieldset>
                        <legend>Endereço <FaHome /></legend>

                        {errorCep && <h4 style={{ color: 'red', fontFamily: 'Lato', marginBottom: 20 }}>CEP não encontrado</h4>}

                        <p style={{ marginBottom: 20 }}>Obs.: Após digitar o CEP, os outros dados irá preencher automaticamente. <br />Não sabe o CEP? <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="blank">Click aqui</a></p>

                        <div className="div-end">
                            <Input
                                required
                                name="cep"
                                label="Digite seu Cep *"
                                value={cep}
                                onBlur={handleCep}
                                onChange={(e) => mCEP(e.target.value).then((v) => setCep(v))}
                                maxLength={10}
                                minLength={10}
                                placeholder='00.000-000'
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

                    <footer>
                        <button type="submit">
                            Fazer Cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </Container >
    )
})

export default RegisterHuman;