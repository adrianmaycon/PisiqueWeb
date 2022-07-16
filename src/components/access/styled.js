import styled from "styled-components";

export const Modal = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1000;
    background-color: rgb(0, 0, 0, 0.3);

    .access-row {
        display: flex;

        form {
            width: 100%;
        }
    }

    .close-access {
        font-size: 45px;
        border-radius: 50%;
        margin-left: 10px;
        margin-right: -45px;
        color: #000;
        cursor: pointer;
        background-color: #fff;
    }

    @media (max-width: 400px) {
        .close-access {
            font-size: 45px;
            border-radius: 50%;
            margin-left: -45px;
            margin-right: 0;
            z-index: 1001;
            color: #000;
            cursor: pointer;
            background-color: #fff;
        }
    }
`;

export const Box = styled.div `
    width: 90%;
    max-width: 350px;
    min-height: 350px;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;

    .logo-acess {
        width: 90%;
    }

    @media (max-width: 400px) {
        width: 100%;
        max-width: 400px;
        height: 100vh;
        justify-content: center;
        border-radius: 0;
    }
`;