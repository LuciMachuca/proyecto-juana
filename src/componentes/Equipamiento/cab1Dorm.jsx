import * as React from 'react';
import './equipamiento.css';


export default function Cab1Dorm() {
    return (
        <div>

            <div className='exterior'> <br />
                <h3>EQUIPAMIENTO Y DISTRIBUCIÓN</h3>
                <strong>Capacidad máxima 4 personas.</strong>
            </div>
            <br />

            <div className='exterior'>
                <h3>EXTERIOR</h3>
                <p className='parrafos'>Cochera exterior semi cubierta con luz solar. Quincho y asador privados.<br />
                    Mesa y 4 sillas plásticas. Parrilla y utensillos parrilleros. Tendedero.<br />
                </p>
            </div>

            <div className='dormitorio'>
                <h3>DORMITORIO</h3>
                <p className='parrafos'>Sommier doble, placard mediano, aire acondicionado frío calor.<br />
                    <strong>Se incluyen ropa de cama y toallas </strong><br />
                </p>
            </div>

            <div className='sanitario'>
                <h3>SANITARIO</h3>
                <p className='parrafos'>
                    Ducha con agua caliente<br />
                    Secador de Pelo.<br />
                </p>
            </div>

            <div className='cocina'>
                <h3>COCINA COMEDOR</h3>
                <p className='parrafos'>Cocina con horno, heladera con freezer, pava eléctrica, horno microondas.<br />
                    Smart TV led 32” con Directv.<br />
                    Mesa de madera y 4 sillas. Aire acondicionado frío calor.<br />
                    Cama marinera con 2 colchones de espuma alta densidad.<br />
                    Botiquín de primeros auxilios. Matafuegos. Luz de emergencia.<br />
                    Juegos de mesa : Jenga, cartas españolas, cartas de poker.<br />
                    <br />
                    <strong>Vajilla completa </strong><br />
                    <strong>Utensillos de cocina </strong><br />
                </p>
            </div>

            <div className='limpieza'>
                <h3>OTROS</h3>
                <p className='parrafos'>
                Todas las ventanas de la cabaña tienen doble vidrio, tela mosquitera y cortinas black out.
                    <br /></p>
            </div>

        </div>
    )
}