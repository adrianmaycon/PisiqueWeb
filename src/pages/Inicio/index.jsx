import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/banner.png';

import AppBar from '../../components/AppBar';

import { FaUserFriends, FaUserMd, FaSeedling } from "react-icons/fa";

import './styles.css';

function Inicio() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        setTotalConnections(1564)
    }, [])

    return (
        <div>
            <AppBar />

            <div id="page-landing">
                <div id="page-landing-content" className="container">
                    <div className="logo-container">
                        <img src={logoImg} alt="Proffy" />
                        <h2>Sua plataforma amiga.</h2>
                    </div>

                    <img
                        src={landingImg}
                        alt="Plataforma de estudos"
                        className="hero-image" />

                    <div className="buttons-container">
                        <Link to="/atendimento" className="profissional">
                            <FaUserMd className="icon" />
                            Profissionais
                        </Link>

                        <Link to="/atendimento" className="apoio">
                            <FaUserFriends className="icon" />
                            Grupo Pisiquê
                        </Link>
                    </div>

                    <span className="total-connections">
                        Total de {totalConnections} membros cadastrados <FaSeedling id="img" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Inicio;