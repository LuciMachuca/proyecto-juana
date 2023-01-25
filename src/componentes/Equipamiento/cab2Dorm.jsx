import * as React from 'react';
import './equipamiento.css';


export default function Cab2Dorm() {
    return (
        <div>

            <div className='exterior'> <br />
                <h3>EQUIPAMIENTO Y DISTRIBUCIÓN</h3>
                <strong>Capacidad máxima 6 personas.</strong>
            </div>
            <br />

            <div>
                <h3>EXTERIOR</h3>
                <p className='parrafos'>Cochera, Galería y asador privados.<br />
                    Mesa tablón de madera con 6 sillas plásticas. Parrilla y utensillos parrilleros. Tendedero.<br />
                </p>
            </div>

            <div>
                <h3>DORMITORIOS</h3>
                <p className='parrafos'><em><span>PRINCIPAL: </span></em>Sommier king, placard grande.<br />
                    Ventilador de techo, aire acondicionado frío calor y calefactor de tiro balanceado.<br />
                    <em><span>SECUNDARIO: </span></em>2 somiers de 1 plaza, placard grande.<br />
                    Ventilador de techo, calefactor de tiro balanceado.<br />
                    <strong>Se incluyen ropa de cama y toallas </strong><br />
                </p>
            </div>

            <div>
                <h3>SANITARIO </h3>
                <p className='parrafos'>
                    <strong>Antebaño</strong><br />
                    Ducha con agua caliente<br />
                    Secador de Pelo.<br />
                </p>
            </div>

            <div>
                <h3>COCINA COMEDOR</h3>
                <p className='parrafos'>Cocina con horno, heladera con freezer, pava eléctrica, horno microondas.<br />
                    Smart TV led 32” con Directv.Aire acondicionado frío calor.<br />
                    Cama marinera con 2 colchones de espuma alta densidad.<br />
                    Botiquín de primeros auxilios. Matafuegos. Luz de emergencia.<br />
                    Juegos de mesa : Jenga, cartas españolas, cartas de poker.<br />
                    
                    <strong>Vajilla completa </strong><br />
                    <strong>Utensillos de cocina </strong><br />

                </p>
            </div>

            <div>
                <h3>OTROS</h3>
                <p className='parrafos'>
                    Todas las ventanas de la cabaña tienen doble vidrio, tela mosquitera y cortinas black out.
                    <br /></p>
            </div>

        </div>
    )
}