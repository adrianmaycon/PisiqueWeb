import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select, Paper, TextField, Button } from '@material-ui/core';

export default function List() {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [valueName, setValueName] = React.useState('');
  const [valueDateNasc, setValueDateNasc] = React.useState('');
  const [estadoCivil, setEstadoCivil] = React.useState('');
  const [valueCpf, setValueCpf] = React.useState('');
  const [valueRg, setValueRg] = React.useState('');
  const [valueTel01, setValueTel01] = React.useState('');
  const [valueTel02, setValueTel02] = React.useState('');
  const [valueEmail, setValueEmail] = React.useState('');
  const [valueCep, setValueCep] = React.useState('');
  const [valueEnd, setValueEnd] = React.useState('');
  const [valueEndN, setValueEndN] = React.useState('');


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
                      value={valueCpf}
                      onChange={event => setValueCpf(event.target.value)}
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
                      value={valueRg}
                      onChange={event => setValueRg(event.target.value)}
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
                      value={valueTel01}
                      onChange={event => setValueTel01(event.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 25 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      style={{ width: '28%' }}
                      label="Telefone 02"
                      value={valueTel02}
                      onChange={event => setValueTel02(event.target.value)}
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
                      value={valueEmail}
                      onChange={event => setValueEmail(event.target.value)}
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
                      value={valueCep}
                      onChange={event => setValueCep(event.target.value)}
                      variant="outlined"
                      inputProps={{ maxLength: 25 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      style={{ width: '64%' }}
                      label="Endereço"
                      required
                      value={valueEnd}
                      onChange={event => setValueEnd(event.target.value)}
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
                      value={valueEndN}
                      onChange={event => setValueEndN(event.target.value)}
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
  divC: {
    display: 'flex',
    width: '100%',
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
}));