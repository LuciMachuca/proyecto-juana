import * as React from 'react';
import './Informacion.css';


export default function InformacionConfig() {
    return (
        <div className='container'>

            <div className='inicio'>
            <br />
            <br />
                <p><strong className='comienzo'>Cabañas Doña Juana </strong>es un <em>establecimiento registrado </em>
                    que cumple con todos los requerimientos y medidas de seguridad establecidos por el Municipio.<br />
                    <br />
                    A solo 5 minutos del Centro de Nono, Doña Juana se encuentra en un entorno privilegiado,
                    un paisaje inigualable rodeado de vegetación y fauna silvestre. <br />
                    <br />
                    El complejo cuenta con 4 cabañas totalmente equipadas y distanciadas entre sí,
                    con comodidades y detalles de calidad, que facilitan el confort y la seguridad de una estancia placentera y tranquila.<br />
                    <br />
                    Ubicado en un espacio privado  llamado “Campo Miralejos”, de fácil acceso y baja afluencia de vehículos,
                    éste entorno dispone de piscina cercada y un extenso parque con vista a las montañas,
                    para disfrutar de la naturaleza y la tranquilidad de unas vacaciones excepcionales.<br />

                    <br />
                </p>
            </div>

            <div className='ingreso-egreso mt-4'>
                <h3>PET FRIENDLY</h3>
                <p><strong>Tu mascota es bienvenida! </strong>En Doña Juana nos alegramos de ser un Complejo amigable con los animales.<br />
                    
                </p>

            </div>

            <div className='mascotas mt-4'>
                <h3>SERVICIOS</h3>
                <p><ul>
                    <li>WiFi</li>
                    <li>Tv satelital</li>
                    <li>Emergencia 24 hs.</li>
                </ul>
                </p>

            </div>

            <div className='servicios mt-4'>
                <h3>OPCIONALES</h3>
                <p>Servicios de Limpieza y Lavandería. <br />
                    <br />
                </p>

            </div>

        </div >
    )
}