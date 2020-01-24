import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select, Paper, TextField, ButtonBase, Button, IconButton } from '@material-ui/core';
import { BookmarkBorder } from '@material-ui/icons';

export default function List() {
  const classes = useStyles();

  const [valueTitle, setValueTitle] = React.useState('');
  const [valueMiniDescription, setValueMiniDescription] = React.useState('');
  const [valueResenha, setValueResenha] = React.useState('');
  const [urlImage, setUrlImage] = React.useState('');
  const [urlPDF, setUrlPDF] = React.useState('');
  const [age, setAge] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setAge(event.target.value);
  };

  console.log(age)

  const BookDiv = () => {
    return (
      <Paper className={classes.paperDiv}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={urlImage ? `${urlImage}` : 'https://cdn.awsli.com.br/600x700/942/942147/produto/36303080/216db724e8.jpg'} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item style={{ width: 302 }} xs>
                {valueTitle ?
                  <Typography gutterBottom variant="subtitle1">
                    {valueTitle}
                  </Typography>
                  :
                  <Typography gutterBottom variant="subtitle1">
                    Livro sem nome
                </Typography>
                }
                {valueMiniDescription ?
                  <Typography variant="caption" gutterBottom>
                    {valueMiniDescription}
                  </Typography>
                  :
                  <Typography variant="caption" gutterBottom>
                    Livro sem descrição, adicione uma para ficar estiloso
                </Typography>}
                <Typography variant="body2" style={{ marginTop: 3 }} color="textSecondary">
                  Genero: {age === 10 ? 'Fantasia' : age === 20 ? 'Aventura' : age === 30 ? 'Romance' : age === 40 ? 'História' : age === 50 ? 'Terror' : 'Sem gênero'}
                </Typography>
              </Grid>
              <Grid style={{ display: 'flex', width: '100%', flexDirection: 'row-reverse' }} item>
                <Button variant="outlined" href={urlPDF ? urlPDF : ''} target='blank' color="primary">
                  Visualizar Livro
                  </Button>
              </Grid>
            </Grid>
            <Grid item>
              <IconButton color="primary" component="span">
                <BookmarkBorder />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>)
  }

  return (
    <Grid className={classes.container}>
      <Grid style={{ width: '100%', height: 250, backgroundColor: '#1D2975', position: 'fixed', zIndex: 1 }} />
      <Grid style={{ width: '100%', height: '100%', backgroundColor: '#f0ebf8', position: 'fixed', zIndex: 1, marginTop: 250 }} />
      <Grid container spacing={3} style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', zIndex: 10, top: 100 }}>
        <Grid style={{ width: '90%', maxWidth: 1250, minWidth: 750 }}>
          <Paper className={classes.paper}>
            <Grid item xs={12}>
              <Grid className={classes.batTop}>
                <Typography variant="h4" style={{ color: '#333' }}>
                  Cadastrar Livros
                </Typography>
              </Grid>
              <Grid style={{ width: "100%", display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }} >
                <Grid style={{ width: '49%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: 500 }}>
                  <TextField
                    style={{ width: '90%', marginBottom: 15 }}
                    label="Título do Livro"
                    placeholder="Descreva o Titulo do Livro"
                    multiline
                    inputProps={{ maxLength: 38 }}
                    rowsMax="4"
                    value={valueTitle}
                    onChange={event => setValueTitle(event.target.value)}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    style={{ width: '90%', marginBottom: 15 }}
                    label="Mini Descrição"
                    placeholder="Vale sobre o livro com poucas palavras"
                    value={valueMiniDescription}
                    onChange={event => setValueMiniDescription(event.target.value)}
                    variant="outlined"
                    inputProps={{ maxLength: 95 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    style={{ width: '90%', marginBottom: 15 }}
                    label="Resenha do Livro"
                    placeholder="Escreve do que se trata do Livro"
                    value={valueResenha}
                    onChange={event => setValueResenha(event.target.value)}
                    multiline
                    rows="4"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <FormControl style={{ width: '90%', marginBottom: 15 }} variant="outlined" className={classes.formControl}>
                    <InputLabel ref={inputLabel} >
                      Gênero
                    </InputLabel>
                    <Select
                      value={age}
                      onChange={handleChange}
                      labelWidth={labelWidth}
                    >
                      <MenuItem value="">
                        <em>Nenhum</em>
                      </MenuItem>
                      <MenuItem value={10}>Fantasia</MenuItem>
                      <MenuItem value={20}>Aventura</MenuItem>
                      <MenuItem value={30}>Romance</MenuItem>
                      <MenuItem value={40}>História</MenuItem>
                      <MenuItem value={50}>Terror</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    style={{ width: '90%', marginBottom: 15 }}
                    label="Url da imagem"
                    value={urlImage}
                    onChange={event => setUrlImage(event.target.value)}
                    variant="outlined"
                    inputProps={{ maxLength: 95 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    style={{ width: '90%', marginBottom: 15 }}
                    label="Url do PDF"
                    value={urlPDF}
                    onChange={event => setUrlPDF(event.target.value)}
                    variant="outlined"
                    inputProps={{ maxLength: 95 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid style={{ width: '49%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: 530 }}>
                  <Typography variant="h5" style={{ color: '#333' }}>Preview: </Typography>
                  <BookDiv />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid >
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
    height: 140,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));