import React, { useState, useEffect } from 'react';
import UsersService from 'Services/UsersService';
import Input from 'components/common/Input';
import { FaUserPlus } from "react-icons/fa";
import RegisterHuman from 'components/RegisterHuman';
import { FaSearch, FaRegFileAlt } from "react-icons/fa";
import { Container, ContainerLoading } from './styled';
import { BarSkeleton } from 'assets/styles/components';

const LoadingSkeleton = () => (
    <ContainerLoading >
        <BarSkeleton className='bar' />
        <BarSkeleton className='bar' />
        <BarSkeleton className='bar' />
        <BarSkeleton className='bar' />
        <BarSkeleton className='bar' />
        <BarSkeleton className='bar' />
        <BarSkeleton className='bar' />
        <BarSkeleton className='bar' />
        <BarSkeleton className='bar' />
    </ContainerLoading>
);

const maskData = (data) => {
    let arr = data.split("-");
    return `${arr[2]}/${arr[1]}/${arr[0]}`;
};

function maskNumberM(data) {
    let date = data.split("-");
    console.log(date[0]);
    return Number(date[1]);
};

function Usuarios() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [humans, setHumans] = useState([]);
    const [firstNumber] = useState(1);
    const [fimNumber] = useState(10);
    const [numberM, setNumberM] = useState(0);
    const [numberY, setNumberY] = useState(0);
    const [checkboxFilterNiver, setCheckboxFilterNiver] = useState(false);
    const [openListHumans, setOpenListHumans] = useState(false);
    const [numbPagination, setNumbPagination] = useState('90');
    
    
    useEffect(() => {
        function maskNumberY(data) {
            let date = data.split("-");
            let idade = numberY - Number(date[0]);
            return idade >= 60;
        }

        const date = new Date().toLocaleString().split("/");
        const ano = date[2].split(" ");
        setNumberY(Number(ano[0]));
        setNumberM(date[1]);
        UsersService.ListHuman()
            .then((response) => {
                response.sort(function(a,b) {
                    return a.fullName < b.fullName ? -1 : a.fullName > b.fullName ? 1 : 0;
                });
                
                let arr = [];
                response.map((human) => maskNumberY(human.birth) ? arr.push(human) : null);

                console.log(arr)
                setHumans(arr);
            })
    }, [numberY, openListHumans])

    const returnLiveStatusOn = (value) => {
        if (value.cpf === search) {
            return value;
        }
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

    console.log(checkboxFilterNiver);

    return (
        <>
        {open ? <RegisterHuman close={() => setOpen(false)} /> : null}
            <Container>
                <main>
                    <div className='div-row-btn'>
                    <button type="button" className='bnt-access-flash' onClick={() => setOpen(true)}><FaUserPlus className='icon' /> Cadastrar Idoso</button>
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

                    <div className='cont-filters'>
                        <input value={checkboxFilterNiver} type="checkbox" id="filter-niver" name="filter-niver" onChange={(e) => setCheckboxFilterNiver(e.target.checked)} />
                        <label htmlFor="filter-niver">Aniversariantes do mês</label>
                    </div>

                    <div className='div-table-pro'>
                        { humans ? 
                            ( humans.length > 0 ? <table id="customers">
                                <thead>
                                    <tr>
                                        <th>Nº</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Telefone</th>
                                        <th>Data de Nasc.</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                {checkboxFilterNiver ? humans.map((human, index) => (Number(numberM) === maskNumberM(human.birth)) &&
                                <tbody key={human.cpf}>
                                    <tr>
                                        <td style={{width: 20}}>{index < 9 ? '0' : null}{index + 1}</td>
                                        <td>{human.fullName}</td>
                                        <td>{human.cpf}</td>
                                        <td>{human.whatsapp ? human.whatsapp : 'Não cadastrado'}</td>
                                        <td>{maskData(human.birth)}</td>
                                        <td style={{width: 20}}><div className='cont-icons-actions'><FaRegFileAlt className='icon-actions' /></div></td>
                                    </tr>
                                </tbody>
                                ) : humans.map((human, index) => ((index + 1) >= firstNumber && (index) < (fimNumber + Number(numbPagination))) && 
                                <tbody key={human.cpf}>
                                        <tr>
                                            <td style={{width: 20}}>{index < 9 ? '0' : null}{index + 1}</td>
                                            <td>{human.fullName}</td>
                                            <td>{human.cpf}</td>
                                            <td>{human.whatsapp ? human.whatsapp : 'Não cadastrado'}</td>
                                            <td>{maskData(human.birth)}</td>
                                            <td style={{width: 20}}><div className='cont-icons-actions'><FaRegFileAlt className='icon-actions' /></div></td>
                                        </tr>
                                    </tbody> 
                                )}
                            </table> : <LoadingSkeleton/> ) : <div><p>----------------</p></div> }
                        </div>

                    <div className='cont-pagination'>
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
                            <p>Total: <b>{humans.length}</b> Idoso{humans.length > 1 ? 's' : null}</p>
                        </div>
                    </div>
                </main>
            </Container >
            </>
    )
}

export default Usuarios;