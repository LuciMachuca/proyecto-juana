import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Footer from './Footer';
import Navbar from './NavBar';
import Cards from '../Cards/Cards.jsx';
import Carrusel from '../Carrusel/Carrusel.jsx';
import GaleriaConfig from '../Galeria/GaleriaConfig.jsx';
import InformacionConfig from '../Informacion/InformacionConfig.jsx';
import EquipamientoConfig from '../Equipamiento/EquipamientoConfig.jsx';
import ContactoConfig from '../Contacto/ContactoConfig.jsx';

export default function Home() {


    return (

        <div>
            <ThemeProvider>

                <Navbar />

                <div class="container">

                    <Carrusel />

                    <Cards />

                    <div>
                        <br />
                        <h3 className='lugares'>Galería de Imágenes</h3>
                        <hr className='linea1 mt-1' />
                        <br />
                        <GaleriaConfig />
                    </div>


                    <div>
                        <br />
                        <h3 className='lugares'>Información</h3>
                        <hr className='linea1 mt-1' />
                        <InformacionConfig />
                    </div>

                    <div>
                        <br />
                        <h3 className='lugares'>Equipamiento</h3>
                        <hr className='linea1 mt-1' />
                        <br />
                        <EquipamientoConfig />
                    </div>

                    <div>
                        <br />
                        <h3 className='lugares'>Contacto</h3>
                        <hr className='linea1 mt-1' />
                        <ContactoConfig />
                    </div>

                </div>

                <Footer />
            </ThemeProvider>

        </div>
    )
}
