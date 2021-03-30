import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fbfbfb;
    height: 800px;
    
    main {
        width: 90%;
        padding: 80px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 860px;
    }

    .banner-passos {
        width: 100%;
        max-width: 1104px;
        pointer-events: none;
    }
`;