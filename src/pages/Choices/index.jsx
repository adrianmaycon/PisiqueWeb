import React, { useState } from 'react';

import './styles.css';

function Choices() {
    const [choice, setChoice] = useState(2);

    return (
        <div id="container-choices">
            <header>
                <h1>Escolha seu login</h1>
            </header>

            <main>
                <section onClick={() => setChoice(1)} className={choice === 1 && "select" }>
                    <h6>Psicólogo</h6>
                </section>

                <section onClick={() => setChoice(2)} className={choice === 2 && "select" }>
                    <h6>Usuário GP</h6>
                </section>

                <section onClick={() => setChoice(3)} className={choice === 3 && "select" }>
                    <h6>Estudante</h6>
                </section>
            </main>

            <footer>
                <h1>Continuar como {choice === 1 ? "Psicólogo" : choice === 2 ? "Usuário GP" : "Estudante"}</h1>
            </footer>
        </div>
    )
}

export default Choices;