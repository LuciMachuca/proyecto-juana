import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Footer from '../Home/Footer.jsx';
import Navbar from '../Home/NavBar.jsx';
import ContactoConfig from './ContactoConfig.jsx';

export default function Contacto() {

    return (

        <div>
            <ThemeProvider>
                <Navbar />

                <div className="container mt-5 pt-4">
                    <ContactoConfig />
                </div>

                <Footer />
            </ThemeProvider>
        </div>
    )
}