import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/images/logo.svg';
import { FaHome, FaUserFriends, FaMoneyBillWave, FaFlagCheckered, FaComments, FaBookReader, FaHiking, FaAddressCard, FaFolder, FaFolderOpen } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { useHistory } from 'react-router-dom';
import Painel from './tabs/Painel';
import Perfil from './tabs/Perfil';
import { Container, ContDiv } from './styled';

function Dashboard() {
    const history = useHistory();
    const [select, setSelect] = useState(1)
    const [subPage, setSubPage] = useState("painel")

    useEffect(() => {
        let url_atual = (window.location.href).split("http://localhost:3000/dashboard");

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

            default:
                break;
        }
    }

    return (
        <Container>
            <nav>
                <ul>
                    <div className="menu-container">
                        <img id="logo" onClick={() => history.push("/")} src={logoImg} alt="Página inicial" />

                        <div id="container-org">

                            <ContDiv offMargin>
                                <p>Administração</p>
                                <hr />
                            </ContDiv>

                            <li
                                id={select === 1 ? "select" : null}
                                onClick={() => { setSelect(1); history.push("/dashboard/painel") }}
                            ><FaHome className="icon" />Painel</li>

                            <li
                                id={select === 2 ? "select" : null}
                                onClick={() => { setSelect(2); history.push("/dashboard/atendimento") }}
                            ><FaUserFriends className="icon" />Atendimento</li>

                            <li
                                id={select === 4 ? "select" : null}
                                onClick={() => { setSelect(4); history.push("/dashboard/profile") }}
                            ><FaAddressCard className="icon" />Meu Perfil</li>

                            <ContDiv>
                                <p>Área Social</p>
                                <hr />
                            </ContDiv>

                            <li
                                id={select === 5 ? "select" : null}
                                onClick={() => { setSelect(5); history.push("/dashboard/jogos") }}
                            ><FaFlagCheckered className="icon" />Jogos</li>

                            <li
                                id={select === 6 ? "select" : null}
                                onClick={() => { setSelect(6); history.push("/dashboard/conversas") }}
                            ><FaComments className="icon" />Conversas</li>

                            <li
                                id={select === 7 ? "select" : null}
                                onClick={() => { setSelect(7); history.push("/dashboard/leitura") }}
                            ><FaBookReader className="icon" />Leitura</li>

                            <li
                                id={select === 8 ? "select" : null}
                                onClick={() => { setSelect(8); history.push("/dashboard/ranking") }}
                            ><FaHiking className="icon" />Ranking</li>


                            <ContDiv>
                                <p>Financeiro</p>
                                <hr />
                            </ContDiv>

                            <li
                                id={select === 3 ? "select" : null}
                                onClick={() => { setSelect(3); history.push("/dashboard/pagamentos") }}
                            ><FaMoneyBillWave className="icon" />Pagamentos</li>

                            <li
                                id={select === 10 ? "select" : null}
                                onClick={() => { setSelect(10); history.push("/dashboard/arquivos") }}
                            >{select === 10 ? <FaFolderOpen className="icon" /> : <FaFolder className="icon" />}Arquivos</li>

                            <li
                                id={select === 9 ? "select" : null}
                                onClick={() => { setSelect(9); history.push("/dashboard/configuracoes") }}
                            ><AiFillSetting className="icon" />Configurações</li>

                        </div>
                    </div>
                </ul>
            </nav>

            { showPages()}

        </Container >
    )
}

export default Dashboard;