import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    header {
        width: 90%;
        max-width: 74rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 6px solid var(--color-primary);
        border-bottom: 0;
        padding: 10px 0px;
    }

    h1 {
        width: 90%;
        padding: 0 20px;
        max-width: 74rem;
        color: #fff;
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 28px;
        line-height: 42px;
        text-align: center;
        background: var(--color-primary);
    }
    
    .logo-instituto-pisique {
        width: 80%;
        max-width: 300px;
    }

    .off-mouse {
        cursor: no-drop;
    }

    .text-termos {
        font-size: 12px;
    }

    .cont-div {
        display: grid;
        grid-template-columns: 2.5fr 1.5fr;
        grid-gap: 1.6rem;
    }

    .div-end-rua {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: 1.6rem;
        align-items: center;
    }

    .page-header .header-content {
        margin-bottom: 6.4rem;
    }

    main {
        background: var(--color-box-base);
        width: 90%;
        max-width: 74rem;
        margin: 0;
        padding: 24px;
        overflow: hidden;
        border: 6px solid var(--color-primary);
        border-top: 0;
        /* box-shadow: 2px 2px 10px #888888; */
    }

    main fieldset {
        border: 0;
    }

    main fieldset {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
    }

    main fieldset + fieldset {
        margin-top: 4.4rem;
    }

    main fieldset legend {
        font: 700 2.4rem Archivo;
        color: var(--color-text-title);
        margin-bottom: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid var(--color-line-in-white);
    }

    main fieldset legend button {
        background: none;
        border: 0;
        color: var(--color-primary);
        font: 700 1.6rem Archivo;
        cursor: pointer;
        transition: color 0.2s;
    }

    main fieldset legend button:hover {
        color: var(--color-primary-dark);
    }

    main fieldset .input-block + .textarea-block,
    main fieldset .select-block + .input-block {
        margin-top: 2.4rem;
    }

    main label {
        color: var(--color-text-complement);
    }

    main footer {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: var(--color-box-footer);
        border-top: 1px solid var(--color-line-in-white);

        a {
            text-decoration: none;
        }

        .cancelar {
            background-color: rgb(0, 0, 0, 0.4);

            :hover {
                background-color: rgb(0, 0, 0, 0.6);
            }
        }
    }

    main footer p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: var(--color-text-complement);
    }

    main footer p img {
        margin-right: 2rem;
    }

    main footer button {
        width: 100%;
        height: 5.6rem;
        background: var(--color-primary);
        color: var(--color-button-text);
        border: 0;
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.6rem Archivo;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: background-color 0.2s;
        margin-top: 3.2rem;
    }

    main footer button:hover {
        background: var(--color-primary-dark);
    }

    @media (min-width: 500px) {
        main .div-dados {
            display: grid;
            grid-template-columns: 2fr 2fr;
            grid-gap: 1.6rem;
            align-items: center;
        }
    }

    @media (min-width: 700px) {
        max-width: 100vw;

        .text-termos {
            font-size: 16px;
        }

        .cont-div {
            grid-template-columns: 3fr 1fr;
            grid-gap: 1.6rem;
        }

        main .div-names {
            display: grid;
            grid-template-columns: 2.5fr 1.5fr;
            grid-gap: 1.6rem;
            align-items: center;
        }

        main .div-dados {
            grid-template-columns: 1.3fr 2.7fr;
        }

        main .div-end {
            display: grid;
            grid-template-columns: 1.5fr 2.5fr;
            grid-gap: 1.6rem;
            align-items: center;
        }

        main .div-end-pais {
            display: grid;
            grid-template-columns: 1.5fr 1.5fr 1fr;
            grid-gap: 1.6rem;
            align-items: center;
        }

        main .div-date {
            display: grid;
            grid-template-columns: 2fr 2fr ;
            grid-gap: 1.6rem;
            align-items: center;
        }

        .page-header .header-content {
            margin-bottom: 0;
        }

        main .schedule-item {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            grid-gap: 1.6rem;
            margin-bottom: 20px;
        }
        main .division-row .input-block,
        main .schedule-item .input-block {
            margin-top: 0 !important;
        }

        main .division-row {
            display: grid;
            grid-template-columns: 2fr 2fr;
            grid-gap: 1.6rem;
            margin-bottom: 20px;
        }

        main footer {
            padding: 4.0rem 6.4rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        main footer p {
            justify-content: space-between;
        }

        main footer button {
            width: 20rem;
            margin-top: 0;
        }
    }

    @media (max-width: 450px) {
        h1 {
            font-size: 20px;
        }
    }
`