// import React from 'react';

// export default class Books extends React.Component {
// state = {
//     Livros: [],
//     modalVisible: false,
// };
// setModalVisible(visible) {
//     this.setState({ modalVisible: visible });
// }
// componentDidMount() {
//     BookService.getBooks(livro => {
//         let oldLivros = this.state.Livros
//         oldLivros.push(livro)
//         this.setState({ Livros: oldLivros })
//     })

// }
// render() {
//     console.log('Resultado', this.state.Livros)
//     return (
//         <div>
//             <h1>Meus Livros</h1>
//         </div>
//     )
// }
// }

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, ButtonBase, Button, IconButton } from '@material-ui/core';
import { Bookmark, BookmarkBorder } from '@material-ui/icons';
import BookService from '../../../Services/BookService';


export default function List() {
    const classes = useStyles();
    const [livros, setLivros] = useState([]);
    const [clickSave, setClickSave] = useState(false);
    
    useEffect(() => {
        BookService.getBooks()
            .then(books => {
                setLivros(books)
            })
    });

    const FormRow = () => {
        return (livros.map((item) =>
            <Paper key={item.id} className={classes.paperDiv}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={item.image_url} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={1}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {item.title}
                                </Typography>
                                <Typography variant="caption" gutterBottom>
                                    {item.description}
                                </Typography>
                                <Typography variant="body2" style={{ marginTop: 3 }} color="textSecondary">
                                    Genero: {item.genero}
                                </Typography>
                            </Grid>
                            <Grid style={{ display: 'flex', width: '100%', flexDirection: 'row-reverse' }} item>
                                <Button variant="outlined" href={item.pdf_url} target='blank' color="primary">
                                    Visualizar Livro
                            </Button>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <IconButton color="primary" onClick={() => setClickSave(!clickSave)} component="span">
                                {clickSave ? <Bookmark /> : <BookmarkBorder />}
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>))
    }

    return (
        <Grid className={classes.container}>
            <Grid style={{ width: '100%', height: 250, backgroundColor: '#1D2975', position: 'fixed', zIndex: 1 }} />
            <Grid style={{ width: '100%', height: '100%', backgroundColor: '#f0ebf8', position: 'fixed', zIndex: 1, marginTop: 250 }} />
            <Grid container spacing={3} style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', zIndex: 10, top: 50 }}>
                <Grid style={{ width: '96%', maxWidth: 1700, minWidth: 600 }}>
                    <Paper className={classes.paper}>
                        <Grid item xs={12}>
                            <Grid className={classes.batTop}>
                                <Typography variant="h4" style={{ color: '#333' }}>
                                    Leia seu livro favorito!
                                </Typography>
                            </Grid>
                            <Grid className={classes.divBooks}>
                                <FormRow />
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
        height: 140,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));