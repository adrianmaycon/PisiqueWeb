import React, { useState } from 'react';
import logo from 'assets/images/logo-instituto.png';
import { withRouter } from 'react-router-dom';
import MasksService, { mCPF, mCEP, mTel } from 'Services/masksService';
import Input from 'components/common/Input';
import InputDate from 'components/common/InputDate';
import UsersService from 'Services/UsersService';
import { FaUser, FaHome, FaSearch } from "react-icons/fa";
import { Container, Modal } from './styled';

const RegisterSeniors = withRouter(({ history, close }) => {

    const [search, setSearch] = useState('');
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

    function getHumans(id) {
        if (search) {
            UsersService.GetDataHuman(id)
                .then((response) => {
                    console.log(response);
                    setName(response.fullName);
                    setBirth(response.birth);
                })
        }
    }

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
                    setName('');
                    setSurnameName('');
                    setCpf('');
                    setRg('');
                    setGenre('');
                    setBirth('');
                    setNameMae('');
                    setNamePai('');
                    setEmail('');
                    setWhatsapp('');
                    setTelefone('');
                    setCep('');
                    setCidade('');
                    setUf('');
                    setEnd('');
                    setNum('');
                    setComplemento('');
                    setBairro('');
                    setPais('');
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

    function handleValidateCpf(id) {
        MasksService.validateCpf(id)
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
                <h1>Cadastro de Idoso</h1>
                <main>
                    <form onSubmit={handleCreateClass}>
                        <div className='buscar-grid'>
                            <Input
                                required
                                error={successCpf === false}
                                success={successCpf === true}
                                name="search"
                                label="Buscar pelo CPF *"
                                value={search}
                                onChange={(e) => mCPF(e.target.value).then((v) => setSearch(v))}
                                maxLength="14"
                                minLength="14"
                                onBlur={() => cpf.length === 14 ? handleValidateCpf(search) : null}
                                placeholder="000.000.000-00"
                            />
                            <button type='button' onClick={() => getHumans(search)}><FaSearch /></button>
                        </div>
                        {successCpf === false && <h4 style={{ color: 'red', fontFamily: 'Lato', marginBottom: 5, marginTop: 0 }}>CPF Inválido</h4>}
                        <fieldset>

                            <legend>Dados Pessoais <FaUser /></legend>

                            <div className="div-names">
                                <Input
                                    disabled
                                    required
                                    name="name"
                                    label="Nome Completo *"
                                    onBlur={handleSurnameName}
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                    placeholder="Ex.: Joao da Silva"
                                    className="off-mouse"
                                />

                                <InputDate
                                    disabled
                                    required
                                    name="birth"
                                    value={birth}
                                    label="Data de Nascimento: *"
                                    onChange={(e) => { setBirth(e.target.value) }}
                                    className="off-mouse"
                                />
                            </div>

                            <div className="div-date">
                                <Input
                                    disabled
                                    name="namePai"
                                    label="Nome do Pai"
                                    value={namePai}
                                    onChange={(e) => { setNamePai(e.target.value) }}
                                    placeholder="Ex.: Jose da Silva"
                                    className="off-mouse"
                                />

                                <Input
                                    disabled
                                    required
                                    name="nameMae"
                                    label="Nome da Mãe *"
                                    value={nameMae}
                                    onChange={(e) => { setNameMae(e.target.value) }}
                                    placeholder="Ex.: Maria da Silva"
                                    className="off-mouse"
                                />
                            </div>

                            <div className="div-date">
                                <Input
                                    disabled
                                    required
                                    error={successCpf === false}
                                    success={successCpf === true}
                                    name="cpf"
                                    label="CPF *"
                                    value={cpf}
                                    onChange={(e) => mCPF(e.target.value).then((v) => setCpf(v))}
                                    maxLength="14"
                                    minLength="14"
                                    onBlur={() => cpf.length === 14 ? handleValidateCpf(cpf) : null}
                                    placeholder="000.000.000-00"
                                    className="off-mouse"
                                />

                                <Input
                                    disabled
                                    name="rg"
                                    label="RG"
                                    value={rg}
                                    onChange={(e) => setRg(e.target.value)}
                                    maxLength="11"
                                    minLength="11"
                                    placeholder="12345678910"
                                    className="off-mouse"
                                />
                            </div>

                            <div className="div-date">
                                <Input
                                    disabled
                                    name="telefone-whatsapp"
                                    label="Telefone (Whatsapp) "
                                    value={whatsapp}
                                    onChange={(e) => mTel(e.target.value).then((v) => setWhatsapp(v))}
                                    maxLength="15"
                                    minLength="15"
                                    placeholder="(00) 00000-0000"
                                    className="off-mouse"
                                />

                                <Input
                                    disabled
                                    name="telefone-secundario"
                                    label="Telefone Secundário"
                                    value={telefone}
                                    onChange={(e) => mTel(e.target.value).then((v) => setTelefone(v))}
                                    maxLength="15"
                                    minLength="15"
                                    placeholder="(00) 00000-0000"
                                    className="off-mouse"
                                />
                            </div>

                            <div>
                                <Input
                                    disabled
                                    title={email}
                                    type="email"
                                    name="email"
                                    label="Email"
                                    placeholder="institutopisique@exemplo.com"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    className="off-mouse"
                                />
                            </div>

                        </fieldset>

                        <fieldset>
                            <legend>Endereço <FaHome /></legend>

                            {errorCep && <h4 style={{ color: 'red', fontFamily: 'Lato', marginBottom: 20 }}>CEP não encontrado</h4>}

                            <p style={{ marginBottom: 20 }}>Obs.: Após digitar o CEP, os outros dados irá preencher automaticamente. <br />Não sabe o CEP? <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="blank">Click aqui</a></p>

                            <div className="div-end">
                                <Input
                                    disabled
                                    required
                                    name="cep"
                                    label="Digite seu Cep *"
                                    value={cep}
                                    onBlur={handleCep}
                                    onChange={(e) => mCEP(e.target.value).then((v) => setCep(v))}
                                    maxLength={10}
                                    minLength={10}
                                    placeholder='00.000-000'
                                    className="off-mouse"
                                />

                                <div className="cont-div">
                                    <Input
                                        disabled
                                        name="cidade"
                                        label="Cidade"
                                        value={cidade}
                                        onChange={(e) => setCidade(e.target.value)}
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
                                    disabled
                                    required
                                    label="Numero *"
                                    value={num}
                                    onChange={(e) => setNum(e.target.value)}
                                    placeholder='123'
                                    className="off-mouse"
                                />
                            </div>

                            <div className="div-end-pais">
                                <Input
                                    disabled
                                    name="complemento"
                                    label="Complemento"
                                    value={complemento}
                                    onChange={(e) => setComplemento(e.target.value)}
                                    placeholder='Apto, Bloco'
                                    className="off-mouse"
                                />

                                <Input
                                    disabled
                                    name="bairro"
                                    label="Bairro"
                                    value={bairro}
                                    onChange={(e) => setBairro(e.target.value)}
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
                                Salvar
                            </button>

                            <button type="button" className='cancelar' onClick={() => close()}>
                                Cancelar
                            </button>
                        </footer>
                    </form>
                </main>
            </Container >
        </Modal>
    )
})

export default RegisterSeniors;