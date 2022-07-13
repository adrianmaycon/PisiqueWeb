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
    width: ${(p) => p.width ? p.width : "225px"};
    height: ${(p) => p.heightSize || '60px'};
    font-family: ${({ theme }) => theme.font.family.default};
    background: ${(p) => p.background ? p.background : `#009EE2`};
    border-radius: ${(p) => p.borderRadius ? p.borderRadius : "60px"};
    font-style: normal;
    font-weight: ${(p) => p.weight ? p.weight : "500"};
    font-size: ${(p) => p.size ? p.size : "18px"};
    line-height: ${(p) => p.lineHeight ? p.lineHeight : "21px"};
    text-align: center;
    color: ${(p) => p.color ? p.color : `#FFFFFF`};
    border: none;
    padding: ${(p) => p.padding};
    transition: 0.3s;
    margin-top: ${(p) => p.marginTop};
    margin-left: ${(p) => p.marginLeft};
    margin-right: ${(p) => p.marginRight};
    margin-bottom: ${(p) => p.marginBottom};

    :hover {
        background: ${(p) => p.background ? p.background : `#00608a`};
    }
`;