import React, { useState, useEffect } from 'react';
import UsersService from 'Services/UsersService';
import Input from 'components/common/Input';
import { FaUserPlus } from "react-icons/fa";
import RegisterHuman from 'components/RegisterHuman';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { FaSearch, FaRegFileAlt } from "react-icons/fa";
import { Container } from './styled';

function Usuarios() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [humans, setHumans] = useState([]);
    const [firstNumber] = useState(1);
    const [fimNumber] = useState(10);
    const [openListHumans, setOpenListHumans] = useState(false);
    const [numbPagination, setNumbPagination] = useState('10');

    useEffect(() => {
        UsersService.ListHuman()
            .then((response) => {
                response.sort(function(a,b) {
                    return a.fullName < b.fullName ? -1 : a.fullName > b.fullName ? 1 : 0;
                });

                setHumans(response);
            })
    }, [openListHumans])

    console.log(humans)

    const LoadingSkeleton = () => (
        <SkeletonTheme color="#242339" highlightColor="#1c1b2d">
            <div style={{ width: '100%', marginTop: 10, padding: 20 }}>
                <Skeleton height={50} count={10} style={{ margin: '5px 0' }} />
            </div>
        </SkeletonTheme>
    );

    // function handlerPagination(data) {
    //     let qtd = data.length / 10;

    //     console.log(Math.ceil(qtd, 1));
    // }

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
            console.log('listRoomStatusOn: ', listRoomStatusOn);
            console.log('dataRoomOn: ', dataRoomOn);
            setHumans(dataRoomOn);
        } else {
            setOpenListHumans(!openListHumans);
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
                                    <th>Nº</th>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Telefone</th>
                                    <th>Bairro</th>
                                    <th>Data de Nasc.</th>
                                    <th>Data de Cadastro.</th>
                                    <th></th>
                                </tr>
                            </thead>

                            {humans.map((human, index) => (index + 1) >= firstNumber && (index) < (fimNumber + Number(numbPagination)) ?
                                <tbody key={human.cpf}>
                                    <tr>
                                        <td style={{width: 20}}>{index < 9 ? '0' : null}{index + 1}</td>
                                        <td>{human.fullName}</td>
                                        <td>{human.cpf}</td>
                                        <td>{human.whatsapp ? human.whatsapp : 'Não cadastrado'}</td>
                                        <td>{human.address.district}</td>
                                        <td>{maskData(human.birth)}</td>
                                        <td>{human.creationDate}</td>
                                        <td><div className='cont-icons-actions'><FaRegFileAlt className='icon-actions' /></div></td>
                                    </tr>
                                </tbody> : null
                            )}
                        </table> : <LoadingSkeleton />}
                    </div>

                    <div className='cont-pagination'>
                        <div className='row'>
                            <button type='button' className='btn-pag'>1</button>
                            <button type='button' className='btn-pag'>2</button>
                            <button type='button' className='btn-pag'>3</button>
                        </div>

                        <div className='row'>

                        <p>Linhas por página: </p>
                            <select value={numbPagination} name="numbPagination" id="numbPagination" onChange={(e) => setNumbPagination(e.target.value)}>
                                <option value="">10</option>
                                <option value="10">20</option>
                                <option value="20">30</option>
                                <option value="40">50</option>
                                <option value="90">100</option>
                                <option value="490">500</option>
                            </select>
                            <p>Total: <b>{humans.length}</b> Pessoa{humans.length > 1 ? 's' : null}</p>
                        </div>
                    </div>
                </main>
            </Container >
            </>
    )
}

export default Usuarios;