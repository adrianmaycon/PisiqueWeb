import React, { useState } from 'react';
import NavBar from '../../components/NavBar';

import { IoPlayCircleOutline } from "react-icons/io5";
import { Container, BoxContainer } from './styled';
import videobanner from '../../assets/images/back-video.jpg';


function Home() {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <NavBar openProps={open} close={() => setOpen(false)} />

            <BoxContainer>
                <header>
                    <h1>Venha fazer parte da <span>Família Pisiquê</span></h1>

                    <p>Todos unidos em um só lugar, onde possa aprender, ensinar e assima de tudo ter uma relação saudável.</p>

                    <div className="container-video">
                        <img className="video" src={videobanner} alt="" />

                        <div className="button-video">
                            <IoPlayCircleOutline id="icon-play"/>
                            <h4>Conheça mais sobre nós</h4>
                        </div>
                    </div>
                </header>

            </BoxContainer>
        </Container>
    )
}

export default Home;