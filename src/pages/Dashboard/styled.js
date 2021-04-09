import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    background: #ffffff;

    nav {
        align-items: flex-start;
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 300px;
        min-width: 300px;
        background:  #29348e;
    }

    nav ul {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
    }

    nav ul .menu-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        overflow: auto;

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
    }

    nav ul #logo{
        width: 60%;
        margin: 3rem 0;
        cursor: pointer;
    }

    nav ul #container-org{
        margin-top: 5rem;
        width: 80%;
    }

    nav ul #container-org .link{
        text-decoration: none;
        margin: 0;
        padding: 0;
        background-color: #fff;
    }

    nav ul li {
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

    nav ul li .icon{
        font-size: 2rem;
        margin-right: 2rem;
        color: #535caa;
        transition: 0.3s;
    }
    
    nav ul #select {
        font-size: 1.8rem;
        background-color: transparent;
        color: #fff;
        border-radius: 1.5rem;
        letter-spacing: .2rem;
        /* font-weight: 600; */
    }

    nav ul #select .icon{
        color: #fff;
        font-size: 2.5rem;
    }

    nav ul li {
        border-radius: 1.5rem;
    }
`;

export const ContDiv = styled.div`
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