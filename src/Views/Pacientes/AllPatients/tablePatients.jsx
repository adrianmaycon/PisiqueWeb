import MaterialTable from 'material-table'
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import { Paper, Tooltip, TablePagination, IconButton } from '@material-ui/core';
import PatientsService from '../../../Services/PatientService';

export default function List() {
    const [patients, setPatients] = useState([]);

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
                    tooltip: 'Visualizar Passos',
                    onClick: (event, rowData) => null
                }
            ]}
            options={{ actionsColumnIndex: -1, draggable: false, sorting: false }}
            components={{
                Container: props => <Paper {...props} elevation={0} />,
                Pagination: props => (
                    <TablePagination
                        {...props}
                        rowsPerPageOptions={[5, 10]}
                    />
                ),
                Action: props =>
                    <Tooltip title="Visualizar Passos">
                        <Link to={`/reports/`}>
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