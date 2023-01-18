import React from 'react';
import fcontact from '../../Comentarios/mapaCONTACTOS.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';


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

                    <div className="col-12 intro">
                        <LocationOnOutlinedIcon style={{ color: '#D8A790 ', marginRight: "5px" }} />
                        Campo Miralejos. Av Los Porteños s/n <br /> Nono, Córdoba.
                        <br />
                    </div>

                    <div className="col-12 mt-3 intro">
                        <PhoneOutlinedIcon style={{ color: '#D8A790 ', paddingTop: 9, marginRight: "5px" }} />
                        +54 9 351 218-9040 <br /> +54 9 351 230-8869
                        <br />
                    </div>

                    <div className="col-12 mt-3 intro" >
                        <InstagramIcon style={{ color: '#D8A790 ', marginRight: "8px" }} />
                        donajuana.nono
                        <br />
                    </div>

                    <div className="col-12 mt-3 intro">
                        <EmailOutlinedIcon style={{ color: '#D8A790 ', marginRight: "8px" }} />
                        juanacomplejo@hotmail.com
                        <br />
                    </div>

                </div>
            </div>

        </div>

    )
}

