import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ebecf0;

    p, input, select, textarea, button {
        font-family: 'Montserrat', sans-serif;
        letter-spacing: -0.2px;
        font-size: 16px;
    }

    div, p {
        color: #babecc;
        text-shadow: 1px 1px 1px #fff;
    }

    form {
        padding: 16px;
        width: 320px;
        margin: 0 auto;
    }

    .segment {
        padding: 32px 0;
        text-align: center;
        margin-bottom: 10px;
    }

    button, input {
        border: 0;
        outline: 0;
        font-size: 16px;
        border-radius: 320px;
        padding: 16px;
        background-color: #ebecf0;
        text-shadow: 1px 1px 0 #fff;
    }

    label {
        display: block;
        margin-bottom: 24px;
        width: 100%;
    }

    input {
        margin-right: 8px;
        box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
        width: 100%;
        box-sizing: border-box;
        transition: all 0.2s ease-in-out;
        appearance: none;
        -webkit-appearance: none;
    }

    input:focus {
        box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
    }
    
    button {
        color: #61677c;
        font-weight: bold;
        box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        font-weight: 600;
    }

    button:hover {
        box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
    }

    button:active {
        box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
    }

    button .icon {
        margin-right: 8px;
    }

    button.unit {
        border-radius: 8px;
        line-height: 0;
        width: 48px;
        height: 48px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 8px;
        font-size: 19.2px;
    }

    button.unit .icon {
        margin-right: 0;
    }

    button.red {
        display: block;
        width: 100%;
        color: #ae1100;
    }

    .input-group {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .input-group label {
        margin: 0;
        flex: 1;
    } 
`;