import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    padding: 20px 0;
    padding-top: 0px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    align-items: center;
    overflow-x: hidden;

    h1 {
        width: 100%;
        padding: 0 20px;
        max-width: 900px;
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

    #customers {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    #customers td, #customers th {
        border: 1px solid #ddd;
        padding: 8px;
    }

    #customers tr:nth-child(even){background-color: #f2f2f2}

    #customers tr:hover {background-color: #eee; cursor: pointer;}

    #customers th {
        padding-top: 6px;
        padding-bottom: 6px;
        color: #FFF;
        text-align: left;
        background-color: #4284f0;
    }

    .buscar-grid {
        width: 100%;
        display: grid;
        grid-template-columns: 3.5fr 0.5fr;
        align-items: flex-end;
        margin-bottom: 20px;
        gap: 10px;

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
            margin-bottom: 15px;
            border-radius: 0.8rem;
            border: 1.5px solid var(--color-border-base);
            font-size: 20px;
        }
    }

    main {
        background: var(--color-box-base);
        width: 100%;
        max-width: 1200px;
        margin: 0;
        margin-bottom: 30px;
        padding: 24px;

        .cont-pagination {
            width: 100%;
            margin-top: 20px;
            display: flex;
            justify-content: space-between;

            #numbPagination {
                margin-left: 10px;
                margin-right: 20px;
            }

            .btn-pag {
                width: 20px;
                background-color: #4284f0;
                border: none;
                color: #fff;
                border-radius: 5px;
                margin-right: 5px;
            }
        }

        .div-row-btn {
            width: 100%;
            display: flex;
            justify-content: end;
            margin-bottom: 20px;
        }

        .bnt-access-flash {
            display: flex;
            padding: 15px 30px;
            font-size: 18px;
            line-height: 18px;
            letter-spacing: 1px;
            justify-content: center;
            align-items: center;
            color: #fff;
            border-radius: 10px;
            background: var(--color-primary);
            border: none;
        
            :hover {
                background: var(--color-primary-dark);
            }
        }

        .bnt-access-flash .icon {
            font-size: 22px;
            margin: 0;
            margin-right: 10px;
            color: #fff;
        }
    }

    main table {
        width: 100%;
        min-width: 1000px;
    }

    main .div-table-pro {
        
        border-radius: 10px;
        border: 1px solid #ddd;
        overflow-y: hidden;
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
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
        padding: 24px;
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
        max-width: 300px;
        height: 5.6rem;
        background: var(--color-primary);
        color: var(--color-button-text);
        border: 0;
        text-transform: uppercase;
        border-radius: 0.8rem;
        letter-spacing: 2px;
        cursor: pointer;
        font: 700 1.6rem Archivo;
        display: flex;
        align-items: center;
        font-weight: 600;
        justify-content: center;
        text-decoration: none;
        transition: background-color 0.2s;
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
    }

    @media (max-width: 900px) {
        width: 100%;
        max-width: 900px;
        margin: 0;

        header,
        main,
        h1 {
            width: 90%;
            max-width: 900px;
        }
    }

    @media (max-width: 500px) {
        main footer {
            grid-template-columns: 1fr;
            gap: 20px;
        }
    }

    @media (max-width: 450px) {
        h1 {
            font-size: 20px;
        }
    }
`;