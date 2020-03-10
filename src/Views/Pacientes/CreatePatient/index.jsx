import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select, Paper, TextField, Button } from '@material-ui/core';
import axios from 'axios';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import PatientService from '../../../Services/PatientService.js'
import moment from 'moment';
import ptLocale from "date-fns/locale/pt-BR";

export default function List() {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [valueName, setValueName] = React.useState('');
  const [estadoCivil, setEstadoCivil] = React.useState('');
  const [valueCpf, setValueCpf] = React.useState('');
  const [valueRg, setValueRg] = React.useState('');
  const [valueTel01, setValueTel01] = React.useState('');
  const [valueTel02, setValueTel02] = React.useState('');
  const [valueEmail, setValueEmail] = React.useState('');
  const [valueCep, setValueCep] = React.useState('');
  const [valueBairro, setValueBairro] = React.useState('');
  const [valueUF, setValueUF] = React.useState('');
  const [valueCity, setValueCity] = React.useState('');
  const [valueEnd, setValueEnd] = React.useState('');
  const [valueEndN, setValueEndN] = React.useState('');
  const [disabledCep, setDisabledCep] = React.useState(true);
  const [selectedDate, setSelectedDate] = React.useState(new Date(`${moment().format()}`));

  const [errorName, setErrorName] = React.useState(false);
  const [errorEstadoCivil, setErrorEstadoCivil] = React.useState(false);
  const [errorCpf, setErrorCpf] = React.useState(false);
  const [errorTel, setErrorTel] = React.useState(false);
  const [errorEnd, setErrorEnd] = React.useState(false);
  const [errorEndN, setErrorEndN] = React.useState(false);
  const [errorCity, setErrorCity] = React.useState(false);
  const [errorUf, setErrorUf] = React.useState(false);
  const [errorBairro, setErrorBairro] = React.useState(false);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setEstadoCivil(event.target.value);
  };

  const handleDateChange = date => {
    console.log(date)
    setSelectedDate(date);
  };

  const validateField = () => {
    !valueName ? setErrorName(true) : setErrorName(false)
    !estadoCivil ? setErrorEstadoCivil(true) : setErrorEstadoCivil(false)
    !valueCpf ? setErrorCpf(true) : setErrorCpf(false)
    !valueTel01 ? setErrorTel(true) : setErrorTel(false)
    !valueEnd ? setErrorEnd(true) : setErrorEnd(false)
    !valueEndN ? setErrorEndN(true) : setErrorEndN(false)
    !valueCity ? setErrorCity(true) : setErrorCity(false)
    !valueUF ? setErrorUf(true) : setErrorUf(false)
    !valueBairro ? setErrorBairro(true) : setErrorBairro(false)

    if (valueName && estadoCivil && valueCpf && valueTel01 && valueEnd && valueEndN && valueCity && valueUF && valueBairro) {
      let address = { cep: valueCep, city: valueCity, logradouro: valueEnd, numero: valueEndN, uf: valueUF }
      let dataNasc = moment(selectedDate).format('DD/MM/YYYY')
      let dateRegister = { data: moment().format('DD/MM/YYYY'), hora: moment().format('LT') }
      PatientService.Register(address, valueCpf, dataNasc, dateRegister, valueEmail, estadoCivil, valueName, valueRg, valueTel01, valueTel02)
        .then(result => {
          setValueBairro('')
          setValueName('')
          setValueEnd('')
          setValueEndN('')
          setValueCep('')
          setValueCity('')
          setValueCpf('')
          setValueRg('')
          setEstadoCivil('')
          setSelectedDate(new Date(`${moment().format()}`))
        })
    } else {
      console.log('Algo esta faltando')
    }

  }

  if (valueCep.length === 9 && disabledCep) {
    axios.get(`https://viacep.com.br/ws/${valueCep}/json/`)
      .then((response) => {
        console.log('Response: ', response.data);
        setValueEnd(response.data.logradouro)
        setValueBairro(response.data.bairro)
        setValueCity(response.data.localidade)
        setValueUF(response.data.uf)
        setDisabledCep(false)
      })
      .catch(function (error) {
        console.log('Error: ', error);
      })
  }

  if (valueCpf.length === 11) {
    const digitos = valueCpf.split('').map(digito => digito.toString())

    let a = digitos.slice(0, 9).reduce((acumulador, valorAtual, indice) => parseInt(acumulador) + parseInt(valorAtual * (10 - indice)), digitos[0]) - parseInt(valueCpf.split('')[0])
    let b = digitos.slice(0, 10).reduce((acumulador, valorAtual, indice) => parseInt(acumulador) + parseInt(valorAtual * (11 - indice)), digitos[0]) - parseInt(valueCpf.split('')[0])

    let valorA = a % 11 < 2 ? 0 : 11 - (a % 11)
    let valorB = b % 11 >= 2 ? 11 - (b % 11) : 0

    let v1 = parseInt(valueCpf.split('')[9])
    let v2 = parseInt(valueCpf.split('')[10])

    let statusCpf = valorA === v1 && valorB === v2 ? "CPF Válido" : "CPF Inválido"

    console.log(statusCpf)
  }

  return (
    <Grid className={classes.container}>
      <Grid style={{ width: '100%', height: 250, backgroundColor: '#1D2975', position: 'fixed', zIndex: 1 }} />
      <Grid style={{ width: '100%', height: '100%', backgroundColor: '#f0ebf8', position: 'fixed', zIndex: 1, marginTop: 250 }} />
      <Grid container spacing={3} style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', zIndex: 10, top: 100 }}>
        <Grid style={{ width: '90%', maxWidth: 1350, minWidth: 700 }}>
          <Paper className={classes.paper}>
            <Grid item xs={12}>
              <Grid className={classes.batTop}>
                <Typography variant="h4" style={{ color: '#333' }}>
                  Cadastro de Pacientes
                </Typography>
              </Grid>
              <Grid style={{ width: "100%", display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }} >
                <Grid className="block-example border border-blue" style={{ width: '49%', marginLeft: 5, marginBottom: 10, marginRight: 5, padding: 10, borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: 500 }}>
                  <Grid className={classes.divC} style={{ marginTop: 10 }}>
                    <TextField
                      style={{ width: '65%' }}
                      label="Nome Completo"
                      required
                      error={errorName}
                      inputProps={{ maxLength: 38 }}
                      rowsMax="4"
                      value={valueName}
                      onChange={event => setValueName(event.target.value)}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptLocale}>
                      <KeyboardDatePicker
                        style={{ width: '30%' }}
                        margin="normal"
                        variant="outlined"
                        label="Data de Nasc."
                        required
                        format="dd/MM/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        invalidDateMessage="Formato de data inválido"
                        maxDateMessage="Data Inválida"
                        minDateMessage="Data Inválida"

                      />
                    </MuiPickersUtilsProvider>
                  </Grid>

                  <Grid className={classes.divC} >
                    <TextField
                      style={{ width: '48%' }}
                      label="E-mail"
                      inputProps={{ maxLength: 36 }}
                      value={valueEmail}
                      onChange={event => setValueEmail(event.target.value)}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <FormControl style={{ width: '48%' }} variant="outlined" required error={errorEstadoCivil}>
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
                      style={{ width: '48%' }}
                      label="CPF"
                      placeholder=" 12345678910"
                      required
                      error={errorCpf}
                      value={valueCpf}
                      onChange={event => setValueCpf(event.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 11 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <TextField
                      style={{ width: '48%' }}
                      label="RG"
                      placeholder="12345678910"
                      value={valueRg}
                      onChange={event => setValueRg(event.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 11 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>

                  <Grid className={classes.divC}>
                    <TextField
                      style={{ width: '27%' }}
                      label="CEP"
                      placeholder=" 12345-67"
                      value={valueCep}
                      onChange={event => setValueCep(event.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 25 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      style={{ width: '34%' }}
                      label="Telefone 01"
                      required
                      error={errorTel}
                      value={valueTel01}
                      onChange={event => setValueTel01(event.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 25 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      style={{ width: '34%' }}
                      label="Telefone 02"
                      value={valueTel02}
                      onChange={event => setValueTel02(event.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 25 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>

                  <Grid className={classes.divC}>
                    <TextField
                      style={{ width: '84%' }}
                      label="Endereço"
                      required
                      error={errorEnd}
                      value={valueEnd}
                      onChange={event => setValueEnd(event.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 25 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      style={{ width: '12%' }}
                      label="Nº"
                      required
                      error={errorEndN}
                      value={valueEndN}
                      onChange={event => setValueEndN(event.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 6 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>

                  <Grid className={classes.divC}>
                    <TextField
                      style={{ width: '41.5%' }}
                      label="Bairro"
                      required
                      error={errorBairro}
                      value={valueBairro}
                      onChange={event => setValueBairro(event.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 25 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      style={{ width: '41.5%' }}
                      label="Cidade"
                      required
                      error={errorCity}
                      value={valueCity}
                      onChange={event => setValueCity(event.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 25 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      style={{ width: '12%' }}
                      label="UF"
                      error={errorUf}
                      value={valueUF}
                      onChange={event => setValueUF(event.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 25 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid className="block-example border border-blue" style={{ width: '49%', padding: 10, marginBottom: 10, marginLeft: 5, marginRight: 5, borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', minWidth: 500 }}>
                  <Grid style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 40, marginTop: 10 }}>
                    <Typography variant="h5" style={{ fontSize: 32 }} gutterBottom>
                      Dados do Paciente
                    </Typography>
                  </Grid>
                  <Grid style={{ width: '90%', display: 'flex', flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                    <Grid style={{ width: '65%', display: 'flex', flexDirection: 'column', height: 40 }}>
                      <Typography variant="subtitle2" >Paciente: </Typography>
                      <Typography variant="body2" style={{ padding: 5, marginTop: 2.5, minHeight: 30, display: 'flex', justifyContent: 'center' }} className="block-example border border-blue">{valueName}</Typography>
                    </Grid>
                    <Grid style={{ width: '33%', display: 'flex', flexDirection: 'column', height: 40 }}>
                      <Typography variant="subtitle2" >Data de Nasc.: </Typography>
                      <Typography variant="body2" style={{ padding: 5, marginTop: 2.5, minHeight: 30, display: 'flex', justifyContent: 'center' }} className="block-example border border-blue">{moment(selectedDate).format('DD/MM/YYYY')}</Typography>
                    </Grid>
                  </Grid>
                  <Grid style={{ width: '90%', display: 'flex', flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                    <Grid style={{ width: '65%', display: 'flex', flexDirection: 'column', height: 40 }}>
                      <Typography variant="subtitle2" >Email: </Typography>
                      <Typography variant="body2" style={{ padding: 5, marginTop: 2.5, minHeight: 30, display: 'flex', justifyContent: 'center' }} className="block-example border border-blue">{valueEmail}</Typography>
                    </Grid>
                    <Grid style={{ width: '33%', display: 'flex', flexDirection: 'column', height: 40 }}>
                      <Typography variant="subtitle2" >Estado Civíl: </Typography>
                      <Typography variant="body2" style={{ padding: 5, marginTop: 2.5, minHeight: 30, display: 'flex', justifyContent: 'center' }} className="block-example border border-blue">{estadoCivil === 11 ? 'Solteiro(a)' : estadoCivil === 12 ? 'Casado(a)' : estadoCivil === 13 ? 'Divorciado(a)' : estadoCivil === 14 ? 'Viúvo(a)' : estadoCivil === 15 ? 'Separado(a)' : ''}</Typography>
                    </Grid>
                  </Grid>
                  <Grid style={{ width: '90%', display: 'flex', flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                    <Grid style={{ width: '32%', display: 'flex', flexDirection: 'column', height: 40 }}>
                      <Typography variant="subtitle2" >CPF: </Typography>
                      <Typography variant="body2" style={{ padding: 5, marginTop: 2.5, minHeight: 30, display: 'flex', justifyContent: 'center' }} className="block-example border border-blue">{valueCpf}</Typography>
                    </Grid>
                    <Grid style={{ width: '32%', display: 'flex', flexDirection: 'column', height: 40 }}>
                      <Typography variant="subtitle2" >RG: </Typography>
                      <Typography variant="body2" style={{ padding: 5, marginTop: 2.5, minHeight: 30, display: 'flex', justifyContent: 'center' }} className="block-example border border-blue">{valueRg}</Typography>
                    </Grid>
                    <Grid style={{ width: '32%', display: 'flex', flexDirection: 'column', height: 40 }}>
                      <Typography variant="subtitle2" >Telefone: </Typography>
                      <Typography variant="body2" style={{ padding: 5, marginTop: 2.5, minHeight: 30, display: 'flex', justifyContent: 'center' }} className="block-example border border-blue">{valueTel01}</Typography>
                    </Grid>
                  </Grid>
                  <Grid style={{ width: '90%', display: 'flex', flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                    <Grid style={{ width: '54%', display: 'flex', flexDirection: 'column', height: 40 }}>
                      <Typography variant="subtitle2" >Endereço: </Typography>
                      <Typography variant="body2" style={{ padding: 5, marginTop: 2.5, minHeight: 30, display: 'flex', justifyContent: 'center' }} className="block-example border border-blue">{valueEnd}</Typography>
                    </Grid>
                    <Grid style={{ width: '8%', display: 'flex', flexDirection: 'column', height: 40 }}>
                      <Typography variant="subtitle2" >N°: </Typography>
                      <Typography variant="body2" style={{ padding: 5, marginTop: 2.5, minHeight: 30, display: 'flex', justifyContent: 'center' }} className="block-example border border-blue">{valueEndN}</Typography>
                    </Grid>
                    <Grid style={{ width: '34%', display: 'flex', flexDirection: 'column', height: 40 }}>
                      <Typography variant="subtitle2" >Bairro: </Typography>
                      <Typography variant="body2" style={{ padding: 5, marginTop: 2.5, minHeight: 30, display: 'flex', justifyContent: 'center' }} className="block-example border border-blue">{valueBairro}</Typography>
                    </Grid>
                  </Grid>
                  <Grid style={{ width: '90%', display: 'flex', flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                    <Grid style={{ width: '30%', display: 'flex', flexDirection: 'column', height: 40 }}>
                      <Typography variant="subtitle2" >CEP: </Typography>
                      <Typography variant="body2" style={{ padding: 5, marginTop: 2.5, minHeight: 30, display: 'flex', justifyContent: 'center' }} className="block-example border border-blue">{valueCep}</Typography>
                    </Grid>
                    <Grid style={{ width: '50%', display: 'flex', flexDirection: 'column', height: 40 }}>
                      <Typography variant="subtitle2" >Cidade: </Typography>
                      <Typography variant="body2" style={{ padding: 5, marginTop: 2.5, minHeight: 30, display: 'flex', justifyContent: 'center' }} className="block-example border border-blue">{valueCity}</Typography>
                    </Grid>
                    <Grid style={{ width: '16%', display: 'flex', flexDirection: 'column', height: 40 }}>
                      <Typography variant="subtitle2" >UF: </Typography>
                      <Typography variant="body2" style={{ padding: 5, marginTop: 2.5, minHeight: 30, display: 'flex', justifyContent: 'center' }} className="block-example border border-blue">{valueUF}</Typography>
                    </Grid>
                  </Grid>
                  <Button variant="outlined" onClick={() => validateField()} style={{ width: '98%', height: 50, marginTop: 38 }} color="primary">
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
    paddingBottom: 20,
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
    marginBottom: 20,
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