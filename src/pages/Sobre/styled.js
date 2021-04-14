import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;

    .image-banner {
        width: 100%;
        height: auto;
        border-radius: 1rem 1rem 1rem 1rem;
    }
`;

export const Header = styled.header`
    width: 90%;
    max-width: 1400px;
    margin: 60px 0px;

    .header-container {
        display: grid;
        grid-template-columns: 1.5fr 2.5fr;
        gap: 30px;

        .cont-text {
            width: 100%;

            h4 {
                font-size: 2rem;
                font-family: var(--font-text-inter);
                color: #212121;
                margin-bottom: 20px;
            }
                
            p {
                font-family: var(--font-text-inter);
                font-size: 1.7rem;
                color: #9e9e9e;
            }
        }
    }

    @media (max-width: 800px) {
        margin-top: 30px;

        .header-container {
            grid-template-columns: 1fr;
        }
    }
`;

export const Main = styled.main`
    width: 90%;
    max-width: 1400px;
    margin-top: 30px;

    .timeline-box {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Title = styled.h1`
    font-family: var(--font-text);
    margin-bottom: 30px;
    font-size: 3rem;
    color: #333;

    @media (max-width: 800px) {
        font-size: 2.5rem;
    }
`;