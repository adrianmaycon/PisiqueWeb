import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo-instituto.png';
import { withRouter } from 'react-router-dom';
import UsersService from '../../Services/UsersService';
import { Container, Modal } from './styled';

const ListHuman = withRouter(({ history, close }) => {

    const [humans, setHumans] = useState([]);

    useEffect(() => {
        UsersService.ListHuman()
            .then((response) => {
                console.log(response);
                setHumans(response);
            })
    }, [])

    return (
        <Modal>
            <Container>
                <header>
                    <img className='logo-instituto-pisique' src={logo} alt="Logo do Instituto Pisiquê" />
                </header>
                <h1>Listagem de Pessoas</h1>
                <main>
                    <table id="customers">
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Bairro</th>
                            <th>Data de Nascimento</th>
                        </tr>

                        {humans.map((human) =>
                            <tr>
                                <td>{human.fullName}</td>
                                <td>{human.cpf}</td>
                                <td>{human.address.district}</td>
                                <td>{human.birth}</td>
                            </tr>)}
                    </table>

                    <button type='button' onClick={() => close()}>Fechar</button>
                </main>
            </Container >
        </Modal >
    )
})

export default ListHuman;