import React, { useState } from 'react';
import NavBar from '../../components/NavBar';

import { IoPlayCircleOutline } from "react-icons/io5";
import { Container, BoxContainer, Description, FadeIn, /**Button, Row */ } from './styled';
import videobanner from '../../assets/images/back-video.jpg';
// import Passos from './Passos';
import ModalVideo from './ModalVideo';
import Particles from "react-particles-js";
import CookiesPage from '../../components/Cookies';

function Home() {
    const [open, setOpen] = useState(false);
    const [openVideo, setOpenVideo] = useState(false)

    return (
        <Container>
            {openVideo && <ModalVideo close={() => setOpenVideo(false)} />}
            <CookiesPage />

            {/* <Particles
                className="background-lib"
                params={{
                    "particles": {
                        "number": {
                            "value": 1000,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }} /> */}

            <Particles
                className="background-lib"
                params={{
                    "particles": {
                        "number": {
                            "value": window.innerWidth < 400 ? 30 : window.innerWidth < 500 ? 50 : window.innerWidth < 800 ? 80 : 130
                        },
                        "size": {
                            "value": 3
                        },
                        move: {
                            enable: true,
                            speed: 0.8,
                        }
                    },

                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} />

            <div className="container-box">
                <NavBar openProps={open} close={() => setOpen(false)} />

                <BoxContainer>
                    <header>
                        <FadeIn duration="0.4s" delay="0.2s">
                            <h1>Venha fazer parte da <br/><span>Família Pisiquê</span></h1>
                        </FadeIn>

                        <FadeIn duration="0.6s" delay="0.4s">
                            <Description>Quem olha para fora sonha, quem olha para dentro desperta.</Description>
                        </FadeIn>

                        {/* <Row marginTop="30px">
                        <Button type="button">Botão 01</Button>
                        <Button type="button">Botão 01</Button>
                    </Row> */}

                        <div className="container-video">
                            <FadeIn duration="0.8s" delay="0.6s">
                                <img className="video" src={videobanner} alt="" />
                            </FadeIn>

                            <FadeIn duration="1s" delay="0.8s">
                                <div className="button-video" onClick={() => setOpenVideo(true)} title="Saiba mais sobre a gente">
                                    <IoPlayCircleOutline id="icon-play" />
                                    <h4>Saiba mais sobre a gente</h4>
                                </div>
                            </FadeIn>
                        </div>
                    </header>

                    {/* <Passos /> */}

                </BoxContainer>
            </div>

        </Container>
    )
}

export default Home;