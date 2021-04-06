import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import { Container } from './styled';
import videobanner from '../../assets/images/back-video.jpg';

function Sobre() {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <NavBar
                simple
                openProps={open}
                close={() => setOpen(false)}
            />

            <header>
                <h1 className="title">Sobre o Pisiquê</h1>
                <div className="header-container">
                    <img className="image-banner" src={videobanner} alt="" />

                    <div className="cont-text" >
                        <h4>A Plataforma Pisiquê nasceu com o Instituto Pisique, vimos a real necessidade de criar algo que seje viável para todos que necessitam de apoio pisicologico e emocional.</h4>
                        <p>A Plataforma Pisiquê nasceu junto com o Instituto Pisique, vimos a real necessidade de criar algo que seje viável para todos aqueles que necessitam de apoio pisicologico e emocional, sendo um meio entre o paciente e o profissional. A Plataforma Pisiquê nasceu junto com o Instituto Pisique, vimos a real necessidade de criar algo que seje viável para todos aqueles que necessitam de apoio pisicologico e emocional, sendo um meio entre o paciente e o profissional. A Plataforma Pisiquê nasceu junto com o Instituto Pisique, vimos a real necessidade de criar algo que seje viável para todos aqueles que necessitam de apoio pisicologico e emocional, sendo um meio entre o paciente e o profissional.</p>
                    </div>
                </div>
            </header>
        </Container>
    );
}

export default Sobre;