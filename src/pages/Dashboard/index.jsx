import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/images/logo.svg';
import { FaHome, FaUserFriends, FaMoneyBillWave, FaAddressCard } from "react-icons/fa";
import {  useHistory } from 'react-router-dom';
import Painel from './Painel';
import Perfil from './Perfil';
import './styles.css';

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

            case "/financeiro":
                console.log('financeiro');
                setSubPage('financeiro');
                setSelect(3)
                break;

            case "/profile":
                console.log('profile');
                setSubPage('profile');
                setSelect(4)
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
        <div className="container-dashboard">
            <nav>
                <ul>
                    <div className="menu-container">
                        <img id="logo" onClick={() => history.push("/")} src={logoImg} alt="Página inicial" />

                        <div id="container-org">
                            <li
                                id={select === 1 ? "select" : null}
                                onClick={() => { setSelect(1); history.push("/dashboard/painel") }}
                            ><FaHome className="icon" />Painel</li>

                            <li
                                id={select === 2 ? "select" : null}
                                onClick={() => { setSelect(2); history.push("/dashboard/atendimento") }}
                            ><FaUserFriends className="icon" />Atendimento</li>

                            <li
                                id={select === 3 ? "select" : null}
                                onClick={() => { setSelect(3); history.push("/dashboard/financeiro") }}
                            ><FaMoneyBillWave className="icon" />Financeiro</li>


                            <li
                                id={select === 4 ? "select" : null}
                                onClick={() => { setSelect(4); history.push("/dashboard/profile") }}
                            ><FaAddressCard className="icon" />Meu Perfil</li>
                        </div>
                    </div>
                </ul>
            </nav>

            {showPages()}

        </div>
    )
}

export default Dashboard;