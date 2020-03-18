import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
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
        padding: 10px;
        padding-bottom: 60px;
        justify-content: space-between;
        color: #757575;
`;