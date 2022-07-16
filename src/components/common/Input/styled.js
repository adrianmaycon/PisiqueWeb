import styled from 'styled-components';

export const ContainerInput = styled.div `
    position: relative;
    margin-bottom: 1.4rem;
    width: 100%;

    label {
        font-size: 1.4rem;
    }

    input {
        width: 100%;
        height: 5.0rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        background: var(--color-box-base);
        border: 1.5px solid var(--color-border-base);
        outline: 0;
        padding: 0 1.6rem;
        font: 1.6rem Archivo;
        color: #444;
        ${p => p.error && 'border: 2px solid red;'}
        ${p => p.success && 'border: 2px solid #00f201;'}
        
    }
`;