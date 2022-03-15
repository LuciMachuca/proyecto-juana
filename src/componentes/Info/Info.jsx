import React from 'react';
import NavBar from '../NavBar.jsx';
import Footer from '../Footer.jsx';
import InfoHTML from './InfoConfig.jsx'
import { ThemeProvider } from '@mui/material/styles';

export default function Info() {

    return (

        <div>
            <NavBar />



            <ThemeProvider>
                <InfoHTML />
            </ThemeProvider>



            <Footer />

        </div>
    )
}


