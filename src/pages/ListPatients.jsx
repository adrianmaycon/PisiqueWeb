import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { PositionCenter, Container, DarkBlue, LightGrayishViolet, PaperContainer, ContainerPosition, ContainerSize, ContainerDialog, BoxRow, BoxPosition, BoxTitle, BoxText } from './styles/StyleListPatients.js';
import { Paper, Tooltip, TablePagination, IconButton, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, Avatar, Backdrop, CircularProgress } from '@material-ui/core';
import PatientsService from '../services/PatientService';

export default function List() {
    const [patients, setPatients] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [openLoading, setOpenLoading] = React.useState(false);
    const [dataPatient, setDataPatient] = useState({});

    const handleOpen = (id) => {
        setOpenLoading(true)

        PatientsService.GetDataPatient(id)
            .then(response => {
                setOpen(true);
                setDataPatient(response)
                setOpenLoading(false)
            })
    };

    const handleClose = () => {
        setOpen(false);
        // setDataPatient({})
    };

    useEffect(() => {
        PatientsService.GetPatients()
            .then((patient) => { setPatients(patient) })
    }, []);

    const DialogCopy = () => {
        let patient = dataPatient;
        let cpfCod = `${patient.cpf}`

        return (
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle>{`Paciente - ${cpfCod.replace(/\D+/g, '')}`}</DialogTitle>
                    <DialogContent>
                        <ContainerDialog>
                            <Avatar src={patient.image} style={{ fontSize: 70, width: 150, height: 150, marginBottom: 40 }}>A</Avatar>
                            <BoxRow>
                                <BoxPosition size={70}>
                                    <BoxTitle>Nome </BoxTitle>
                                    <BoxText>{patient.name}</BoxText>
                                </BoxPosition>
                                <BoxPosition size={30}>
                                    <BoxTitle>Data de Nasc </BoxTitle>
                                    <BoxText>{patient.dataNasc}</BoxText>
                                </BoxPosition>
                            </BoxRow>
                            <BoxRow>
                                <BoxPosition size={30}>
                                    <BoxTitle>Est. Civil </BoxTitle>
                                    <BoxText>{patient.maritalStatos === 11 ? 'Solteiro(a)' : patient.maritalStatos === 12 ? 'Casado(a)' : patient.maritalStatos === 13 ? 'Divorciado(a)' : patient.maritalStatos === 14 ? 'Viúvo(a)' : patient.maritalStatos === 15 ? 'Separado(a)' : 'Inválido'}</BoxText>
                                </BoxPosition>
                                <BoxPosition size={70}>
                                    <BoxTitle>Email </BoxTitle>
                                    <BoxText>{patient.email}</BoxText>
                                </BoxPosition>
                            </BoxRow>
                            <BoxRow>
                                <BoxPosition size={50}>
                                    <BoxTitle>CPF </BoxTitle>
                                    <BoxText>{patient.cpf}</BoxText>
                                </BoxPosition>
                                <BoxPosition size={50}>
                                    <BoxTitle>RG </BoxTitle>
                                    <BoxText>{patient.rg}</BoxText>
                                </BoxPosition>
                            </BoxRow>
                        </ContainerDialog>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" >
                            Fechar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }


    return (
        <PositionCenter>
            <Backdrop style={{ zIndex: 200, color: '#fff' }} open={openLoading} >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Container>
                <DarkBlue />
                <LightGrayishViolet />
                <ContainerPosition>
                    <ContainerSize>
                        <PaperContainer>
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
                                            <IconButton onClick={() => handleOpen(props.data.id)} >
                                                <AssignmentIcon />
                                            </IconButton>
                                        </Tooltip>
                                }}
                                onRowClick={(event, rowData, togglePanel) => null}
                            />
                        </PaperContainer>
                    </ContainerSize>
                </ContainerPosition>
                {DialogCopy()}
            </Container>
        </PositionCenter>
    );
}