import styled from 'styled-components';

export const Modal = styled.div`
    display: ${p => p.open ? 'flex' : 'none'};
    position: fixed;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: rgb(45, 45, 45, 0.4);
    /* opacity: 0.4; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 800px;
    background-color: #fff;
    border-radius: 1.5rem;
    padding: 30px;

    header {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .title {
            font-size: 3rem;
        }
    }

    form {
        display: flex;
        align-items: center;
        margin-top: 20px;

        input {
            margin-right: 5px;
        }

        label {
            margin-right: 20px;
            cursor: pointer;
        }
    }

    main {
        width: 100%;
        min-height: 600px;
        max-height: 70vh;
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
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
`;

export const Close = styled.img`
    width: 40px;
    cursor: pointer;
`;

export const Avatar = styled.img`
    width: 110px;
    height: 110px;
    cursor: pointer;
    background-color: ${p => p.color ? p.color : '#e9e9e9'};
    padding: 10px;
    margin: 20px;
    border-radius: 2rem;
`;