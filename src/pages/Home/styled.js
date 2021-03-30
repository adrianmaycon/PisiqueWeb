import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #29348e;
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

        p {
            color: #fff;
            margin-top: 40px;
            font-weight: 300;
            font-family: 'Inter', sans-serif;
            font-size: 2.2rem;
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
                user-select: none;
                -moz-user-select: none;
                -webkit-user-drag: none;
                -webkit-user-select: none;
                -ms-user-select: none;
            }

            .button-video {
                display: flex;
                align-items: center;
                min-width: 278px;
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
`;