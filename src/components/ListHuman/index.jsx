import React, { useState, useEffect } from 'react';
import logo from 'assets/images/logo-instituto.png';
import { withRouter } from 'react-router-dom';
import UsersService from 'Services/UsersService';
import { mCPF } from 'Services/masksService';
import Input from 'components/common/Input';
import { FaSearch } from "react-icons/fa";
import { Container, Modal } from './styled';

const ListHuman = withRouter(({ history, close }) => {

    const [search, setSearch] = useState('');
    const [humans, setHumans] = useState([]);

    useEffect(() => {
        listHumans();
    }, [])

    function listHumans() {
        UsersService.ListHuman()
            .then((response) => {
                // console.log(response);
                setHumans(response);
            })
    }

    function getHuman() {
        if (search) {
            UsersService.GetDataHuman(search)
                .then((response) => {
                    // console.log(response);
                    setHumans([response])
                })
        } else {
            listHumans();
        }
    }

    return (
        <Modal>
            <Container>
                <header>
                    <img className='logo-instituto-pisique' src={logo} alt="Logo do Instituto Pisiquê" />
                </header>
                <h1>Listagem de Pessoas</h1>
                <main>
                    <div className='buscar-grid'>
                        <Input
                            required
                            name="search"
                            label="Buscar pelo CPF *"
                            value={search}
                            onChange={(e) => mCPF(e.target.value).then((v) => setSearch(v))}
                            maxLength="14"
                            minLength="14"
                            placeholder="000.000.000-00"
                        />
                        <button type='button' onClick={() => getHuman()}><FaSearch /></button>
                    </div>

                    <div className='div-table-pro'>
                        {humans.length > 0 ? <table id="customers">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Bairro</th>
                                    <th>Data de Nascimento</th>
                                </tr>
                            </thead>

                            {humans.map((human) =>
                                <tbody key={human.cpf}>
                                    <tr>
                                        <td>{human.fullName}</td>
                                        <td>{human.cpf}</td>
                                        <td>{human.address.district}</td>
                                        <td>{human.birth}</td>
                                    </tr>
                                </tbody>
                            )}
                        </table> : <p>Carregando...</p>}
                    </div>

                    <footer>
                        <button type="button" onClick={() => close()}>
                            Fechar Lista
                        </button>
                    </footer>
                </main>
            </Container >
        </Modal >
    )
})

export default ListHuman;