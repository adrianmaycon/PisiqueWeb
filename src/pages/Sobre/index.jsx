import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import { Container, Header, Main, Title } from './styled';
import { FadeIn } from '../Home/styled';
import videobanner from '../../assets/images/back-video.jpg';
import Timeline from './Timeline';

function Sobre() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <NavBar
                simple
                openProps={open}
                close={() => setOpen(false)}
            />
            <Container>

                <Header>
                    <FadeIn duration="0.4s" delay="0.2s">
                        <Title>Sobre o Pisiquê</Title>
                    </FadeIn>

                    <div className="header-container">
                        <FadeIn duration="0.6s" delay="0.4s">
                            <img className="image-banner" src={videobanner} alt="" />
                        </FadeIn>

                        <div className="cont-text" >
                            <FadeIn duration="0.8s" delay="0.6s">
                                <h4>A Plataforma Pisiquê nasceu com o Instituto Pisique, vimos a real necessidade de criar algo que seje viável para todos que necessitam de apoio pisicologico e emocional.</h4>
                            </FadeIn>

                            <FadeIn duration="1s" delay="0.8s">
                                <p>A Plataforma Pisiquê nasceu junto com o Instituto Pisique, vimos a real necessidade de criar algo que seje viável para todos aqueles A Plataforma Pisiquê nasceu junto com o Instituto Pisique, vimos a real necessidade de criar algo que seje viável para todos aqueles A Plataforma Pisiquê nasceu junto com o Instituto Pisique, vimos a real necessidade de criar algo que seje viável para todos aqueles que necessitam de apoio pisicologico e emocional, sendo um meio entre o paciente e o profissional. A Plataforma Pisiquê nasceu junto com o Instituto Pisique, vimos a real necessidade de criar algo que seje viável para todos aqueles que necessitam de apoio pisicologico e emocional, sendo um meio entre o paciente e o profissional. A Plataforma Pisiquê nasceu junto com o Instituto Pisique, vimos a real necessidade de criar algo que seje viável para todos aqueles que necessitam de apoio pisicologico e emocional, sendo um meio entre o paciente e o profissional.</p>
                            </FadeIn>
                        </div>
                    </div>

                </Header>

                <Main>
                    <FadeIn duration="1.2s" delay="1s">
                        <Title>Linha do Tempo</Title>
                    </FadeIn>

                    <FadeIn duration="1.4s" delay="1.2s">
                        <div className="timeline-box">
                            <Timeline />
                        </div>
                    </FadeIn>
                </Main>
            </Container>
        </>
    );
}

export default Sobre;