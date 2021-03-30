import React from 'react';
import { Container } from './styled';
import { Divider, Title, Description } from '../styled';
import banner from '../../../assets/images/banner-passos.png';

function Passos() {

    return (
        <Container>
            <Divider />

            <main>
                <Title>Como funciona a plataforma</Title>

                <Description color="#666666">Qualquer um que comporte-se acordado da mesma maneira que se comporta nos sonhos será visto como louco</Description>
            </main>

            <img className="banner-passos" src={banner} alt="" />
        </Container>
    )
}

export default Passos;