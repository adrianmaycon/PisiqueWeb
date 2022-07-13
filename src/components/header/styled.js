import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;

    .container-button-menu {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 20px 25px;
        padding-bottom: 0;
    }

    .btn-menu {
        border: none;
        padding: 0;
        margin: 0;
        background-color: transparent;
    }

    #button-entrar {
        background: transparent;
        color: #FFFFFF;
        font-size: 22px;
        border: none;
        margin-right: 10px;
        cursor: not-allowed;

        :hover {
            text-decoration: underline;
        }
    }

    #button-inscrever {
        background: #00b3fa;
        color: #18216B;
        font-size: 20px;
        border: none;
        padding: 8px 15px;
        border-radius: 4px;
        font-weight: 500;
        margin-right: 10px;
        transition: 0.5s;
        cursor: not-allowed;

        :hover {
            background: #ffffff; 
        }
    }

    .bar-sub-info {
        width: 100%;
        padding: 10px 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #18216B;

        a {
            color: #FFFFFF;
            text-decoration: none;
            font-weight: 500;

            :hover {
                text-decoration: underline;
            }
        }
    }

    .max-cont-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        max-width: 1200px;
    }

    .container-menus {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 30px 0;

        h2 {
            text-transform: uppercase;
            color: #FFFFFF;
            cursor: pointer;
        }

        .box-menu {
            display: flex;
            align-items: center;
        }
    }

    .mobille {
        display: none;
    }

    @media (max-width: 1100px) {
        .bar-sub-info,
        .container-menus {
            display: none;
        }

        .mobille {
            display: flex;
        }
    }
`;

export const Menu = styled.p `
    color: #FFFFFF;
    font-size: 18px;
    cursor: pointer;
    letter-spacing: 1px;
    margin: 0px 10px;
    font-weight: ${(p) => p.select ? '600' : '300'};

    :hover {
        text-decoration: underline;
    }
`;

export const LeftBar = styled.div `
    position: fixed;
    top: 0;
    width: 100vw;
    max-width: 600px;
    height: 100vh;
    transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100vw)'};
    transition: all ease-in-out 0.2s;
    background-color: #fff;
    left: 0;
    padding: 24px;
    z-index: 10;

    .cont-close {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

  .btn-menu {
        border: none;
        padding: 0;
        margin: 0;
        background-color: transparent;
    }

    a {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        color: #272D4E;
        text-decoration: none;
    }

    @media (min-width: 1100px) {
        display: none;

        .btn-menu {
            display: none;
        }
    }
`;