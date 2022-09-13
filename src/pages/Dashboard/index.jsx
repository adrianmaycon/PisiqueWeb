import React, { useState, useEffect } from 'react';
import logoImg from 'assets/images/logo.svg';
import { FaHome, FaUserFriends, FaPencilRuler, FaUsers, FaUserAstronaut, FaGlasses, FaPaw, FaAddressCard, FaCalendarAlt } from "react-icons/fa";
import { Container, ContDiv, MenuContainer, NavContainer } from './styled';
import { IoMenu, IoArrowBackOutline } from "react-icons/io5";
import { AiFillSetting } from "react-icons/ai";
import { useHistory } from 'react-router-dom';
import Painel from './tabs/Painel';
import Leitura from './tabs/Leitura';
import Perfil from './tabs/Perfil';
import Usuarios from './tabs/Usuarios';

function Dashboard() {
    const history = useHistory();
    const [select, setSelect] = useState(1)
    const [subPage, setSubPage] = useState("painel")

    const [openNav, setOpenNav] = useState(false)

    useEffect(() => {
        let section_atual = String(window.location.href).split("/dashboard")[1];
        // let url_atual = (window.location.href).split("http://localhost:3000/dashboard");
        let url_atual = (window.location.href).split(String(window.location.href).split(String(section_atual))[0]);
        // let url_atual = (window.location.href).split("https://institutopisique.vercel.app/dashboard");

        switch (url_atual[1]) {
            case "/painel":
                console.log('painel');
                setSubPage('painel');
                setSelect(1)
                break;

            case "/usuarios":
                console.log('usuarios');
                setSubPage('usuarios');
                setSelect(2)
                break;

            case "/atividades":
                console.log('atividades');
                setSubPage('atividades');
                setSelect(3)
                break;

            case "/profile":
                console.log('profile');
                setSubPage('profile');
                setSelect(4)
                break;

            case "/familias":
                console.log('familias');
                setSubPage('familias');
                setSelect(5)
                break;

            case "/criancas":
                console.log('criancas');
                setSubPage('criancas');
                setSelect(6)
                break;

            case "/idosos":
                console.log('idosos');
                setSubPage('idosos');
                setSelect(7)
                break;

            case "/animais":
                console.log('animais');
                setSubPage('animais');
                setSelect(8)
                break;

            case "/configuracoes":
                console.log('configuracoes');
                setSubPage('configuracoes');
                setSelect(9)
                break;

            case "/arquivos":
                console.log('arquivos');
                setSubPage('arquivos');
                setSelect(10)
                break;

            default:
                break;
        }
    }, [select])

    const showPages = () => {

        switch (subPage) {
            case "painel":
                return <Painel />

            case "usuarios":
                return <Usuarios />

            case "profile":
                return <Perfil />

            case "idosos":
                return <Leitura />

            default:
                break;
        }
    }

    return (
        <Container openNav={openNav}>
            <div className="row">
                <NavContainer openNav={openNav}>
                    <ul>
                        <MenuContainer>
                            <img id="logo" onClick={() => history.push("/")} src={logoImg} alt="Página inicial" />

                            <div id="container-org">

                                <ContDiv offMargin>
                                    <p>Espaço pessoal</p>
                                    <hr />
                                </ContDiv>

                                <li
                                    id={select === 1 ? "select" : null}
                                    onClick={() => { setSelect(1); history.push("/dashboard/painel"); setOpenNav(false) }}
                                ><FaHome className="icon" />Painel</li>

                                <li
                                    id={select === 4 ? "select" : null}
                                    onClick={() => { setSelect(4); history.push("/dashboard/profile"); setOpenNav(false) }}
                                ><FaAddressCard className="icon" />Meu Perfil</li>

                                <ContDiv>
                                    <p>Administrativo Social</p>
                                    <hr />
                                </ContDiv>

                                <li
                                    id={select === 2 ? "select" : null}
                                    onClick={() => { setSelect(2); history.push("/dashboard/usuarios"); setOpenNav(false) }}
                                ><FaUserFriends className="icon" />Usuários</li>

                                <li
                                    id={select === 5 ? "select" : null}
                                    onClick={() => { setSelect(5); history.push("/dashboard/familias"); setOpenNav(false) }}
                                ><FaUsers className="icon" />Famílias</li>

                                <li
                                    id={select === 6 ? "select" : null}
                                    onClick={() => { setSelect(6); history.push("/dashboard/criancas"); setOpenNav(false) }}
                                ><FaUserAstronaut className="icon" />Crianças</li>

                                <li
                                    id={select === 7 ? "select" : null}
                                    onClick={() => { setSelect(7); history.push("/dashboard/idosos"); setOpenNav(false) }}
                                ><FaGlasses className="icon" />Idosos</li>

                                <li
                                    id={select === 8 ? "select" : null}
                                    onClick={() => { setSelect(8); history.push("/dashboard/animais"); setOpenNav(false) }}
                                ><FaPaw className="icon" />Animais</li>


                                <ContDiv>
                                    <p>Institucional</p>
                                    <hr />
                                </ContDiv>

                                <li
                                    id={select === 3 ? "select" : null}
                                    onClick={() => { setSelect(3); history.push("/dashboard/atividades"); setOpenNav(false) }}
                                ><FaPencilRuler className="icon" />Atividades</li>

                                <li
                                    id={select === 10 ? "select" : null}
                                    onClick={() => { setSelect(10); history.push("/dashboard/arquivos"); setOpenNav(false) }}
                                ><FaCalendarAlt className="icon" />Quadro de Horário</li>

                                <li
                                    id={select === 9 ? "select" : null}
                                    onClick={() => { setSelect(9); history.push("/dashboard/configuracoes"); setOpenNav(false) }}
                                ><AiFillSetting className="icon" />Configurações</li>

                            </div>
                        </MenuContainer>
                    </ul>
                </NavContainer>

                <div className='div-btn-off' onClick={() => setOpenNav(false)} />
            </div>

            <div className='cont-pages'>
                <div className='header-pages'>
                    <div onClick={() => setOpenNav(!openNav)}>
                        {openNav ?
                            <IoArrowBackOutline className="menu-icon" />
                            :
                            <IoMenu className="menu-icon" />
                        }
                    </div>
                </div>

                {showPages()}
            </div>

        </Container >
    )
}

export default Dashboard;