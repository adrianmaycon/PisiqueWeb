import styled from 'styled-components';

export const Container = styled.div`

    #container-choices {
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content:  space-evenly;
        width: 100vw;
        height: 100vh;
        background: var(--color-secundary-background);
    }

    #app-bar-choices {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: absolute;
        width: 90%;
        height: 10rem;
        z-index: 1000;
    } 

    #app-bar-choices .icon-close {
        color: var(--color-background);
        font-size: 3rem;
        cursor: pointer;
        margin-right: 10px;
        transition: 0.2s;
    }

    #app-bar-choices .icon-close:hover {
        font-size: 3.2rem;
        margin-right: 8px;
        color: #ffffff;
    }

    #container-choices header h1 {
        font-size: 5rem;
        font-family: Nunito;
        color: #ffffff;
    }

    #container-choices footer button {
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3.5rem;
        background: var(--color-secundary-background);
        border: 1px solid var(--color-background) ;
        position: relative;
        color: #f3f0f1;
        border-radius: 5px;
        border-radius: 32px;
        text-align: center;
        margin-left: 25px;
        cursor: pointer;
    }

    #container-choices footer .row {
        display: flex;
    }

    #container-choices footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        height: 200px;
        max-width: 700px;
    }

    #container-choices footer h1 {
        font-size: 4.2rem;
        font-family: Nunito;
        color: #ffffff;
    }

    #container-choices footer p {
        margin-top: 40px;
        font-family: 'Lato';
        font-size: 2.2rem;
        font-family: Nunito;
        color: var(--color-line-in-white);
        text-align: center;
    }

    #container-choices main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: 90%;
        min-height: 350px;
        max-width: 1000px;
    }

    #container-choices main section img {
        width: 80%;
    }

    #container-choices main section h6 + h6 {
        color: rgba(255, 255, 255, 0);
    }

    #container-choices main section h6 {
        font-family: 'Nunito';
        font-size: 2rem;
        line-height: 2.5rem;
        color: rgb(186, 208, 218);
        transition: 0.6s;
    }

    #container-choices main .select h6 {
        font-size: 2.4rem;
        color: rgb(186, 208, 218);
    }

    #container-choices main section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 2rem;
        width: 22rem;
        height: 27rem;
        background: #1c86cf;
        border-radius: 2rem;
        border: 1px solid #444;
        box-shadow: 0 0 1.3em rgb(31, 29, 29);
        transition: 0.6s;
        cursor: pointer;
    }

    #container-choices .select {
        width: 25rem;
        height: 34rem;
        background: #5154B8;
        border-radius: 2rem;
        border: 1px solid #444;
        box-shadow: 0 0 1.5em rgb(14, 13, 13);
        cursor: pointer;
    }
`;