import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: 60px 0;
    display: flex;
    flex-direction: column;

    @media (min-width: 1300px) {
        width: 90%;
    }
    
    @media (max-width: 800px) {
        transform: rotate(90deg);
        width: 600px;
        padding: 100px 0;
    }
    
    @media (max-width: 610px) {
        margin-top: 100px;
        height: 100vw;
        justify-content: center;
    }

    @media (max-width: 400px) {
        margin-top: 150px;
    }

    @media (max-width: 300px) {
        margin-top: 180px;
    }
`;

export const Body = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 1fr;
    height: 30px;
    /* border: 1px solid #333; */

    @media (max-width: 610px) {
        height: 20px;
    }
`;

export const BoxCont = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 1fr;
`;

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${p => p.end ? 'flex-end' : 'flex-start'};

    h1 {
        font-family: var(--font-publi-kiwi);
        color: #191919;
        opacity: 0.9;
    }

    @media (max-width: 800px) {
        h1 {
            padding: 30px 0px;
            transform: rotate(270deg);
        }
    }

    @media (max-width: 610px) {
        h1 {
            font-size: 2.5rem;
        }
    }
`;

export const Linh = styled.div`
    width: 2px;
    height: 100px;
    background-color: #333;
    opacity: 1;

    @media (max-width: 610px) {
        height: 55px;
    }
`;

export const Circle = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${p => p.color ? p.color : '#333'};
    border: 2px solid #333;
    opacity: 1;
    transition: 0.4s;

    .icon-timeline {
        font-size: 3rem;
        color: #fff;
        transition: 0.3s;
    }

    :hover {
        opacity: 1;
        box-shadow: inset 0 0 2rem #333;

        .icon-timeline {
            font-size: 4rem;
        }
    }

    @media (max-width: 800px) {
        transform: rotate(270deg);
    }

    @media (max-width: 610px) {
        width: 50px;
        height: 50px;

        .icon-timeline {
            font-size: 2rem;
        }

        :hover {
            .icon-timeline {
                font-size: 3rem;
            }
        }
    }
`;

export const Bar = styled.div`
    background-color: ${p => p.color ? p.color : '#f0f0f0'};
    opacity: ${p => p.opacityOn ? '0.8' : '1'};
`;