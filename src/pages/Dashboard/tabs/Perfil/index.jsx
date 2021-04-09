import React, { useState, useEffect, useContext } from 'react';

import { IoCloudUploadOutline, IoColorPaletteOutline } from "react-icons/io5";
import MasksService, { mCEP } from '../../../../services/masksService';
import UsersService from '../../../../services/UsersService';
import { AuthContext } from '../../../../auth/AuthContext';
import warningIcon from '../../../../assets/images/icons/warning.svg';
import { FaUser } from "react-icons/fa";
import { Container, Header, Main, ContainerInfos, Avatar } from './styled';
import Input from '../../../../components/common/Input';
import Select from '../../../../components/common/Select';
import InputDate from '../../../../components/common/InputDate';
// import ModalAvatars from '../../../components/common/ModalAvatars'

function Perfil() {

    // const [openConfig, setOpenConfig] = useState(false)
    const [dataUser, setDataUser] = useState({})
    const [avatar, setAvatar] = useState("")
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [nickName, setNickName] = useState('');
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

    const [banner, setBanner] = useState('');

    const [errorCep, setErrorCep] = useState(false);
    const [checkEdit, setCheckEdit] = useState(false);

    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        if (!!usuario) {
            UsersService.GetDataUser(usuario.email)
                .then(user => {
                    console.log(user)
                    setDataUser(user)

                    setName(user.fullName)
                    setNickName(user.nickName)
                    setEmail(user.email)
                    setCpf(user.cpf)
                    setGenre(user.genre)
                    setBirth(user.birth)
                })
        }

    }, [usuario])

    const onChangeImageBanner = (event) => {
        readURLBanner(event.target);
    };

    const readURLBanner = (input) => {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setBanner(e.target.result);
                // console.log(input.files[0])
            };
            reader.readAsDataURL(input.files[0]);
        }
    };

    const onChangeImage = (event) => {
        readURL(event.target);
    };

    const readURL = (input) => {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setAvatar(e.target.result);
                // console.log(input.files[0])
            };
            reader.readAsDataURL(input.files[0]);
        }
    };

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

    function handleNickName() {
        if (!nickName) {
            setNickName((((name).split(" ", 2).join(' ')).replace(/\s/g, '')).toLowerCase())
        }
    }

    function handleCreateClass(e) {
        e.preventDefault();

        // let data = {
        //     avatar: null,
        //     fullName: name,
        //     nickName: nickName,
        //     cpf: cpf,
        //     email: email,
        //     genre: genre,
        //     birth: birth,
        //     address: {
        //         cep: cep,
        //         city: cidade,
        //         uf: uf,
        //         logradouro: end,
        //         number: num,
        //         complement: complemento,
        //         district: bairro,
        //         country: pais
        //     }
        // }

        // UsersService.RegisterUserPisique(data)
        //     .then((response) => {
        //         console.log(response);

        //         let dataDoc = {
        //             fullName: name,
        //             nickName: nickName,
        //             cpf: cpf,
        //             email: email,
        //             genre: genre,
        //             birth: birth,
        //             type: 1
        //         }

        //         UsersService.RegisterUser(dataDoc)
        //     })

        // console.log(data);

    }

    return (
        <>
            {/* <ModalAvatars /> */}
            <Container>
                <Header banner={banner} />

                <Main>
                    <div className="divsor">
                        <input style={{ display: 'none' }} accept="file_extension|e.g: .gif, .jpg, .jpeg, .png" id='image-banner' type='file' onChange={(e) => onChangeImageBanner(e)} />
                        <label title="Alterar imagem de fundo - banner" htmlFor='image-banner' id="update-banner"><IoCloudUploadOutline className="up-icon" />Alterar Banner</label>

                        <ContainerInfos >
                            <header>
                                <input style={{ display: 'none' }} accept="file_extension|e.g: .gif, .jpg, .jpeg, .png" id='image-avatar' type='file' onChange={(e) => onChangeImage(e)} />
                                <IoColorPaletteOutline className="av-icon" />
                                <Avatar title="Imagem de perfil" src={dataUser.avatar ? dataUser.avatar : avatar ? avatar : "https://firebasestorage.googleapis.com/v0/b/pisiqueapp.appspot.com/o/avatars%2Fuser.png?alt=media&token=120e160a-29e9-4fe4-82ad-830598d37e75"} alt="Imagem de Perfil" />
                                <label title="Alterar imagem de perfil" htmlFor='image-avatar'><IoCloudUploadOutline className="up-icon" /></label>
                            </header>

                            <main>
                                <form onSubmit={() => handleCreateClass}>
                                    <div className="cont-dados">
                                        <input type="checkbox" id="edit-date" name="edit-date" checked={checkEdit} onChange={() => setCheckEdit(!checkEdit)} />
                                        <label for="edit-date">Editar Dados</label>
                                    </div>

                                    <fieldset>
                                        <legend>Seus dados <FaUser /></legend>

                                        <div className="div-names">
                                            <Input
                                                disabled={!checkEdit}
                                                required
                                                name="name"
                                                label="Nome Completo *"
                                                onBlur={handleNickName}
                                                value={name}
                                                onChange={(e) => { setName(e.target.value) }}
                                                placeholder="Ex.: Joao da Silva"
                                                className={!checkEdit && "off-mouse"}
                                            />

                                            <Input
                                                disabled={!checkEdit}
                                                required
                                                name="apelido"
                                                label="Apelido - (Nickname) *"
                                                value={nickName}
                                                onChange={(e) => { setNickName(((e.target.value).trim()).toLowerCase()) }}
                                                placeholder="Ex.: joaodasilva"
                                                className={!checkEdit && "off-mouse"}
                                            />
                                        </div>

                                        <div className="div-date">
                                            <Select
                                                disabled
                                                required
                                                value={genre}
                                                name="genre"
                                                label="Identidade de Gênero *"
                                                onChange={(e) => { setGenre(e.target.value) }}
                                                options={[
                                                    { value: 'homem', label: 'Homem' },
                                                    { value: 'mulher', label: 'Mulher' },
                                                    { value: 'nao-binario', label: 'Não binário' },
                                                ]}
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

                                        <div className="div-dados">
                                            <Input
                                                disabled
                                                name="cpf"
                                                label="CPF *"
                                                value={cpf}
                                                maxLength="14"
                                                minLength="14"
                                                className="off-mouse"
                                            />

                                            <Input
                                                disabled
                                                title={email}
                                                name="email"
                                                label="Email *"
                                                value={email}
                                                onChange={(e) => { setEmail(e.target.value) }}
                                                className="off-mouse"
                                            />
                                        </div>
                                    </fieldset>

                                    <fieldset>
                                        <legend>Localização</legend>

                                        {errorCep && <h4 style={{ color: 'red', fontFamily: 'Lato', marginBottom: 20 }}>CEP não encontrado</h4>}

                                        <p style={{ marginBottom: 20 }}>Obs.: Após digitar o CEP, os outros dados irá preencher automaticamente. <br />Não sabe seu CEP? <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="blank">Aperte aqui</a></p>

                                        <div className="div-end">
                                            <Input
                                                disabled={!checkEdit}
                                                required
                                                name="cep"
                                                label="Digite seu Cep *"
                                                value={cep}
                                                onBlur={handleCep}
                                                onChange={(e) => mCEP(e.target.value).then((v) => setCep(v))}
                                                maxLength={10}
                                                minLength={10}
                                                placeholder='00.000-000'
                                                className={!checkEdit && "off-mouse"}
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
                                                disabled={!checkEdit}
                                                required
                                                label="Numero *"
                                                value={num}
                                                onChange={(e) => setNum(e.target.value)}
                                                placeholder='123'
                                                className={!checkEdit && "off-mouse"}
                                            />
                                        </div>

                                        <div className="div-end-pais">
                                            <Input
                                                disabled={!checkEdit}
                                                name="complemento"
                                                label="Complemento"
                                                value={complemento}
                                                onChange={(e) => setComplemento(e.target.value)}
                                                placeholder='Apto, Bloco'
                                                className={!checkEdit && "off-mouse"}
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
                                        <p><img src={warningIcon} alt="Aviso Importante" />Importante! <br />Preencha todos os dados</p>
                                        {checkEdit ?
                                            <button type="submit" >Salvar cadastro</button>
                                            :
                                            <button type="button" disabled style={{ backgroundColor: '#a3a3a3' }}>Salvar cadastro</button>
                                        }
                                    </footer>
                                </form>
                            </main>

                            {/* <h1>{dataUser.fullName ? String(dataUser.fullName).split(" ", 4).join(' ') : ""}</h1>*/}

                        </ContainerInfos>
                    </div>
                </Main>

            </Container>
        </>
    )
}

export default Perfil;