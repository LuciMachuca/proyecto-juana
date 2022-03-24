import React from 'react';
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Container, Desc, DescT, Dir, Email, Image, ImgContainer, InfoContainer, Telefono, Wrapper } from './Contacto.elements';
import fcontact from '../../Imagenes/Parque/3.11.gif';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function Contacto() {
  

    return (
        <div>
            <NavBar />

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

            <Footer />

        </div>

        
    )
}