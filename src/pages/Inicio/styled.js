import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../../components/BaseAnimation';

const FadeInAnimation = keyframes`  
    from { 
        opacity: 0;
    }
    to { 
        opacity: 1;
    }
`;

export const FadeIn = styled(BaseAnimation)`
  animation-name: ${FadeInAnimation};
`;

export const Container = styled.div`
  
    #page-landing {
        width: 100vw;
        height: 100vh;
        overflow: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-text-in-primary);
        background: var(--color-primary);
    }

    .logo-container img {
        height: 8rem;
        margin-top: 100px;
    }

    .hero-image{
        width: 100%;
    }

    .logo-container {
        text-align: center;
        margin-bottom: 3.2rem;
    }

    .logo-container h2 {
        font-weight: 500;
        font-size: 2.0rem;
        font-family: 'Lato', sans-serif;
        line-height: 4.6rem;
        margin-top: 0.8rem;
    }

    .buttons-container {
        display: flex;
        justify-content: center;
        margin: 3.2rem 0;
    }

    .buttons-container a {
        width: 30rem;
        height: 6rem;
        border-radius: 0.8rem;
        font: 700 1.6rem Archivo;

        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;
        color: var(--color-button-text);

        transition: background-color 0.2s;
    }

    .buttons-container a:first-child {
        margin-right: 1.6rem;
    }

    .buttons-container a img {
        width: 3rem;
    }

    .buttons-container .icon {
        display: none;
    }

    .buttons-container a.profissional {
        background: var(--color-primary-lighter);
        transition: transform 100ms ease-in;
    }

    a.profissional:active {
        transform: scale(0.95);
    }

    .buttons-container a.apoio {
        background: var(--color-secundary);
        transition: transform 100ms ease-in;
    }

    a.apoio:active {
        transform: scale(0.95);
    }

    .buttons-container a.profissional:hover {
        background: var(--color-primary-light);
    }

    .buttons-container a.apoio:hover {
        background: var(--color-secundary-dark);
    }

    .buttons-container a img {
        margin-right: 2.4rem;
    }

    .total-connections {
        font-size: 1.6rem;
        font-weight: 700;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .total-connections #img {
        margin-left: 0.5rem;
        height: 15px;
    }

    @media (min-width: 380px){
        .buttons-container .icon {
            display: flex;
            font-size: 3rem;
            margin-right: 1rem;
        }
    }

    @media (min-width: 800px){
        .buttons-container a {
            height: 9rem;
        }
    }

    @media (min-width: 1100px){
        #page-landing-content {
            max-width: 1150px;
            display: grid;
            grid-template-rows: 350px 1fr;
            grid-template-columns: 2fr 1fr 1fr;
            grid-template-areas: 
            "logo hero hero" 
            "buttons buttons total"
            ;
        }

        .logo-container {
            grid-area: logo;
            align-self: center;
            text-align: left;
            margin: 0;
        }

        .logo-container h2 {
            text-align: initial;
            font-size: 3.6rem;
        }

        /* .logo-container img {
            max-height: 13rem;
        } */

        .logo-container img {
            height: 14rem;
        }

        .hero-image{
            grid-area: hero;
            justify-self: end;
        }

        .buttons-container {
            grid-area: buttons;
            justify-content: flex-start;
        }

        .buttons-container a{
            font-size: 2.4rem;
        }

        .buttons-container a img {
            width: 4rem;
        }

        .total-connections {
            grid-area: total;
            justify-self: end;
        }
    }
`