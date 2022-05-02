import * as React from 'react';
import './Informacion.css';


export default function InformacionConfig() {
    return (
        <div className='general'>

            <div className='inicio'>
            
                <p><strong className='comienzo'>Doña Juana </strong>es un complejo que cuenta con 3 cabañas, una cochera exterior,
                    pileta cercada y un parque grande con vista a las montañas.<br/>
                    Nuestro complejo se encuentra en un campo privado llamado  “Campo Miralejos”, de fácil acceso
                    y baja afluencia de vehículos, lo que facilita una estancia tranquila y segura.
                    <br />Las cabañas cuentan con <strong>wifi </strong>y están <strong>completamente equipadas </strong>con aire acondicionado,
                    ventiladores de  techo, calefactores, tv Smart 29’ con DIRECTV, heladera con freezer,
                    cocina con horno, microondas, pava eléctrica,  camas somier, guardarropas, quincho
                    y asador privados.<br />
                    <br />
                    <strong>Cabaña de 1 dormitorio: </strong>Capacidad máxima 4 personas.<br />
                    <strong>Cabaña de 2 dormitorios: </strong>Capacidad máxima 6 personas (( con cochera privada, baño y ante baño )).<br />
                    <br />
                    Las unidades se encuentran separadas por aproximadamente 20 metros,
                    lo que brinda privacidad e intimidad.<br />
                    <strong>Incluimos ropa de cama: </strong>sábanas, almohadas, mantas de plush, acolchados; vajilla completa, utensillos de cocina y limpieza.<br />

                </p>
            </div>

            <div className='ingreso-egreso'>
                <h3>CHECK IN Y CHECK OUT</h3><hr className='linea'/>
                <p><strong>Horario de check in: </strong>A partir de las 14 hs.<br />
                    <strong>Horario de check out: </strong>Hasta las 10 am.<br />
                    <br />
                    El día del ingreso, <strong>nuestra colaboradora Susi </strong>se comunica con ustedes para darles la bienvenida en el lugar,
                    dado  que nuestro complejo no cuenta con oficina administrativa.<br />
                    Detrás de la puerta de ingreso encontrarán una lámina con teléfonos útiles como bomberos,
                    servicio de emergencia, municipalidad y policía.<br />
                    El día del egreso Susi los volverá a contactar para coordinar el egreso, hacer una breve revisión de la cabaña y despedirlos.<br />
                </p>

            </div>

            <div className='mascotas'>
                <h3>TU MASCOTA ES BIENVENIDA!</h3><hr className='linea'/>
                <p>Nos alegramos de ser un Complejo amigable con los animales!
                    Para garantizar una estadía placentera y tranquila, Cabañas Doña Juana tiene algunas consideraciones
                    para la admisión y permanencia de animales. A saber:<br />
                    <br />
                    <li>Permitimos 1 mascota por cabaña</li>
                    <li>No se permite dejar a la mascota sola en la cabaña</li>
                    <li>La mascota debe estar constantemente supervisada por sus dueños.</li>
                    <li>Es responsabilidad de los dueños levantar los desechos de sus animales tanto de la cabaña como del parque.</li>
                    <br />
                    No cobramos adicional por mascota, pero <strong>pedimos un depósito en efectivo</strong> a garantía de posibles daños y/o
                    el inclumiento de los apartados antes mencionados.<br/> 
                    Al momento del check out,
                    si todas las instalaciones se encuentran tal como las encontraron, se les devuelve el 100% del depósito.
                </p>

            </div>

            <div className='servicios'>
                <h3>SERVICIOS DE LIMPIEZA, DESAYUNO Y LAVANDERÍA</h3><hr className='linea'/>
                <p><strong>Éstos no se incluyen en la tarifa </strong>pero son opcionales con costo adicional y
                    están a cargo de nuestra colaboradora de confianza.<br />
                    En el caso de estar interesados en alguno de estos servicios deben comunicárselo a Susi
                    y ella les va a brindar información y precios.</p>

            </div>

        </div >
    )
}