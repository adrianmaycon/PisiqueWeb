import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #f5f8fb;
`

export const Header = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    align-items: flex-end;
    background-color: #123456;

    h1 {
        font-size: 4.5rem;
        margin-left: 350px;
        font-family: 'Rubik', sans-serif;
        font-weight: 500;
        letter-spacing: 0.2rem;
        margin-bottom: 10px;
        color: #fff;
    }
`

export const ContainerImage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 5%;
`

export const Avatar = styled.img`
    width: 250px;
    height: 250px;
    margin-top: -125px;
    border-radius: 60%;
    object-fit: cover;
    background-color: #123456;
    box-shadow: 0 0 0.3em #333;
    padding: 6px;
`