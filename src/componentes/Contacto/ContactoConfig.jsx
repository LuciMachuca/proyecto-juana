import React from 'react';
//import { Container, Dir, Image, ImgContainer, InfoContainer } from './Contacto.elements';
import fcontact from '../../Comentarios/mapaCONTACTOS.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


export default function ContactoConfig() {

    return (

        <div className="container my-5">
            <div className="row">

                <div className="col-12 col-md-6 d-flex">
                    <img class="img h-75" src={fcontact} style={{ height: "auto" }} />
                </div>

                <div className="col-12 col-md-6">
                    <div className="row d-flex">

                        <div className="col-12">
                            <LocationOnOutlinedIcon style={{ color: '#C5D8A4', paddingTop: 7, marginRight: "5px" }} />
                            Campo Miralejos. Av Los Porteños s/n <br /> Nono, Córdoba.
                            <br />
                        </div>

                        <div className="col-12 mt-3">
                            <PhoneOutlinedIcon style={{ color: '#C5D8A4', paddingTop: 9, marginRight: "5px" }} />
                            +54 9 351 218-9040 <br /> +54 9 351 230-8869
                            <br />
                        </div>

                        <div className="col-12 mt-3">
                            <EmailOutlinedIcon style={{ color: '#C5D8A4', marginRight: "8px" }} />
                            juanacomplejo@hotmail.com
                            <br />
                        </div>
                    </div>
                </div>

                <br />
            </div>

        </div>
    )
}



/* export default function ContactoConfig() {
  

    return (
        <div>

            <Container>
                

                    <ImgContainer>
                        <Image src={fcontact}  />
                    </ImgContainer>

                    <InfoContainer>
                        <Dir>
                            <LocationOnOutlinedIcon style={{ color: '#C5D8A4', paddingTop: 7 , marginRight: "5px"}} />
                            Campo Miralejos. Av Los Porteños s/n <br /> Nono, Córdoba.
                        </Dir>

                        <Dir>
                            <PhoneOutlinedIcon style={{ color: '#C5D8A4', paddingTop: 9, marginRight: "5px" }}/>
                            +54 9 351 218-9040 <br /> +54 9 351 230-8869
                        </Dir>

                        <Dir>
                            <EmailOutlinedIcon style={{ color: '#C5D8A4', marginRight: "8px" }}/>
                            juanacomplejo@hotmail.com
                        </Dir> 
                        
                    </InfoContainer>

                
            
           

            </Container>

        </div>

        
    )
} */