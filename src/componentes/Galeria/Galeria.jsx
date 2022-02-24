import React from 'react';
import Footer from '../Footer';
//import Navbar from './HomeConfig';
import Navbar from '../NavBar';
import Parque from './parqueController.jsx';
import Un_Dormitorio from './unDormController.jsx';
//import Dos_Dormitorios from './dosDormController.jsx';
//import useMediaQuery from './GaleriaConfig.jsx';
import Container from '@mui/material/Container';
import BasicTabs from './GaleriaConfig.jsx';






export default function Galeria() {



    return (

        <div>
            <Navbar />

            

            <Container maxWidth="xl"  >
                <BasicTabs />

            </Container>


            <Footer />

        </div>
    )
}
