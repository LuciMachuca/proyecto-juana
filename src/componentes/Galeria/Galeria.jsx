import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Footer from '../Home/Footer.jsx';
import Navbar from '../Home/NavBar.jsx';
import GaleriaConfig from './GaleriaConfig.jsx';

export default function Galeria() {

    return (

        <div>
            <ThemeProvider>
                <Navbar />

                <div className="container  mt-5 pt-5">
                    <GaleriaConfig />
                </div>

                <Footer />
            </ThemeProvider>
        </div>
    )
}