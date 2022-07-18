import React from 'react';
import { Container } from './styled';
import classNames from 'classnames';

export default function Book() {
    return (
        <Container>
            <div className="wrap">
                <div className="perspective">
                    <div className="book-wrap">
                        <div className={classNames("book", "book-1")}></div>
                        <div className={classNames("title", "book-1")}></div>
                        <div className={classNames("book-back", "book-1")}>
                            <div className="text">
                                <h3>The Great Fall</h3>
                                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt earum doloremque aliquam culpa dolor nostrum consequatur quas dicta? Molestias repellendus minima pariatur libero vel, reiciendis optio magnam rerum, labore corporis.</span><span>Blanditiis alias, omnis eveniet corporis ipsam at odio, iste, expedita praesentium ullam voluptas similique distinctio? Dicta facilis doloribus recusandae, minima facere veritatis veniam quasi quis, tempora fugit assumenda fuga laborum.</span><span>This is the great fall</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container >
    );
}