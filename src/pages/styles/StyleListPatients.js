import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const PositionCenter = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 1200px;
`;

export const DarkBlue = styled.div`
    width: 100%;
    height: 250px;
    background-color: #1D2975;
    position: fixed;
    z-index: 1;
`;

export const LightGrayishViolet = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f0ebf8;
    position: fixed;
    z-index: 1;
    margin-top: 250px;
`;

export const ContainerPosition = styled.div`
    width: 100%;
    position: relative;
    display: flex; 
    justify-content: center; 
    z-index: 10; 
    margin-top: 50px;
`;

export const ContainerSize = styled.div`
    width: 96%;
    height: 100%;
    max-width: 1700px; 
    min-width: 850px;
    min-height: 1000px;
`;

export const PaperContainer = styled(Paper)`
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        padding-bottom: 60px;
        justify-content: space-between;
        color: #757575;
`;

export const ContainerDialog = styled.div`
        width: 100%;
        min-width: 550px;
        display: flex;
        flex-direction: column;
        align-items: center;
`;

export const BoxRow = styled.div`
    width: 100%;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;
`;

export const BoxPosition = styled.div`
    width: ${props => props.size}%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const BoxTitle = styled.b`
        /* width: 95%; */
        font-size: 15px;
        margin-bottom: 10px;
        font-family: 'Varela Round', sans-serif;
`;

export const BoxText = styled.p`
        /* width: 95%; */
        display: flex;
        font-size: 22px;
        font-family: 'Varela Round', sans-serif;
        align-items: center;
`;
