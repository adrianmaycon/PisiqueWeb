import React, { useState } from 'react';

import { FaCaretDown, FaCaretUp } from "react-icons/fa";

import './styles.css';

function Painel() {
    const [openConfig, setOpenConfig] = useState(false)

    return (
        <div className="container-painel">
            <section id="sectionPrimary">
                <header>
                    <h1 id="name">Olá, Adrian Maycon</h1>

                    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setOpenConfig(!openConfig)}>
                        <img src={'https://vercel.com/api/www/avatar/b943b7f78e7e04c50c3c2d57bf26cc4d5829dcd0?s=60'} alt="Abrir configuração de perfil" />
                        {openConfig ? <FaCaretUp /> : <FaCaretDown />}
                    </div>
                </header>
            </section>

            <section id="sectionSecundary">

            </section>
        </div>
    )
}

export default Painel;