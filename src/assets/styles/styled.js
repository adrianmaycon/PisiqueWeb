import styled from 'styled-components';

export const Modal = styled.div `
    position: fixed;
    display: ${(p) => p.open ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    z-index: 900;
    width: 100vw;
    height: 100vh;
    top: 0;
    bottom: 0;
    background: rgb(255,255,255,0.9);
    
    .containerModal {
        overflow-y: hidden;
    }
`;

export const ButtonLittle = styled.button `
    padding: 10px 15px;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.primaryMedium};
    transition: 0.2s;
    cursor: pointer;
    
    :hover {
        background-color: ${({ theme }) => theme.colors.primaryMediumHover};
    }
`;

export const Button = styled.button `
    width: 100%;
    height: 60px;
    background-color: var(--color-primary);
    color: #fff;
    border-radius: 10px;
    margin-top: 15px;
    cursor: pointer;
    font-size: 18px;
    border: none;

    :hover {
        background-color: var(--color-primary-dark);
    }
`;