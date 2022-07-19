import React, { useState, useEffect } from 'react';
import logoImg from 'assets/images/logo.svg';
import { FaHome, FaUserFriends, FaMoneyBillWave, FaFlagCheckered, FaComments, FaBookReader, FaHiking, FaAddressCard, FaFolder, FaFolderOpen } from "react-icons/fa";
import { Container, ContDiv, MenuContainer, NavContainer } from './styled';
import { IoMenu, IoArrowBackOutline } from "react-icons/io5";
import { AiFillSetting } from "react-icons/ai";
import { useHistory } from 'react-router-dom';
import Painel from './tabs/Painel';
import Leitura from './tabs/Leitura';
import Perfil from './tabs/Perfil';

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

            case "/atendimento":
                console.log('atendimento');
                setSubPage('atendimento');
                setSelect(2)
                break;

            case "/pagamentos":
                console.log('pagamentos');
                setSubPage('pagamentos');
                setSelect(3)
                break;

            case "/profile":
                console.log('profile');
                setSubPage('profile');
                setSelect(4)
                break;

            case "/jogos":
                console.log('jogos');
                setSubPage('jogos');
                setSelect(5)
                break;

            case "/conversas":
                console.log('conversas');
                setSubPage('conversas');
                setSelect(6)
                break;

            case "/leitura":
                console.log('leitura');
                setSubPage('leitura');
                setSelect(7)
                break;

            case "/ranking":
                console.log('ranking');
                setSubPage('ranking');
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

            case "profile":
                return <Perfil />

            case "leitura":
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
                                    <p>Administração</p>
                                    <hr />
                                </ContDiv>

                                <li
                                    id={select === 1 ? "select" : null}
                                    onClick={() => { setSelect(1); history.push("/dashboard/painel"); setOpenNav(false) }}
                                ><FaHome className="icon" />Painel</li>

                                <li
                                    id={select === 2 ? "select" : null}
                                    onClick={() => { setSelect(2); history.push("/dashboard/atendimento"); setOpenNav(false) }}
                                ><FaUserFriends className="icon" />Atendimento</li>

                                <li
                                    id={select === 4 ? "select" : null}
                                    onClick={() => { setSelect(4); history.push("/dashboard/profile"); setOpenNav(false) }}
                                ><FaAddressCard className="icon" />Meu Perfil</li>

                                <ContDiv>
                                    <p>Área Social</p>
                                    <hr />
                                </ContDiv>

                                <li
                                    id={select === 5 ? "select" : null}
                                    onClick={() => { setSelect(5); history.push("/dashboard/jogos"); setOpenNav(false) }}
                                ><FaFlagCheckered className="icon" />Jogos</li>

                                <li
                                    id={select === 6 ? "select" : null}
                                    onClick={() => { setSelect(6); history.push("/dashboard/conversas"); setOpenNav(false) }}
                                ><FaComments className="icon" />Conversas</li>

                                <li
                                    id={select === 7 ? "select" : null}
                                    onClick={() => { setSelect(7); history.push("/dashboard/leitura"); setOpenNav(false) }}
                                ><FaBookReader className="icon" />Leitura</li>

                                <li
                                    id={select === 8 ? "select" : null}
                                    onClick={() => { setSelect(8); history.push("/dashboard/ranking"); setOpenNav(false) }}
                                ><FaHiking className="icon" />Ranking</li>


                                <ContDiv>
                                    <p>Financeiro</p>
                                    <hr />
                                </ContDiv>

                                <li
                                    id={select === 3 ? "select" : null}
                                    onClick={() => { setSelect(3); history.push("/dashboard/pagamentos"); setOpenNav(false) }}
                                ><FaMoneyBillWave className="icon" />Pagamentos</li>

                                <li
                                    id={select === 10 ? "select" : null}
                                    onClick={() => { setSelect(10); history.push("/dashboard/arquivos"); setOpenNav(false) }}
                                >{select === 10 ? <FaFolderOpen className="icon" /> : <FaFolder className="icon" />}Arquivos</li>

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