import React from 'react';
import Navbar from '../NavBar';
import Footer from '../Footer';
import ColorTabs from './EquipamientoConfig';
import { ThemeProvider } from '@mui/material/styles';


export default function Equipamiento() {


    return (

        <div>

            <Navbar />


            <ThemeProvider>
                <ColorTabs />
            </ThemeProvider>

            <Footer />

        </div>
    )
}
