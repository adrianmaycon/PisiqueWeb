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

  const [valueMiniDescription, setValueMiniDescription] = React.useState('');
  const [alterActive, setAlterActive] = React.useState(false);
  const [valueResenha, setValueResenha] = React.useState('');
  const [valueTitle, setValueTitle] = React.useState('');
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

  const handleClickOpen = () => {
    BookService.getBooks()
      .then(books =>
         setLivros(books))
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setLivros([])
  };

  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleClickSelect = (item) => {
    setValueTitle(item.title)
    setValueMiniDescription(item.miniDescription)
    setValueResenha(item.description)
    setUrlImage(item.image_url)
    setUrlPDF(item.pdf_url)
    setWriter(item.writer)
    setAge(item.genero)
    setIdBook(item.id)
    setAlterActive(true)
    setOpen(false);
    setLivros([])
  }

  const registerBook = () => {
    if (valueTitle && valueMiniDescription && valueResenha && urlImage && urlPDF && writer && age) {
      BookService.Register(valueTitle, valueMiniDescription, valueResenha, age, urlImage, urlPDF, writer)
        .then(result => {
          setValueTitle('')
          setValueMiniDescription('')
          setValueResenha('')
          setUrlImage('')
          setUrlPDF('')
          setWriter('')
          setAge('')
        })
    } else {
      console.log('Algo esta faltando')
    }
  };

  const updateBook = () => {
    if (valueTitle && valueMiniDescription && valueResenha && urlImage && urlPDF && writer && age) {
      BookService.UpdateBook(idBook, valueTitle, valueMiniDescription, valueResenha, age, urlImage, urlPDF, writer)
        .then(result => {
          setValueTitle('')
          setValueMiniDescription('')
          setValueResenha('')
          setUrlImage('')
          setUrlPDF('')
          setWriter('')
          setAge('')
          setIdBook('')
          setAlterActive(false)
        })
    } else {
      console.log('Algo esta faltando')
    }
  };

  const deleteFields = () => {
    setValueTitle('')
    setValueMiniDescription('')
    setValueResenha('')
    setUrlImage('')
    setUrlPDF('')
    setWriter('')
    setAge('')
  }

  const toggleFullScreen = () => {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  const DialogCopy = () => {
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>{"Escolha um livro"}</DialogTitle>
          <DialogContent>
            <Grid style={{ width: '100%', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', minWidth: 530 }}>
              {livros.map((item) =>
                <Tooltip title={item.title} key={item.id}>
                  <ButtonBase>
                    <img className={classes.imgModal} alt="complex" src={item.image_url} onClick={() => handleClickSelect(item)} />
                  </ButtonBase>
                </Tooltip>)
              }
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }

  const BookDiv = () => {
    return (
      <Paper className={classes.paperDiv}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={urlImage ? `${urlImage}` : 'http://noset.com.br/wp-content/uploads/2019/01/CINCO-PASSOS-DE-VOC%C3%8A-CAPA-LIVRO.jpg'} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container style={{ display: 'flex', flexDirection: 'column' }} spacing={1}>
              <Grid item style={{ width: 302 }} xs>
                {valueTitle ?
                  <Typography variant="subtitle1">
                    {valueTitle}
                  </Typography>
                  :
                  <Typography variant="subtitle1">
                    A cinco passos de você
                </Typography>
                }
                <Typography variant="body2" style={{ marginBottom: 14 }} color="textSecondary">
                  Escritor(a): {writer ? writer : 'João Maria'}
                </Typography>
                {valueMiniDescription ?
                  <Typography variant="caption" gutterBottom>
                    {valueMiniDescription}
                  </Typography>
                  :
                  <Typography variant="caption" gutterBottom>
                    Stella Grant gosta de estar no controle. Ela parece ser uma adolescente típica...
                </Typography>}
              </Grid>
              <Grid style={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-between' }} item>
                <Typography variant="body2" color="textSecondary">
                  Gênero: {age === 10 ? 'Fantasia' : age === 20 ? 'Aventura' : age === 30 ? 'Romance' : age === 40 ? 'Ficção' : age === 50 ? 'Terror' : 'Nenhum'}
                </Typography>
                <Button variant="outlined" href={urlPDF ? urlPDF : ''} target='blank' color="primary">
                  Visualizar Livro
                  </Button>
              </Grid>
            </Grid>
            <Grid item>
              <IconButton color="primary" disabled component="span">
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
        <Grid style={{ width: '90%', maxWidth: 1250, minWidth: 600 }}>
          <Paper className={classes.paper}>
            <Grid item xs={12}>
              <Grid className={classes.batTop}>
                <Typography variant="h4" style={{ color: '#333' }}>
                  Cadastrar Livro
                </Typography>
              </Grid>
              <Grid style={{ width: "100%", display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }} >
                <Grid className="block-example border border-blue" style={{ width: '49%', paddingTop: 30, paddingBottom: 30, borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: 500 }}>
                  <TextField
                    style={{ width: '90%', marginBottom: 15 }}
                    label="Título do Livro"
                    placeholder="Descreva o Titulo do Livro"
                    multiline
                    inputProps={{ maxLength: 36 }}
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
                    label="Escritor(a)"
                    placeholder="Nome do escritor"
                    value={writer}
                    onChange={event => setWriter(event.target.value)}
                    variant="outlined"
                    inputProps={{ maxLength: 25 }}
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
                      <MenuItem value={40}>Ficção</MenuItem>
                      <MenuItem value={50}>Terror</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    style={{ width: '90%', marginBottom: 15 }}
                    label="Url da imagem"
                    placeholder="ex: https://imagemlivro.png"
                    value={urlImage}
                    onChange={event => setUrlImage(event.target.value)}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    style={{ width: '90%', marginBottom: 15 }}
                    label="Url do PDF"
                    placeholder="ex: https://PDF_livro.pdf"
                    value={urlPDF}
                    onChange={event => setUrlPDF(event.target.value)}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid style={{ width: '49%', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: 20, marginTop: 20, alignItems: 'center', minWidth: 530 }}>
                  <Grid className="block-example border border-DarkBlue" style={{ display: 'flex', width: '95%', height: 55, marginBottom: 30, padding: 5, maxWidth: 500, borderRadius: 5, alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <Tooltip title="Apagar Campos">
                      <IconButton onClick={() => deleteFields()} color="primary" component="span">
                        <DeleteForever />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Alterar Livro">
                      <IconButton onClick={() => handleClickOpen()} color="primary" component="span">
                        <CollectionsBookmark />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Modo Tela Cheia">
                      <IconButton onClick={() => toggleFullScreen()} color="primary" component="span">
                        <AspectRatio />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                  <Typography variant="h5" style={{ color: '#333', width: '95%', maxWidth: 500, display: 'flex', alignItems: 'flex-start', paddingBottom: 10, paddingTop: 10, paddingLeft: 2 }}>Preview </Typography>
                  <BookDiv />
                  {alterActive ?
                    <Button variant="outlined" onClick={() => updateBook()} style={{ width: '95%', height: 50, maxWidth: 500, marginTop: 30 }} color="primary">
                      Alterar Livro
                      </Button>
                    :
                    <Button variant="outlined" onClick={() => registerBook()} style={{ width: '95%', height: 50, maxWidth: 500, marginTop: 30 }} color="primary">
                      Cadastrar Livro
                      </Button>}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      {DialogCopy()}
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));