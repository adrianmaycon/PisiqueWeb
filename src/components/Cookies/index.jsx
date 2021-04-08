import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

import { ModalContent, Container, Title, Description, Button } from "./styled";

function CookiesPage() {
    const cookies = new Cookies();

    const [open, setOpen] = useState(true);

    useEffect(() => {
        if(cookies.get('acceptTerms')) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }, [cookies])

    const acceptTerms = () => {
        cookies.set('acceptTerms', true, { path: '/' });
        setOpen(false)
    }

    return (
        <div>
            <ModalContent open={open}>
                <Container>
                    <div className="cont-box-cokie">
                        <Title>COOKIES</Title>

                        <Description>Nós usamos cookies e outras tecnologias similares para operar este site e melhorar sua experiência.</Description>

                        <Button type="button" onClick={acceptTerms}>Estou ciente</Button>
                    </div>
                </Container>
            </ModalContent>
        </div>
    )
}

export default CookiesPage;