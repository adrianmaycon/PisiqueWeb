import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import psi from '../../assets/images/icons/psi.svg';
import study from '../../assets/images/icons/estudante.svg';
import userGp from '../../assets/images/icons/userGp.svg';
import { authConfig } from '../../auth/config';
import './styles.css';

import { FaArrowRight, FaPowerOff } from "react-icons/fa";

function Choices() {
    const [choice, setChoice] = useState(2);

    return (
        <div>
            <div id="app-bar">
                <FaPowerOff className="icon-close" onClick={() => authConfig.auth().signOut()} />
            </div>
            <div id="container-choices">
                <header>
                    <h1>Escolha seu cadastro</h1>
                </header>

                <main>
                    <section onClick={() => setChoice(1)} className={choice === 1 ? "select" : ""}>
                        <h6>Psicólogo</h6>
                        <img src={psi} alt="Psicólogo homem" />
                        <h6>{choice === 1 && 'Selecionado'}</h6>
                    </section>

                    <section onClick={() => setChoice(2)} className={choice === 2 ? "select" : ""}>
                        <h6>Usuário GP</h6>
                        <img src={userGp} alt="Psicólogo homem" />
                        <h6>{choice === 2 && 'Selecionado'}</h6>
                    </section>

                    <section onClick={() => setChoice(3)} className={choice === 3 ? "select" : ""}>
                        <h6>Estudante</h6>
                        <img src={study} alt="Psicólogo homem" />
                        <h6>{choice === 3 && 'Selecionado'}</h6>
                    </section>
                </main>

                <footer>
                    <p>{choice === 1 ? 'Conteudos exclusivos, realizar atendimento, tudo que é necessário para você em uma plataforma' : choice === 2 ? 'Acesso a todos os profissionais e conteúdos cadastrados na plataforma' : 'Acesso a conteúdos exclusivos, interação com outros estudantes de psicologia e muito mais'}</p>
                    <div className="row">
                        <h1>Continuar como {choice === 1 ? "Psicólogo" : choice === 2 ? "Usuário GP" : "Estudante"}</h1>
                        <Link to={`/${choice === 1 ? 'register-psi' : choice === 2 ? "register-user" : "register-acad"}`}>
                            <button type="button"><FaArrowRight /></button>
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Choices;