import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    padding: 30px 50px;
    box-sizing: border-box;
    overflow: auto;

    .division-books {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 30px;
    }
`;