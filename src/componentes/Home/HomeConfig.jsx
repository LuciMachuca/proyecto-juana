import React from 'react';
//import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles';
//import theme from './themeConfig';
//import NavBar from './componentes/NavBar.jsx';
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,  // coloca el alto de forma dinámica
    
}))

// adentro de la función
// const l = useStyles();

export default function Navbar() {
    const clas = useStyles();

    return (

        <div>
            <AppBar position="fixed" color="primary">
              <Toolbar>
                <Typography variant="h6">
                  Logo
                </Typography>
              </Toolbar>
            </AppBar>

            <div className={clas.offset}></div>
        </div>
    )
}