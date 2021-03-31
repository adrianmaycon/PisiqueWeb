import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed; 
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
    background-color: rgb(25, 25, 25, 0.5);
    transition: 0.6s;

    .youtube-video {
        width: 90%;
        max-width: 1300px;
        height: 70%;
    }

    @media (max-width: 800px) {
        .youtube-video {
            width: 100%;
            height: 400px;
        }
    }

    @media (max-width: 400px) {
        .youtube-video {
            width: 100%;
            height: 250px;
        }
    }
`;