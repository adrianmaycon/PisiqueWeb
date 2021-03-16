import React, { useState } from 'react';
import logoImg from '../../assets/images/logo.svg';
import { FaHome, FaUserFriends, FaMoneyBillWave, FaAddressCard } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import Painel from './Painel';
import './styles.css';

function Dashboard() {
    const history = useHistory();
    const [select, setSelect] = useState(1)

    return (
        <div className="container-dashboard">
            <nav>
                <ul>
                    <div className="menu-container">
                        <img id="logo" onClick={() => history.push("/")} src={logoImg} alt="Página inicial" />

                        <div id="container-org">
                            <li id={select === 1 && "select"} onClick={() => setSelect(1)}><FaHome className="icon" /> Painel</li>

                            <li id={select === 2 && "select"} onClick={() => setSelect(2)}><FaUserFriends className="icon" />Atendimento</li>

                            <li id={select === 3 && "select"} onClick={() => setSelect(3)}><FaMoneyBillWave className="icon" />Financeiro</li>

                            <li id={select === 4 && "select"} onClick={() => setSelect(4)}><FaAddressCard className="icon" />Meus Dados</li>
                        </div>
                    </div>
                </ul>
            </nav>

            <Painel />
        </div>
    )
}

export default Dashboard;