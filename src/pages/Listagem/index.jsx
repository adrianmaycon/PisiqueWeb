import React, { useState, useEffect } from 'react';

import PageHeader from '../../components/common/PageHeader';
import PsiItem from '../../components/PsiItem';
import Select from '../../components/common/Select';
import Input from '../../components/common/Input';

import ProfsService from '../../Services/ProfsService';

import './styles.css';

function Listagem() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');

    useEffect(() => {
        ProfsService.getProfs()
            .then(profs => {
                setTeachers(profs)
            })
    }, [])

    async function searchTeachers(e) {
        e.preventDefault();

    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader
                title="Estes são os profissionais disponíveis"
                link="/"
            >
                <form id="search-professional" onSubmit={searchTeachers}>
                    <Select
                        name="type"
                        label="Tipo"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Psicólogo', label: 'Psicólogo' },
                            { value: 'Psiquiatra', label: 'Psiquiatra' },
                            { value: 'Apoio', label: 'Apoio' },
                        ]}
                    />

                    <Input
                        name="city"
                        label="Cidade"
                        placeholder="Digite a cidade"
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value) }}
                    />

                    {/* <Input
                        type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    /> */}

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher) => {
                    return <PsiItem key={teacher.id} teacher={teacher} />
                })}
            </main>
        </div>
    )
}

export default Listagem;