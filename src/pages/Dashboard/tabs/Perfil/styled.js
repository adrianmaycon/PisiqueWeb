import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${p => p.color ? p.color : '#6cb8ff'};
    box-sizing: border-box;
    overflow: auto;
`;

export const Header = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: flex-end;
    background-image: ${p => p.banner ? `url(${p.banner})` : 'url("https://firebasestorage.googleapis.com/v0/b/pisiqueapp.appspot.com/o/fundo.png?alt=media&token=8f4c61b8-cfd8-4054-a699-6e64d59d424a")'};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;

    h1 {
        font-size: 3.5rem;
        font-family: 'Rubik', sans-serif;
        font-weight: 500;
        letter-spacing: 0.2rem;
        color: #191919;
    }

    .divsor {
        width: 90%;
        max-width: 1000px;
        margin-top: -220px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    #update-banner {
        border-radius: 1rem;
        margin-bottom: 20px;
        font-size: 1.5rem;
        border: 1px solid #f0f0f0;
        background-color: #f0f0f0;
        color: #191919;
        cursor: pointer;
        padding: 5px 20px;
        display: flex;
        align-items: center;

        :hover {
            box-shadow: 0 0 1em #333;
            background-color: #b8dcff;
            border: 1px solid #b8dcff;
        }

        .up-icon {
            margin-right: 10px;
        }
    }
`;

export const ContainerInfos = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 0.5em #333;
    background-color: rgb(255, 255, 255);
    padding-top: 40px;
    border-radius: 2rem;
    
    header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .up-icon {
            width: 50px;
            height: 50px;
            font-size: 3rem;
            margin-left: 20px;
            background-color: #123456;
            color: #fff;
            cursor: pointer;
            padding: 10px;
            border-radius: 50%;
            transition: 0.2s;
        }

        .av-icon {
            width: 50px;
            height: 50px;
            font-size: 3rem;
            margin-right: 20px;
            background-color: #537da7;
            color: #fff;
            cursor: pointer;
            padding: 10px;
            border-radius: 50%;
            transition: 0.2s;
        }

        @media (max-width: 380px) {
            .up-icon {
                width: 40px;
                height: 40px;
                margin-left: 10px;

                :hover {
                    width: 40px;
                    height: 40px;
                }
            }

            .av-icon {
                width: 40px;
                height: 40px;
                margin-right: 10px;

                :hover {
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }

    main {
        background: var(--color-box-base);
        width: 100%;
        max-width: 74rem;
        border-radius: 2rem;
        overflow: hidden;

        form {
            display: flex;
            flex-direction: column;
            align-items: center;

            .cont-dados {
                padding: 0 2.4rem;
                margin-bottom: 60px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                
                font-size: 2rem;

                #edit-date {
                    margin-right: 10px;
                    width: 20px;
                    height: 20px;
                }
            }
        }

        .off-mouse {
            cursor: no-drop;
        }

        .div-2 {
            display: grid;
            grid-template-columns: 2.5fr 1.5fr;
            gap: 20px;
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

        .div-date {
            display: grid;
            grid-template-columns: 2fr 2fr ;
            grid-gap: 1.6rem;
            align-items: center;
        }

        .div-dados {
            grid-template-columns: 1.3fr 2.7fr;
        }

        fieldset {
            border: 0;
            padding: 0 2.4rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem;
        }

        fieldset + fieldset {
            margin-top: 6.4rem;
        }

        fieldset legend {
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

        fieldset legend button {
            background: none;
            border: 0;
            color: var(--color-primary);
            font: 700 1.6rem Archivo;
            cursor: pointer;
            transition: color 0.2s;
        }

        fieldset legend button:hover {
            color: var(--color-primary-dark);
        }

        fieldset .input-block + .textarea-block,
        fieldset .select-block + .input-block {
            margin-top: 2.4rem;
        }

        label {
            color: var(--color-text-complement);
        }

        footer {
            width: 100%;
            padding: 4rem 2.4rem;
            background: var(--color-box-footer);
            border-top: 1px solid var(--color-line-in-white);
            margin-top: 6.4rem;
        }

        footer p {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
            line-height: 2.4rem;
            color: var(--color-text-complement);
        }

        footer p img {
            margin-right: 2rem;
        }

        footer button {
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

        footer button:hover {
            background: var(--color-secundary-dark);
        }

        @media (min-width: 500px) {
            .div-dados {
                display: grid;
                grid-template-columns: 2fr 2fr;
                grid-gap: 1.6rem;
                align-items: center;
            }
        }

        @media (max-width: 400px) {
            .div-end-rua,
            .div-date {
                grid-template-columns: 4fr;
            }
        }

        @media (min-width: 700px) {
            max-width: 100vw;

            form {
                .cont-dados {
                    padding: 0 6.4rem;
                    width: 100%;
                }
            }

            .text-termos {
                font-size: 16px;
            }

            .cont-div {
                grid-template-columns: 3fr 1fr;
                grid-gap: 1.6rem;
            }

            .div-names {
                display: grid;
                grid-template-columns: 2.5fr 1.5fr;
                grid-gap: 1.6rem;
                align-items: center;
            }

            .div-dados {
                grid-template-columns: 1.3fr 2.7fr;
            }

            .div-end {
                display: grid;
                grid-template-columns: 1.5fr 2.5fr;
                grid-gap: 1.6rem;
                align-items: center;
            }

            .div-end-pais {
                display: grid;
                grid-template-columns: 1.5fr 1.5fr 1fr;
                grid-gap: 1.6rem;
                align-items: center;
            }

            .div-date {
                display: grid;
                grid-template-columns: 2fr 2fr ;
                grid-gap: 1.6rem;
                align-items: center;
            }

            .page-header .header-content {
                margin-bottom: 0;
            }

            fieldset {
                padding: 0 6.4rem;
            }

            .schedule-item {
                display: grid;
                grid-template-columns: 2fr 1fr 1fr;
                grid-gap: 1.6rem;
                margin-bottom: 20px;
            }
            .division-row .input-block,
            .schedule-item .input-block {
                margin-top: 0 !important;
            }

            .division-row {
                display: grid;
                grid-template-columns: 2fr 2fr;
                grid-gap: 1.6rem;
                margin-bottom: 20px;
            }

            footer {
                padding: 4.0rem 6.4rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            footer p {
                justify-content: space-between;
            }

            footer button {
                width: 20rem;
                margin-top: 0;
            }
        }
    }
`;

export const Avatar = styled.img`
    width: 200px; 
    height: 200px;
    margin: 20px 0;
    border-radius: 50%;
    object-fit: cover;
    background-color: #f9f9f9;

    @media (max-width: 500px) {
        width: 140px; 
        height: 140px;
    }

    @media (max-width: 380px) {
        width: 120px; 
        height: 120px;
    }
`;