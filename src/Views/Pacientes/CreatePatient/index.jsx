import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Typography, InputLabel, MenuItem, FormControl, Select, Paper, TextField, ButtonBase, Button, IconButton, Tooltip,
  Dialog, DialogActions, DialogContent, DialogTitle
} from '@material-ui/core';
import { BookmarkBorder, DeleteForever, AspectRatio, CollectionsBookmark } from '@material-ui/icons';
import BookService from '../../../Services/BookService';

export default function List() {
  const classes = useStyles();
  const [valueName, setValueName] = React.useState('');
  const [valueDateNasc, setValueDateNasc] = React.useState('');
  const [estadoCivil, setEstadoCivil] = React.useState('');

  const [valueResenha, setValueResenha] = React.useState('');
  const [urlImage, setUrlImage] = React.useState('');
  const [urlPDF, setUrlPDF] = React.useState('');
  const [writer, setWriter] = React.useState('');
  const [idBook, setIdBook] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');
  const [livros, setLivros] = useState([]);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setEstadoCivil(event.target.value);
  };

  return (
    <Grid className={classes.container}>
      <Grid style={{ width: '100%', height: 250, backgroundColor: '#1D2975', position: 'fixed', zIndex: 1 }} />
      <Grid style={{ width: '100%', height: '100%', backgroundColor: '#f0ebf8', position: 'fixed', zIndex: 1, marginTop: 250 }} />
      <Grid container spacing={3} style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', zIndex: 10, top: 100 }}>
        <Grid style={{ width: '90%', maxWidth: 850, minWidth: 700 }}>
          <Paper className={classes.paper}>
            <Grid item xs={12}>
              <Grid className={classes.batTop}>
                <Typography variant="h4" style={{ color: '#333' }}>
                  Cadastro de Pacientes
                </Typography>
              </Grid>
              <Grid style={{ width: "100%", display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }} >
                <Grid className="block-example border border-blue" style={{ width: '100%', padding: 10, borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: 500 }}>

                  <Grid className={classes.divC} style={{ marginTop: 10 }}>
                    <TextField
                      style={{ width: '46%' }}
                      label="Nome Completo"
                      placeholder="Adrian Maycon"
                      multiline
                      required
                      inputProps={{ maxLength: 36 }}
                      rowsMax="4"
                      value={valueName}
                      onChange={event => setValueName(event.target.value)}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <TextField
                      style={{ width: '20%' }}
                      label="Data de Nascimento"
                      multiline
                      required
                      inputProps={{ maxLength: 36 }}
                      rowsMax="4"
                      value={valueDateNasc}
                      onChange={event => setValueDateNasc(event.target.value)}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <FormControl style={{ width: '30%' }} variant="outlined" >
                      <InputLabel ref={inputLabel} >
                        Estado Civíl
                    </InputLabel>
                      <Select
                        value={estadoCivil}
                        onChange={handleChange}
                        labelWidth={labelWidth}
                      >
                        <MenuItem value="">
                          <em>Nenhum</em>
                        </MenuItem>
                        <MenuItem value={11}>Solteiro(a)</MenuItem>
                        <MenuItem value={12}>Casado(a)</MenuItem>
                        <MenuItem value={13}>Divorciado(a)</MenuItem>
                        <MenuItem value={14}>Viúvo(a)</MenuItem>
                        <MenuItem value={15}>Separado(a)</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid className={classes.divC}>
                    <TextField
                      style={{ width: '49%' }}
                      label="CPF"
                      placeholder=" 123.456.789-10"
                      required
                      // value={writer}
                      // onChange={event => setWriter(event.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 25 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      style={{ width: '48%' }}
                      label="RG"
                      placeholder="123.456.7891 0"
                      // value={writer}
                      // onChange={event => setWriter(event.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 25 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>

                  <Grid className={classes.divC}>
                    <TextField
                      style={{ width: '28%' }}
                      label="Telefone 01"
                      required
                      // value={writer}
                      // onChange={event => setWriter(event.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 25 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      style={{ width: '28%' }}
                      label="Telefone 02"
                      // value={writer}
                      // onChange={event => setWriter(event.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 25 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <TextField
                      style={{ width: '40%' }}
                      label="E-mail"
                      placeholder="adrian@email.com"
                      multiline
                      inputProps={{ maxLength: 36 }}
                      rowsMax="4"
                      // value={valueTitle}
                      // onChange={event => setValueTitle(event.target.value)}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>

                  <Grid className={classes.divC}>
                    <TextField
                      style={{ width: '22%' }}
                      label="CEP"
                      placeholder=" 12345-67"
                      required
                      // value={writer}
                      // onChange={event => setWriter(event.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 25 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      style={{ width: '64%' }}
                      label="Endereço"
                      value={writer}
                      // required
                      // onChange={event => setWriter(event.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 25 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      style={{ width: '10%' }}
                      label="Nº"
                      required
                      // value={writer}
                      // onChange={event => setWriter(event.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 25 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Button variant="outlined" onClick={() => null} style={{ width: '98%', height: 50 }} color="primary">
                    Cadastrar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
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
  extendedIcon: {
    marginRight: theme.spacing(1),
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
  imgModal: {
    display: 'block',
    maxWidth: 120,
    maxHeight: 160,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  divC: {
    display: 'flex',
    width: '100%',
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
}));