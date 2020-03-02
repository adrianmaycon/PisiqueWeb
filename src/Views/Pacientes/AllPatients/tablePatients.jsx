import MaterialTable from 'material-table'
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import { Paper, Tooltip, TablePagination, IconButton } from '@material-ui/core';
import PatientsService from '../../../Services/PatientService';

export default function List() {
    const [patients, setPatients] = useState([]);

    console.log(patients)

    useEffect(() => {
        PatientsService.getPatients()
            .then((patient) => setPatients(patient))
    }, []);

    return (
        <MaterialTable
            title="Listagem dos Pacientes"
            columns={[
                { title: 'CPF', field: 'cpf' },
                { title: 'Nome', field: 'name' },
                { title: 'Telefone', field: 'tel01' },
                { title: 'Data de Nascimento', field: 'dataNasc' },
            ]}
            localization={{
                pagination: {
                    labelDisplayedRows: '{from}-{to} de {count}',
                    firstTooltip: 'Primeira página',
                    previousTooltip: 'Página anterior',
                    nextTooltip: 'Próxima página',
                    lastTooltip: 'Última página',
                    labelRowsSelect: 'Linhas'
                },
                toolbar: {
                    searchTooltip: 'Buscar',
                    searchPlaceholder: 'Buscar',
                    nRowsSelected: '{0} Documento(s) selecionado'
                },
                header: {
                    actions: 'Ações',
                },
                body: {
                    emptyDataSourceMessage: 'Não há registros a serem exibidos',
                }
            }}
            data={patients}
            actions={[
                {
                    icon: 'assignment',
                    tooltip: 'Visualizar Parciente',
                    onClick: (event, rowData) => null
                }
            ]}
            options={{ actionsColumnIndex: -1, draggable: false, sorting: false, pageSize: 10 }}
            components={{
                Container: props => <Paper {...props} elevation={0} />,
                Pagination: props => (
                    <TablePagination
                        {...props}
                        rowsPerPageOptions={[10, 15, 20]}
                    />
                ),
                Action: props =>
                    <Tooltip title="Visualizar Parciente">
                        <Link to={`/details/${props.data.id}`}>
                            <IconButton>
                                <AssignmentIcon />
                            </IconButton>
                        </Link>
                    </Tooltip>
            }}
            onRowClick={(event, rowData, togglePanel) => null}
        />
    )
}