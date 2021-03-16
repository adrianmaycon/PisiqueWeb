import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/banner.png';

import NavBar from '../../components/NavBar';

import { Container, FadeIn } from './styled';

import { FaUserFriends, FaUserMd, FaSeedling } from "react-icons/fa";
import { AuthContext } from '../../auth/AuthContext';

function Inicio() {
    const [totalConnections, setTotalConnections] = useState(0);
    const [open, setOpen] = useState(false);

    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        setTotalConnections(1000)

        // if (!usuario) {
        //     console.log("Entrou");
        // } else {
        //     console.log("Não");
        // }

    }, [])

    console.log(open);

    return (
        <Container>
            <NavBar
                openProps={open}
                close={() => setOpen(false)}
            />

            <div id="page-landing">
                <div id="page-landing-content" className="container">
                    <FadeIn duration="0.8s" delay="0.2s">
                        <div className="logo-container">
                            <img src={logoImg} alt="Pisiquê" />
                            <h2>Sua plataforma amiga.</h2>
                        </div>
                    </FadeIn>

                    <img
                        src={landingImg}
                        alt="Plataforma de estudos"
                        className="hero-image" />

                    <div className="buttons-container">
                        {!usuario ?
                            <a href="/#" className="profissional" onClick={() => setOpen(true)}><FaUserMd className="icon" />Profissionais</a>
                            :
                            <Link to="/atendimento" className="profissional"><FaUserMd className="icon" />Profissionais</Link>}

                        {!usuario ?
                            <a href="/#" className="apoio" onClick={() => setOpen(true)}><FaUserFriends className="icon" />Grupo Pisiquê</a>
                            :
                            <Link to="/atendimento" className="apoio"><FaUserFriends className="icon" />Grupo Pisiquê</Link>}


                    </div>

                    <span className="total-connections">
                        Total de +{totalConnections} membros cadastrados <FaSeedling id="img" />
                    </span>
                </div>
            </div>
        </Container>
    )
}

export default Inicio;