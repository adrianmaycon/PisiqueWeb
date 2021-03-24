import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

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
        border-radius: 0.8rem;
        margin: -5.2rem auto 3.2rem;
        padding-top: 6.4rem;
        overflow: hidden;
        box-shadow: 2px 2px 10px #888888;
    }

    main fieldset {
        border: 0;
        padding: 0 2.4rem;
    }

    main fieldset {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
    }

    main fieldset + fieldset {
        margin-top: 6.4rem;
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
        padding: 4rem 2.4rem;
        background: var(--color-box-footer);
        border-top: 1px solid var(--color-line-in-white);
        margin-top: 6.4rem;
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
        background: var(--color-secundary);
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
        background: var(--color-secundary-dark);
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

        main fieldset {
            padding: 0 6.4rem;
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
`