import React, { useState } from 'react';
import NavBar from '../../components/NavBar';

import { IoPlayCircleOutline } from "react-icons/io5";
import { Container, BoxContainer, Description } from './styled';
import videobanner from '../../assets/images/back-video.jpg';
import Passos from './Passos';


function Home() {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <NavBar openProps={open} close={() => setOpen(false)} />

            <BoxContainer>
                <header>
                    <h1>Venha fazer parte da <span>Família Pisiquê</span></h1>

                    <Description>Todos unidos em um só lugar, onde possa aprender, ensinar e assima de tudo ter uma relação saudável.</Description>

                    <div className="container-video">
                        <img className="video" src={videobanner} alt="" />

                        <div className="button-video">
                            <IoPlayCircleOutline id="icon-play" />
                            <h4>Saiba mais sobre a gente</h4>
                        </div>
                    </div>
                </header>
                
                <Passos />

            </BoxContainer>
        </Container>
    )
}

export default Home;