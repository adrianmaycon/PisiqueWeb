import React, { useState, useEffect } from 'react';
import UsersService from 'Services/UsersService';
import Input from 'components/common/Input';
import { FaUserPlus } from "react-icons/fa";
import RegisterHuman from 'components/RegisterHuman';
import { FaSearch } from "react-icons/fa";
import { Container } from './styled';

function Usuarios() {
    const [open, setOpen] = useState(false);
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

    const returnLiveStatusOn = (value) => {
        if (value.cpf === search) {
            return value;
        }
    };

    const maskData = (data) => {
        let arr = data.split("-");
        return `${arr[2]}/${arr[1]}/${arr[0]}`;
    };

    function getHuman() {
        if (search) {
            const listRoomStatusOn = humans.filter(returnLiveStatusOn);
            const dataRoomOn = [];
            listRoomStatusOn.forEach(room => dataRoomOn.push(room));
            console.log(dataRoomOn);
            setHumans(dataRoomOn);
        } else {
            listHumans();
        }
    }

    return (
        <>
        {open ? <RegisterHuman close={() => setOpen(false)} /> : null}
            <Container>
                <main>
                    <div className='div-row-btn'>
                    <button type="button" className='bnt-access-flash' onClick={() => setOpen(true)}><FaUserPlus className='icon' /> Cadastrar Usuário</button>
                    </div>
                    <div className='buscar-grid'>
                        <Input
                            required
                            name="search"
                            label="Buscar por CPF*"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
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
                                    <th>Data de Nasc.</th>
                                </tr>
                            </thead>

                            {humans.map((human) =>
                                <tbody key={human.cpf}>
                                    <tr>
                                        <td>{human.fullName}</td>
                                        <td>{human.cpf}</td>
                                        <td>{human.address.district}</td>
                                        <td>{maskData(human.birth)}</td>
                                    </tr>
                                </tbody>
                            )}
                        </table> : <p>Carregando...</p>}
                    </div>
                </main>
            </Container >
            </>
    )
}

export default Usuarios;