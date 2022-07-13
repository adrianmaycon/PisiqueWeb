import React, { useState } from 'react';
import close from '../../assets/icons/close.svg';
import menu from '../../assets/icons/menu-96.svg';
import { Button } from '../../assets/styles/styled';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { LeftBar, Container, Menu } from './styled';

export default function Header() {
    const [open, setOpen] = useState(false)
    const [openAccess, setOpenAccess] = useState(false)

    let menus = [
        {
            id: '1',
            title: "Inicial ",
            href: "/"
        },
        {
            id: '2',
            title: "Blog",
            href: "/"
        },
        {
            id: '3',
            title: "Voluntariado",
            href: "/"
        },
        {
            id: '4',
            title: "Sobre",
            href: "/",
        },
        {
            id: '5',
            title: "Fale Conosco",
            href: "/"
        },
    ]

    const handlerButtonAction = () => {
        setOpenAccess(true)
    }

    return (
        <>
            <LeftBar open={open}>
                <div className="cont-close">
                    <button type="button" className="btn-menu" onClick={() => setOpen(!open)}>
                        <img
                            src={close}
                            alt="Fechar menu lateral"
                            width={24}
                            height={24}
                        />
                    </button>
                </div>

                {menus.map((link) =>
                    <div key={link.id} style={{ marginBottom: 32 }}>
                        <Link to={link.href} onClick={() => setTimeout(() => setOpen(false), 200)}>{link.title}</Link>
                    </div>
                )}

                <Button type="button" borderRadius="5px" onClick={() => handlerButtonAction()}>Entrar</Button>
            </LeftBar>

            <Container>
                <div className='bar-sub-info'>
                    <div className='max-cont-row'>
                        <a href="tel:+5585984015318">Ligue: +55 (85) 98401-5318</a>
                        <a href="/">Seja um colaborador nosso</a>
                    </div>
                </div>

                <div className={classNames('container-button-menu', 'mobille')}>
                    <button type="button" className="btn-menu" onClick={() => setOpen(!open)}>
                        <img
                            src={menu}
                            alt="Abrir menu lateral"
                            width={42}
                            height={42}
                        />
                    </button>
                </div>

                <div className='container-menus'>
                    <div className='max-cont-row'>
                        <h2 onClick={() => setOpen(!open)}>Instituto Pisiquê</h2>

                        <div className='box-menu'>
                            <Link to="/"><Menu select={true}>Inicial</Menu></Link>
                            <Link to="/blog"><Menu>Blog</Menu></Link>
                            <Link to="/voluntariado"><Menu>Voluntariado</Menu></Link>
                            <Link to="/sobre"><Menu>Sobre</Menu></Link>
                            <Link to="/contato"><Menu>Contato</Menu></Link>
                        </div>

                        <div>
                            <button type="button" id="button-entrar">Entrar</button>
                            <button type="button" id="button-inscrever">Inscrever-se</button>
                        </div>
                    </div>
                </div>
            </Container >
        </>
    );
}