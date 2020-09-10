import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import { FaUserMd } from "react-icons/fa";
import './styles.css';

const RegisterPsi = withRouter(({ hstory }) => {

    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([...scheduleItems,
        { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemsValue(position, field, value) {
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        })

        setScheduleItems(updateScheduleItems);
    }

    function handleCreateClass(e) {
        e.preventDefault();

    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer fazer parte da equipe Pisiquê!"
                description="O primeiro passo é preencher esse formulário de inscrição."
                link="/choice"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados <FaUserMd /></legend>

                        <Input
                            required
                            name="name"
                            label="Nome Completo"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />

                        <div className="division-row" style={{marginTop: '2rem'}}>
                            <Input
                                required
                                name="cpf"
                                label="CPF"
                            />
                            <Input
                                required
                                name="phone"
                                label="Telefone - (WhatsApp)"
                                value={whatsapp}
                                onChange={(e) => { setWhatsapp(e.target.value) }}
                            />
                        </div>


                        <Textarea
                            required
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Dados profissionais</legend>

                        <div className="division-row">
                            <Select
                                required
                                name="type"
                                label="Profissional"
                                value={subject}
                                onChange={(e) => { setSubject(e.target.value) }}
                                options={[
                                    { value: 'Psicólogo', label: 'Psicólogo' },
                                    { value: 'Psiquiatra', label: 'Psiquiatra' },
                                ]}
                            />
                            <Input
                                required
                                name="crp"
                                label="CRP"
                            />
                        </div>

                        <Input
                            required
                            name="cost"
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                        </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item" >
                                    <Select
                                        name="week_day"
                                        label="Dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemsValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                    />

                                    <Input
                                        name="from"
                                        label="Das"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemsValue(index, 'from', e.target.value)}
                                    />

                                    <Input
                                        name="to"
                                        label="Até"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemsValue(index, 'to', e.target.value)}
                                    />
                                </div>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                        <button type="submit">
                            Salvar cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </div >
    )
})

export default RegisterPsi;