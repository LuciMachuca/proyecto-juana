import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Footer from '../Home/Footer.jsx';
import Navbar from '../Home/NavBar.jsx';
import InformacionConfig from './InformacionConfig.jsx';

export default function Informacion() {

    return (

        <div>
            <ThemeProvider>
                <Navbar />

                <div className="container  mt-5 pt-5">
                    <InformacionConfig />
                </div>

                <Footer />
            </ThemeProvider>
        </div>
    )
}