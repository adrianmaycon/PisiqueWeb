import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #f5f8fb;

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

    .div-access-flash {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
    }

    #sectionPrimary{
        width: 100%;
        max-height: 100vh;
        overflow-x: hidden;
        padding: 30px;
    }

    #sectionPrimary header{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    #sectionPrimary header #name{
        font-size: 2.5rem;
        color: var(--color-text-title);
    }

    #sectionPrimary header img{
        width: 30px;
        height: 30px;
        border-radius: 5px;
        margin-right: 5px;
    }

    #sectionPrimary .alert-info{
        width: 100%;
        height: 300px; 
        background: url('https://cdn-images-1.medium.com/max/1600/1*azRwX1eVnBdIKiBX6dBbJw.gif');
        /* background: #6d71f9; */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: 40px;
        border-radius: 15px;
        box-shadow: 0 0 0.3em rgb(0, 0, 0, 0.1);
    }

    #sectionSecundary{
        width: 400px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-left: 1px solid #eeeeee;
        padding: 30px;
    }

    #sectionSecundary header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #sectionSecundary header img{
        width: 17rem;
        height: 17rem;
        border-radius: 50%;
        margin-top: 2rem;
        padding: 0.6rem;
        border: 2px solid #6573ed;
    }

    h3 {
        font-size: 30px;
        color: #444;
    }

    #sectionSecundary header h1{
        font-size: 2.3rem;
        line-height: 3rem;
        color: #444;
        margin-top: 1.5rem;
    }

    #sectionSecundary header h4{
        font-size: 1.3rem;
        line-height: 1.5rem;
        margin-top: 0.5rem;
    }

    @media (max-width: 1400px) {
        .div-access-flash {
            grid-template-columns: 2fr 2fr;
        }
    }

    @media (max-width: 900px) {
        #sectionSecundary {
            display: none;
        }
    }
`