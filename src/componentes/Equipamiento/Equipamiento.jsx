import React from 'react';
import Navbar from '../NavBar';
import Footer from '../Footer';
import Desplegable from './EquipamientoConfig';



export default function Equipamiento() {


    return (

        <div>

            <div>
                <Navbar />
            </div>

            <div>
                <Desplegable />
            </div>


            <div>
                <Footer />
            </div>

        </div>
    )
}
