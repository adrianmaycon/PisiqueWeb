import styled from 'styled-components'
import { Grid } from '@material-ui/core';

export const Container = styled(Grid)`
    background-image: url(https://conteudo.imguol.com.br/c/noticias/26/2019/12/20/tecnologia-dados-saude-health-tech-digital-digitalizacao-1576876624906_v2_1920x1280.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
`;

export const Body = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: Montserrat, sans-serif;
    height: 98.3vh;
`;

export const Box = styled(Grid)`
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
        0 10px 10px rgba(0,0,0,0.22);
    position: relative;
    overflow: hidden;
    width: 700px;
    min-width: 856px;
    max-width: 990px;
    min-height: 480px;
`;
export const Button = styled.button`
    width: 80%;
    border: 1px solid #5c7bd7;
    border-radius: 18px;
    margin-top: 10px;
    height: 40px;
    background-color: #3f51b5;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
`;
export const ButtonSecundary = styled.button`
    border-radius: 20px;
    border: 1px solid #5c7bd7;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    background-color: transparent;
	border-color: #FFFFFF;
`;

export const Form = styled.form`
    width: 100%;
    margin-top: 2px;
`;

export const Title = styled.h1`
    font-family: 'Baloo Chettan 2', cursive;
    font-size: ${props => props.size}px;
`;

//height: 50px;
export const Info = styled.div`
    z-index: 10;
    width: 90%;
    max-width: 850px;
    padding: 15px;
    display: flex;
    margin-bottom: 10px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: #fff4e5;

    h5 {
        margin-left: 20px;
    }
`;

export const Link = styled.span`
    color: #007bff;
    margin-top: 10px;
    font-size: 14px;
`;
