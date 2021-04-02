import styled from 'styled-components';

export const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    width: 100%;
    align-items: center;
    margin-bottom: 80px;

    #app-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        width: 100vw;
        z-index: 1000;
        background-color: ${p => p.simple ? '#fff' : '#29348e'};
        transition: 0.5s;
        box-shadow: ${p => p.shadowOn ? '0 0 0.8em rgb(51, 51, 51, 0.5)' : 'none'};
        opacity: ${p => p.shadowOn ? '0.95' : '1'};
    }

    .icon-avatar {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        margin-right: 8px;
    }

    .box-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        max-width: 1150px;
        height: 80px;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    nav .icon-menu{
        display: none;
    }

    nav a {
        font-size: 2rem;
        text-decoration:none;
        font-weight: 700;
        color: var(--color-title-in-primary);
        margin-right: 10rem;
    }

    nav a:hover {
        text-decoration: underline;
    }

    .container-modal {
        width: 650px;
        display: flex;
        flex-direction: column;
        margin-top: 60px;
        background: #fff;
        padding: 10px;
        border-radius: 5px;
        overflow:auto;
    }

    .container-modal header {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
    }

    .container-modal main {
        padding: 0 2rem;
        min-height: 200px;
    }

    .container-modal main #division{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .container-modal main #division #create{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 50%;
        padding-bottom: 20px;
    }

    .container-modal main #division #login{
        width: 50%;
        border-right: 1px solid rgba(196, 196, 196, 0.4);
        padding-bottom: 20px;
    }

    .container-modal footer {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 0.5rem 0;
    }

    .container-modal footer p {
        font-size: 2rem;
        font-family: Lato;
        color: rgba(68, 68, 68, 0.8);
        text-decoration: none;
        cursor: pointer;
    }

    .container-modal footer p:hover {
        text-decoration: underline;
    }

    .container-modal main #recover {
        padding-top: 0.8rem;
    }

    .container-modal main form label {
        font-family: 'Lato', Arial, sans-serif;
        font-size: 1.6rem;
        line-height: 2rem;
        color: rgba(68, 68, 68, 0.8);
    }

    .container-modal main form .description {
        font-family: 'Lato', Arial, sans-serif;
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 700;
        color: #444444;
        margin-top: 1.2rem;
        margin-bottom: 0.6rem;
    }

    .container-modal main form span {
        font-family: 'Lato', Arial, sans-serif;
        font-size: 1.5rem;
        line-height: 1.5rem;
        font-weight: 700;
        color: var(--color-text-error);
        margin: 0.2rem 0;
    }

    .container-modal main form span #iconError {
        font-size: 1.4rem;
        margin-right: 0.8rem;
    }

    .container-modal main form .submit {
        width: 264px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
        padding: 5px;
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;
        background-color: #1d63c6;
        border: 1px solid #1d63c6;
        transition: 0.2s;
        margin-top: 10px;
        cursor: pointer;
    }

    .container-modal main form .submit:hover {
        background-color: #1A57AD;
        border: 1px solid #1A57AD;
    }

    .container-modal main form .off {
        width: 264px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
        padding: 5px;
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;
        background-color: #202A8A;
        border: 1px solid #202A8A;
        transition: 0.2s;
        margin-top: 10px;
        cursor: pointer;
    }

    .container-modal main form .off:hover {
        background-color: #1d277d;
        border: 1px solid #1d277d;
    }

    .container-modal #title {
        font-family: 'Nunito', sans-serif;
        font-size: 2.5rem;
        line-height: 3rem;
        color: #144487;
        margin-bottom: 0.5rem;
    }

    .container-modal header #closeIcon{
        font-size: 3rem;
        color: rgba(68, 86, 86, 0.6);
        cursor: pointer;
    }

    @media (max-width: 850px) {
        margin-bottom: 60px;

        .box-container {
            height: 60px;
        }

        nav .icon-menu {
            display: flex;
            color: #fff;
            font-size: 4rem;
            cursor: pointer;
        }
        
    }

    .div-popover {
        position: absolute;
        display: flex;
        width: 200px;
        flex-direction: column;
        align-items: center;
        flex-direction: column;
        background: #fff;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
        border-radius: 3px;
        margin-top: 5px;
    }

    .div-popover header{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1.5rem 0;
    }

    .div-popover a {
        width: 100%;
        color: var(--color-text-base);
        font-size: 1.5rem;
        text-decoration: none;
        cursor: pointer;
        font-weight: 400;
    }

    .div-popover a:hover {
        text-decoration: underline;
    }

    .div-popover .avatar {
        width: 100px;
        height: 100px;
        background-color: #e9e9e9;
        border-radius: 50%;
        margin-bottom: 10px;
    }

    .div-popover main{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1.5rem 2rem;
        border-top: 1px solid rgba(68, 68, 68, 0.5);
    }

    .div-popover main a + a {
        margin-top: 1rem;
    }
    
    @media (max-width: 730px) {

        .container-modal {
            width: 100vw;
            height: 100vh;
            min-height: 700px;
            max-width: 100%;
            border-radius: 0px;
            flex-wrap: wrap;
            margin-top: 50px;
            padding: 1.5rem;
        }

        .container-modal header #closeIcon{
            display: none;
        }

        .container-modal main {
            padding: 0;       
            overflow:auto;
        }

        .container-modal main #division{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
        }

        .container-modal main #division #create{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 0px;
        }
        
        .container-modal main #division #login{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-right: 0px solid rgba(196, 196, 196, 0.4);
            border-bottom: 1px solid rgba(196, 196, 196, 0.4);
            padding-bottom: 20px;
        }

    }
`;

export const Logo = styled.img`
    height: 30px;
    width: auto;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    @media (max-width: 950px) {
        height: 25px;
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    /* background-color: #eee; */

    .link {
        color: ${p => p.simple ? '#666' : '#fff'};
        margin-right: 40px;
        font-family: 'Inter', sans-serif;
        letter-spacing: 0.2rem;
        font-size: 1.6rem;
        line-height: 1.8rem;
        font-weight: 400;
    }

    @media (max-width: 950px) {
        .link {
            font-size: 1.5rem;
            line-height: 1.7rem; 
            margin-right: 25px;
        } 
    }

    @media (max-width: 850px) {
        display: none;
    }
`;

export const LinksContainer = styled.div`
    /* border: 1px solid rgba(255, 255, 255, 0); */
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;
    border: 0 none;

    span {
        color: #fff;
        font-family: Nunito;
        font-size: 1.8rem;
        line-height: 2rem;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    span .icon {
        font-size: 2rem;
        color: rgba(255, 255, 255, 0.9);
    }

    @media (max-width: 850px) {
        .icon,
        .nome {
            display: none;
        }
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;

    .signIn {
        color: ${p => p.simple ? '#666' : '#fff'};
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 2rem;
        margin-right: 20px;
        cursor: pointer;
    }

    .signUp{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid ${p => p.simple ? '#191919' : '#26c0fe'};
        padding: 5px;
        background-color: ${p => p.simple ? '#191919' : '#26c0fe'};
        border-radius: 3px;
        padding: 0.5rem 1.2rem;
        color: ${p => p.simple ? '#eaeaea' : '#000'};
        font-size: 1.8rem;
        line-height: 26px;
        font-family: 'Inter', sans-serif;
        cursor: pointer;
        box-shadow: 0 0 0.2em rgb(51, 51, 51, 0.5);
    }

    @media (max-width: 1000px) {
        .signIn {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid ${p => p.simple ? '#191919' : '#26c0fe'};
            background-color: ${p => p.simple ? '#191919' : '#26c0fe'};
            border-radius: 3px;
            font-weight: 500;
            padding: 0.5rem 1.2rem;
            color: ${p => p.simple ? '#eaeaea' : '#000'};
            font-size: 1.8rem;
            line-height: 26px;
            font-family: 'Inter', sans-serif;
            cursor: pointer;
            box-shadow: 0 0 0.2em rgb(51, 51, 51, 0.5);
            margin-right: 0;
        }

        .signUp{
            display: none;
        }
    }
`;