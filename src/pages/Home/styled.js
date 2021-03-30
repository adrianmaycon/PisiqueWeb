import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #29348e;
`;

export const Divider = styled.div`
    width: 2px;
    height: 100px;
    background-color: #eaeaea;
    margin-top: -50px;
    z-index: 1;
`;

export const Title = styled.h1`
    font-family: 'Lato';
    font-size: 5rem;
    line-height: 6rem;
    font-weight: 600;
    color: ${p => p.color ? p.color : ' #191919'};
    text-align: center;

    @media (max-width: 1000px) {
        font-size: 4rem;
        line-height: 5rem;
    }

    @media (max-width: 580px) {
        font-size: 3rem;
        line-height: 3.5rem;
    }

    @media (max-width: 430px) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
`;

export const Description = styled.p`
    color: ${p => p.color ? p.color : ' #fff'};
    margin-top: 40px;
    font-weight: 300;
    font-family: 'Inter', sans-serif;
    text-align: center;
    font-size: 2.2rem;

    @media (max-width: 1000px) {
        margin-top: 30px;
        font-size: 1.8rem;
    }

    @media (max-width: 450px) {
        margin-top: 20px;
        font-size: 1.5rem;
    }
`;

export const BoxContainer = styled.div`
    width: 100%;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #29348e;

    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        max-width: 860px;
        min-height: 400px;
        padding: 60px 0;
        padding-bottom: 100px;
        text-align: center;

        span,
        h1 {
            font-size: 7rem;
            font-weight: 600;
            letter-spacing: 0.5rem;
            font-family: 'Kiwi Maru', serif;
            color: #fff;
        }

        span {
            font-size: 7rem;
            line-height: 10rem;
            font-family: 'Kiwi Maru', serif;
            font-weight: 900;
            letter-spacing: 0.8rem;
            background: -webkit-linear-gradient(left, #26c0fe 0%, #fff 100%);
            background: linear-gradient(left, #26c0fe 0%, #fff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .container-video {
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;

            .video {
                margin-top: 60px;
                width: 100%;
                border-radius: 0.6rem;
                box-shadow: 0 0 0.6em rgb(51, 51, 51, 0.5);
                pointer-events: none;
                user-select: none;
                -moz-user-select: none;
                -webkit-user-drag: none;
                -webkit-user-select: none;
                -ms-user-select: none;
            }

            .button-video {
                display: flex;
                align-items: center;
                min-width: 265px;
                height: 56px;
                cursor: pointer;
                background-color: #fff;
                border-radius: 5rem;
                margin-top: -28px;
                padding: 15px;

                #icon-play {
                    color: #999;
                    font-size: 3rem;
                }

                h4 {
                    margin-left: 8px;
                    font-family: 'Inter', sans-serif;
                    font-weight: 500;
                    color: #161616;
                }

                :hover {
                    #icon-play {
                        color: #0064f3;
                    }
                }
            }
        }
    }

    @media (max-width: 1000px) {
        header {
            h1 {
                font-size: 5rem;
            }
            span {
                font-size: 5.5rem;
            }
        }
    }

    @media (max-width: 750px) {
        header {
            h1 {
                font-size: 4rem;
            }
            span {
                font-size: 4.5rem;
            }
        }
    }

    @media (max-width: 560px) {
        header {
            h1 {
                font-size: 3rem;
                line-height: 4rem;
            }
            span {
                font-size: 3.5rem;
                line-height: 4.5rem;
            }
        }
    }

    @media (max-width: 450px) {
        header {
            h1 {
                font-size: 2rem;
                line-height: 3rem;
            }
            span {
                font-size: 2.2rem;
                line-height: 3.2rem;
            }

            .container-video {
                .button-video {
                    min-width: 225px;
                    height: 44px;
                    margin-top: -22px;
                    padding: 5px 15px;

                    #icon-play {
                        font-size: 2rem;
                    }

                    h4 {
                        font-size: 1.4rem;
                    }
                }
            }
        }
    }
`;