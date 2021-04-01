import React, { useState } from 'react';
import NavBar from '../../components/NavBar';

import { IoPlayCircleOutline } from "react-icons/io5";
import { Container, BoxContainer, Description, FadeIn, /**Button, Row */ } from './styled';
import videobanner from '../../assets/images/back-video.jpg';
// import Passos from './Passos';
import ModalVideo from './ModalVideo';


function Home() {
    const [open, setOpen] = useState(false);
    const [openVideo, setOpenVideo] = useState(false)

    return (
        <Container>
            {openVideo && <ModalVideo close={() => setOpenVideo(false)} />}
            <NavBar openProps={open} close={() => setOpen(false)} />

            <BoxContainer>
                <header>
                    <FadeIn duration="0.4s" delay="0.2s">
                        <h1>Venha fazer parte da <span>Família Pisiquê</span></h1>
                    </FadeIn>

                    <FadeIn duration="0.6s" delay="0.4s">
                        <Description>Todos unidos em um só lugar, para aprender, ensinar e assima de tudo ter uma relação saudável.</Description>
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
                            <div className="button-video" onClick={() => setOpenVideo(true)}>
                                <IoPlayCircleOutline id="icon-play" />
                                <h4>Saiba mais sobre a gente</h4>
                            </div>
                        </FadeIn>
                    </div>
                </header>

                {/* <Passos /> */}

            </BoxContainer>
        </Container>
    )
}

export default Home;