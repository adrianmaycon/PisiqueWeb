import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../../components/BaseAnimation';

const FadeInAnimation = keyframes `  
    from { 
        opacity: 0;
    }
    to { 
        opacity: 1;
    }
`;

export const FadeIn = styled(BaseAnimation)
`
  animation-name: ${FadeInAnimation};
`;

export const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: #0D1342;

    .header-cabeca {
        width: 90%;
        max-width: 1200px;
        display: grid;
        grid-template-columns: 1.7fr 2.3fr;
        gap: 20px;
        padding: 50px 0;
    }

    .mobille {
        display: none !important;
    }

    .desktop {
        display: flex;
    }

    .container-info-redes {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h2, p {
            color: #FFF;
        }

        h2 {
            font-size: 40px;
            letter-spacing: 1px;
        }

        p {
            margin-top: 10px;
            font-size: 24px;
            letter-spacing: 1px;
            font-family: 'Inter', sans-serif;
        }

        .siga-nos {
            margin-top: 80px;
            font-size: 18px;
            margin-bottom: 15px;
        }

        .icon {
            margin-right: 20px;
        }

        .box-bott {
            margin-top: 50px;
        }

        #btn-voluntario,
        #btn-apoiador {
            padding: 22px 44px;
            font-size: 20px;
            font-weight: 500;
            letter-spacing: 1px;
            border-radius: 8px;
            color: #ffffff;
            border: none;
            cursor: no-drop;
        }

        #btn-voluntario {
            background-color: #9871F5;
            margin-right: 15px;
            transition: 0.3s;

            :hover {
                background-color: #6a4eaa;
            }
        }

        #btn-apoiador {
            background-color: #82B278;
            transition: 0.3s;

            :hover {
                background-color: #577950;
            }
        }
    }

    .image-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        > div {
            position: unset !important;
        }

        .image {
            object-fit: contain;
            width: 100% !important;
            height: unset !important;
        }
    }

    .container-quem-somos {
        width: 100%;
        min-height: 300px;
        background-color: #fff;
        margin: 80px 0;
    }

    @media (max-width: 1100px) {
        .header-cabeca {
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .container-info-redes {
            margin-bottom: 60px;
        }

        .mobille {
            display: flex !important;
        }

        .desktop {
            display: none;
        }

        .container-info-redes {
            p {
                font-size: 18px;
                margin-bottom: 20px;
            }

            .siga-nos {
                margin-top: 20px;
                font-size: 18px;
                margin-bottom: 15px;
            }

            #btn-voluntario,
            #btn-apoiador {
                padding: 18px 34px;
                font-size: 18px;
            }
        }
    }

    @media (max-width: 460px) {
        .container-info-redes {
            h2 {
                font-size: 2rem;
            }

            p {
                font-size: 15px;
            }

            .box-bott {
                width: 100%;
                display: grid;
                grid-template-columns: 2fr 2fr;
                gap: 20px;
            }

            #btn-apoiador,
            #btn-voluntario {
                z-index: 1;
                width: 100%;
                height: 60px;
                margin: 0px;
                padding: 0;
            }
        }
    }
`;