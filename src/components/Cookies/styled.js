import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
    from {
        bottom: -300px; 
        opacity: 0;
    }

    to {
        bottom: 0; 
        opacity: 1;
    }
`; 

export const ModalContent = styled.div`
    position: fixed;
    display: ${props => props.open ? 'flex' : 'none'};
    justify-content: center;
    bottom: 0;
    z-index: 100;
    -webkit-animation-name: ${slideIn};
    -webkit-animation-duration: 1s;
    animation-name: ${slideIn};
    animation-duration: 0.4s;
    width: 100%;
    background-color: #3254b8;
    box-shadow: 0 0 2em #000;

    @media (min-width: 1000px) {
        background-color: transparent;
        justify-content: flex-end;
        box-shadow: none;
    }
`;

export const Container = styled.div`
    width: 100%;
    white-space: normal;
    padding: 50px;

    @media (max-width: 500px) {
        padding: 30px;
    }

    @media (min-width: 1000px) {
        padding: 30px;
        background-color: #fff;
        border-radius: 20rem 0 0 0;
        width: 462px;
        max-width: 462px;
        box-shadow: 0 0 1em #191919;

        .cont-box-cokie {
            padding: 30px;
            box-shadow: 0 0 1em #123456;
            border-radius: 1rem 0 10rem 0;
            background-color: #3254b8;
        }
    }

`;

export const Title = styled.h1`
    font-family: var(--font-text);
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.02em;
    margin-bottom: 10px;
    white-space: normal;
    color: #fff;

    @media (min-width: 400px) {
        font-size: 18px;
        line-height: 24px;
    }
`;

export const Description = styled.h2`
    font-family: var(--font-text);
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.01em;
    color: #fff;
    margin-bottom: 0;
    max-width: 100%;

    a {
        color: #00FF00;
        text-decoration: none;
    }

    @media (min-width: 400px) {
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.01em;
    }
`;

export const Button = styled.button`
    border: 0;
    box-sizing: border-box;
    padding: 10px 12px;
    color: #191919;
    font-weight: 500;
    border-radius: 1rem;
    box-shadow: inset 0 0 0.5em #3254b8;
    font-family: var(--font-text-inter);
    font-style: normal;
    font-weight: 500;
    background-color: #fff;
    margin-top: 13px;
    cursor: pointer;
    transition: 0.3s;

    :hover {
        box-shadow: inset 0 0 0.5em #3254b8, 0 0 1em #123456;
        color: #123456;
    }
`;