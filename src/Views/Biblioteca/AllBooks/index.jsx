import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, ButtonBase, Button, IconButton, Divider, InputBase } from '@material-ui/core';
import { BookmarkBorder, Close, Search, MenuBook } from '@material-ui/icons';
import BookService from '../../../Services/BookService';

export default function List() {
    const classes = useStyles();
    const [livros, setLivros] = useState([]);
    const [clickSave, setClickSave] = useState(false);
    const [value, setValue] = React.useState('');

    useEffect(() => {
        BookService.getBooks()
            .then(books => {
                setLivros(books)
            })
    });

    const handleChange = event => {
        setValue(event.target.value);
    };

    const BannerDiv = () => {
        return (
            <Grid style={{ width: '96.5%', backgroundColor: '#333', borderRadius: 10 }}>
                <img style={{ width: '100%', borderRadius: 10 }} src="http://livrariaengetec.com.br/image/cache/data/banner1-970x331.jpg" alt="Banner" />
            </Grid>
        )
    }

    const BookDiv = () => {
        return (livros.map((item) =>

            <Paper key={item.id} className={classes.paperDiv}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={item.image_url} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container style={{ display: 'flex', flexDirection: 'column' }} spacing={1}>
                            <Grid item style={{ width: 302 }} xs>
                                <Typography variant="subtitle1">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" style={{ marginBottom: 14 }} color="textSecondary">
                                    Escritor(a): {item.writer}
                                </Typography>
                                <Typography variant="caption" gutterBottom>
                                    {item.miniDescription ? item.miniDescription : item.description}
                                </Typography>
                            </Grid>
                            <Grid style={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-between' }} item>
                                <Typography variant="body2" color="textSecondary">
                                    Gênero: {item.genero === 10 ? 'Fantasia' : item.genero === 20 ? 'Aventura' : item.genero === 30 ? 'Romance' : item.genero === 40 ? 'Ficção' : item.genero === 50 ? 'Terror' : item.genero === 60 ? 'Biografia' : item.genero}
                                </Typography>
                                <Button variant="outlined" href={item.pdf_url} target='blank' color="primary">
                                    Visualizar Livro
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <IconButton color="primary" onClick={() => setClickSave(!clickSave)} component="span">
                                <BookmarkBorder />
                                {/* {clickSave ? <Bookmark /> : <BookmarkBorder />} */}
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        ))
    }

    return (
        <Grid className={classes.container}>
            <Grid style={{ width: '100%', height: 250, backgroundColor: '#1D2975', position: 'fixed', zIndex: 1 }} />
            <Grid style={{ width: '100%', height: '100%', backgroundColor: '#f0ebf8', position: 'fixed', zIndex: 1, marginTop: 250 }} />
            <Grid container spacing={3} style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', zIndex: 10, top: 50 }}>
                <Grid style={{ width: '96%', height: '100%', maxWidth: 1700, minWidth: 600, minHeight: 1000 }}>
                    <Paper className={classes.paper}>
                        <Grid item xs={12}>
                            <Grid className={classes.divBanner}>
                                <BannerDiv />
                            </Grid>
                            <Grid className={classes.divSearch}>
                                <Paper className={classes.rootSearch}>
                                    <IconButton className={classes.iconButton} aria-label="menu">
                                        <Search />
                                    </IconButton>
                                    <InputBase
                                        className={classes.inputSearch}
                                        placeholder="Pesquise por 'Titulo' ou  por 'Autor' ..."
                                        value={value}
                                        onChange={handleChange}
                                    />
                                    <IconButton className={classes.iconButtonSearch} onClick={() => setValue("")}>
                                        <Close />
                                    </IconButton>
                                    <Divider className={classes.dividerSearch} orientation="vertical" />
                                    <Grid className={classes.iconButtonSearch} >
                                        <MenuBook color="primary" />
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid className={classes.divBooks}>
                                <BookDiv />
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