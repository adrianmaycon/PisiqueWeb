import styled from 'styled-components';

export const Container = styled.div `
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    background: #ffffff;
    top: 0;
    left: 0;
    bottom: 0;
    box-sizing: border-box;

    .div-btn-off {
        display: ${p => p.openNav ? 'flex' : 'none'};
        width: 100%;
        height: 100vh;
        background-color: rgb(0, 0, 0, 0.4);
    }

    .row {
        display: flex;
    }

    .cont-pages {
        width: 100%;
        
        .header-pages {
            width: 100%;
            display: flex;
            justify-content: space-between;
            background-color: #fff;
            border-bottom: 1px solid #eee;
            padding: 5px 10px;
        }
    }

    .menu-icon {
        display: none;
        width: 40px;
        height: 40px;
        font-size: 2rem;
        color: #111;
        cursor: pointer;
    }

    @media (max-width: 1000px ) {
        .row {
            width: 100%;
            position: fixed;
            display: grid;
            grid-template-columns: 300px calc(100% - 300px);
            z-index: 1000;
        }

        .menu-icon { 
            display: flex;
        }
    }

    @media (min-width: 1000px) {
        .div-btn-off {
            display: none;
        }
    }
`;

export const NavContainer = styled.nav `
    display: flex;
    align-items: flex-start;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 300px;
    background:  #29348e;
    margin-left: 0px;

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
    }

    ul #logo{
        width: 60%;
        margin: 3rem 0;
        cursor: pointer;
    }

    ul #container-org{
        margin-top: 5rem;
        width: 80%;
    }

    ul #container-org .link{
        text-decoration: none;
        margin: 0;
        padding: 0;
        background-color: #fff;
    }

    ul li {
        display: flex;
        color: #a9aff0;
        padding: 1.2rem 1rem;
        text-decoration: none;
        align-items: center;
        width: 100%;
        height: 5rem;
        cursor: pointer;
        font-size: 1.6rem;
        margin: 0;
        background-color: #29348e;
        transition: 0.3s;
    }

    ul li .icon{
        font-size: 2rem;
        margin-right: 2rem;
        color: #535caa;
        transition: 0.3s;
    }
    
    ul #select {
        font-size: 1.8rem;
        background-color: transparent;
        color: #fff;
        border-radius: 1.5rem;
        letter-spacing: .2rem;
        /* font-weight: 600; */
    }

    ul #select .icon{
        color: #fff;
        font-size: 2.5rem;
    }

    ul li {
        border-radius: 1.5rem;
    }

    @media (max-width: 1000px) {
        display: ${p => p.openNav ? 'flex' : 'none'};
        box-shadow: 0 0 1rem #333;
    }

    @media (max-width: 400px) {
        width: 80vw;
    }

    
    @media (max-width: 350px ) {
        ul li {
            padding: 1rem 0.6rem;
            height: 4rem;
            font-size: 1.4rem;
        }

        ul #select {
            font-size: 1.2rem;
        }

        ul #select .icon{
            font-size: 2rem;
        }
    }
`;

export const MenuContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    overflow: auto;
    padding-bottom: 20px;
    scrollbar-width: thin;
    scrollbar-color: #26c0fe #29348e;
        

    /* Works on Chrome, Edge, and Safari */
    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        background: #29348e;
        border-radius: 15px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #26c0fe;
        border-radius: 20px;
        border: 3px solid #29348e;
    }
`;

export const ContDiv = styled.div `
    width: 100%;
    margin-top: ${p => p.offMargin ? '0' : '30px'};
    margin-bottom: 15px;

    p {
        color: #fff;
        font-weight: 600;
        letter-spacing: 2px;
        font-size: 14px;
        margin-bottom: 5px;
        font-family: "Google Sans", sans-serif;
        text-transform: uppercase;
        opacity: 0.8;
    }

    hr {
        height: 1px;
        border: 0px;
        background: #535caa;
    }
`;