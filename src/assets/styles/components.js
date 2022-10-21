import styled from 'styled-components';

export const LinearProgress = styled.div`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    background-color: #CFD4D2;
`;

export const Progress = styled.div`
    width: ${props => `${props.value > 100 ? 100 : props.value}%`};
    height: ${props => props.height ? `${props.height}px` : '4px'};
    background-color: #05C471;
`;

export const BarSkeleton = styled.div`
    width: 100%;
    height: 30px;
    background: rgb(153,153,153);
    background: linear-gradient(208deg, rgba(153,153,153,1) 0%, rgba(242,242,242,1) 0%, rgba(59,102,111,1) 100%);
`;

export const DivCloud = styled.div`
    position: absolute;
    margin-top: 10px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${props => props.height ? `${props.height}px` : '25px'};
    background: ${props => props.color ? props.color : '#006DE2'};
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: ${props => props.justifyContent};
    width: ${props => props.width};
    height: ${props => props.height};
    border: ${props => props.border};
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : '0px'};
    padding-left: ${props => props.paddingLeft ? `${props.paddingLeft}px` : '0px'};
    padding-right: ${props => props.paddingRight ? `${props.paddingRight}px` : '0px'};
    padding-bottom: ${props => props.paddingBottom ? `${props.paddingBottom}px` : '0px'};
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
    background-color: ${props => props.color};
    border-radius: ${props => props.radius};

    :hover {
        background-color: ${props => props.colorHover};
        border: ${props => props.borderHover};
    }
`;

export const Modal = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    position: fixed;
    z-index: 2000;
    margin-top: ${props => props.marginTop};
    width: ${props => props.width ? `${props.width}px` : '100%'};
    height: ${props => props.height ? `${props.height}px` : '100vh'};
    flex-direction: column;
    align-items: center;
    justify-content: ${props => props.justifyContent};
    background-color: rgba(68, 68, 68, 0.4);

    @media only screen and (max-width: 970px) {
        margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '-60px'};
    }
`;

export const Input = styled.input`
    width: ${props => props.width};
    height: ${props => props.height};
    background: #FFFFFF;
    border: 1px solid #CFD4D2;
    border-radius: 3px;
    font-family: 'Lato', Arial, sans-serif;
    font-size: ${props => props.size ? `${props.size}px` : '14px'};
    line-height:  ${props => props.lineHeight ? `${props.lineHeight}px` : '19px'};
    display: flex;
    padding: 15px;
    align-items: center;
    color: #444444;
    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : '0px'};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : '0px'};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : '0px'};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : '0px'};
`;