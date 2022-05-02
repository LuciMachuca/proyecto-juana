import React from 'react';
import fcontact from '../../Comentarios/mapaCONTACTOS.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


export default function ContactoConfig() {

    return (

        <div className="container mt-3 mt-md-5">
            <div className="row">

                <div className="col-12 text-center">
                    <img class="img-fluid" src={fcontact} style={{ width: "100%", height: "20rem" }} />
                </div>
            </div>

            <div className="container my-5 my-md-5">
                <div className="row text-center">

                    <div className="col-12">
                        <LocationOnOutlinedIcon style={{ color: '#27ECB1', marginRight: "5px" }} />
                        Campo Miralejos. Av Los Porteños s/n <br /> Nono, Córdoba.
                        <br />
                    </div>

                    <div className="col-12 mt-3">
                        <PhoneOutlinedIcon style={{ color: '#27ECB1', paddingTop: 9, marginRight: "5px" }} />
                        +54 9 351 218-9040 <br /> +54 9 351 230-8869
                        <br />
                    </div>

                    <div className="col-12 mt-3">
                        <EmailOutlinedIcon style={{ color: '#27ECB1', marginRight: "8px" }} />
                        juanacomplejo@hotmail.com
                        <br />
                    </div>

                </div>
            </div>

        </div>

    )
}

