import React from 'react';
import { Container } from './styled';
import Book from '../../../../components/book';

function Leitura() {

    return (
        <>
            <Container>
                <h1>Livros</h1>

                <div className='division-books'>
                    <Book />
                    <Book />
                </div>
            </Container>
        </>
    )
}

export default Leitura;