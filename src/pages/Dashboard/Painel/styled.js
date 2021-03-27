import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    #sectionPrimary{
        width: 100%;
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
        height: 250px; 
        background: url('https://img.cloudygif.com/full/808e8800f14c5dbb.gif');
        /* background: #6d71f9; */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: 60px;
        border-radius: 15px;
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
`