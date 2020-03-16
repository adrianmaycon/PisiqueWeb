


import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tooltip, TablePagination, IconButton, Grid, Typography } from '@material-ui/core';
import PatientsService from '../Services/PatientService';

export default function List() {
    const classes = useStyles();
    const [patients, setPatients] = useState([]);

    console.log(patients)

    useEffect(() => {
        PatientsService.getPatients()
            .then((patient) => { setPatients(patient) })
    }, []);

    return (
        <Grid className={classes.container}>
            <Grid style={{ width: '100%', height: 250, backgroundColor: '#1D2975', position: 'fixed', zIndex: 1 }} />
            <Grid style={{ width: '100%', height: '100%', backgroundColor: '#f0ebf8', position: 'fixed', zIndex: 1, marginTop: 250 }} />
            <Grid container spacing={3} style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', zIndex: 10, top: 50 }}>
                <Grid style={{ width: '96%', height: '100%', maxWidth: 1700, minWidth: 850, minHeight: 1000 }}>
                    <Paper className={classes.paper}>
                        <Typography variant='h5'>Pacientes</Typography>
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
                                        <IconButton onClick={() => alert(props.data.id)}>
                                            <AssignmentIcon />
                                        </IconButton>
                                    </Tooltip>
                            }}
                            onRowClick={(event, rowData, togglePanel) => null}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    paper: {
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2),
        paddingBottom: 60,
        justifyContent: 'space-between',
        color: theme.palette.text.secondary,
    },
    batTop: {
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing(2),
        justifyContent: 'space-between',
        color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing(1),
        height: 50
    },
    divBooks: {
        width: "100%",
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    divBanner: {
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    divSearch: {
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 20,
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    root: {
        flexGrow: 1,
    },
    paperDiv: {
        padding: theme.spacing(2),
        maxWidth: 500,
        marginBottom: 15,
        marginRight: 7.5,
        marginLeft: 7.5,
    },
    image: {
        width: 110,
        height: 150,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    rootSearch: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '96.5%',
    },
    inputSearch: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButtonSearch: {
        padding: 10,
    },
    dividerSearch: {
        height: 28,
        margin: 4,
    },
}));