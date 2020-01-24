import React from 'react';
import clsx from 'clsx';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { PowerSettingsNew, PostAdd, LocalLibrary, Book, MenuBook, Dashboard, ChevronLeft, ExpandLess, ExpandMore, Settings } from '@material-ui/icons'
import {
  ListItem, ListItemIcon, ListItemText, CssBaseline, Drawer, Button,
  AppBar, Toolbar, List, Typography, Divider, IconButton, Collapse,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
// import Logo from '../assets/img/logo.png';
import DashboardPage from './Dashboard/index.jsx';
import CreateBooksPage from './Biblioteca/CreateBooks/index.jsx';
import AllBooks from './Biblioteca/AllBooks/index.jsx';
import app from "../base";

const routes = [
  {
    path: "/dashboard",
    exact: true,
    sidebar: () => <div>Dashboard</div>,
    main: () => <DashboardPage />
  },
  {
    path: "/Livros/Cadastro",
    exact: true,
    sidebar: () => <div>Cadastro de Livros</div>,
    main: () => <CreateBooksPage />
  },
  {
    path: "/Livros/Todos",
    exact: true,
    sidebar: () => <div>Meus Livros</div>,
    main: () => <AllBooks />
  },
];

const drawerWidth = 240;

export default function SidBar() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [openExit, setOpenExit] = React.useState(false);
  const [openForm, setOpenForm] = React.useState(false);
  const [openRouter, setOpenRouter] = React.useState(false);

  const handleClickOpen = () => {
    setOpenExit(true);
  };

  const handleClose = () => {
    setOpenExit(false);
  };

  const exitCount = () => {
    setOpenExit(false);
    app.auth().signOut()
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpenForm(!openForm);
  };

  const handleClickRouter = () => {
    setOpenRouter(!openRouter);
    setOpenForm(false);
  };

  return (
    <Router>
      <Redirect to="/dashboard" />
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              {/* <Typography className={classes.title} variant="h6" noWrap>
								Adrian Maycon
          				</Typography> */}
              <Typography className={classes.title} variant="h6" noWrap>

              </Typography>
            </div>
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h5>Grupo Pisiquê</h5>
            {/* <img
              src={Logo}
              alt="icon"
              style={{width: 100, height: 42}}
            /> */}
            </div>
            <IconButton className={classes.icon} onClick={handleDrawerClose}>
              <ChevronLeft />
            </IconButton>
          </div>
          <Divider />
          <List>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "100%",
                }}
              >
                <Link to="/dashboard" style={{ color: '#fff' }}>
                  <ListItem button>
                    <ListItemIcon style={{ color: '#fff' }}>
                      <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary="Princinpal" />
                  </ListItem>
                </Link>

                <ListItem button onClick={handleClick} style={{ color: '#fff', display: 'flex', width: '100%' }}>
                  <ListItemIcon>
                    <ListItemIcon style={{ color: '#fff' }}>
                      <Book />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Biblioteca" />
                  {openForm ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openForm} timeout="auto" unmountOnExit>
                  <Link to="/Livros/Meus" style={{ color: '#fff' }}>
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemIcon style={{ color: '#fff' }}>
                          <LocalLibrary />
                        </ListItemIcon>
                        <ListItemText primary="Meus Livros" />
                      </ListItem>
                    </List>
                  </Link>
                  <Link to="/Livros/Todos" style={{ color: '#fff' }}>
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemIcon style={{ color: '#fff' }}>
                          <MenuBook />
                        </ListItemIcon>
                        <ListItemText primary="Todos os livros" />
                      </ListItem>
                    </List>
                  </Link>
                  <Link to="/Livros/Cadastro" style={{ color: '#fff' }}>
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemIcon style={{ color: '#fff' }}>
                          <PostAdd />
                        </ListItemIcon>
                        <ListItemText primary="Cadastrar Livro" />
                      </ListItem>
                    </List>
                  </Link>
                </Collapse>
              </div>
            </div>
          </List>

          <Divider />

          <List>
            <div>

              <Link to="/usergroup" style={{ color: '#fff' }}>
                <ListItem button onClick={handleClickRouter} style={{ color: '#fff', display: 'flex', width: '100%' }}>
                  <ListItemIcon>
                    <ListItemIcon style={{ color: '#fff' }}>
                      <Settings />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Configurações" />
                </ListItem>
              </Link>

              <ListItem button onClick={handleClickOpen} style={{ backgroundColor: '#20295C', height: 60, marginTop: 10 }}>
                <ListItemIcon style={{ color: '#fff' }}>
                  <PowerSettingsNew />
                </ListItemIcon>
                <ListItemText primary="Sair da Conta" />
              </ListItem>
            </div>
          </List>
        </Drawer>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </main>

        <Dialog
          open={openExit}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Atenção!"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Você realmente deseja sair do sistema?
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
          </Button>
            <Button onClick={exitCount} color="primary" autoFocus>
              Sair
          </Button>
          </DialogActions>
        </Dialog>

      </div>
    </Router >
  );
}

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  icon: {
    color: '#fff',
  },
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#3f51b5',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButtonHidden: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    color: '#fff',
    backgroundColor: '#293475',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));