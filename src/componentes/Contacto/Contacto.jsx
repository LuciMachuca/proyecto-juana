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
                <Wrapper>

                    <ImgContainer>
                        <Image src={fcontact}  />
                    </ImgContainer>

                    <InfoContainer>
                        <Dir>
                            <LocationOnOutlinedIcon style={{ paddingTop: 7 }} />
                            <Desc>Campo Miralejos. Av Los Porteños s/n <br /> Nono, Córdoba.</Desc>
                        </Dir>

                        <Telefono>
                            <PhoneOutlinedIcon style={{ paddingTop: 9 }}/>
                            <Desc>+54 9 351 218-9040 <br /> +54 9 351 230-8869</Desc>
                        </Telefono>

                        <Email>
                            <EmailOutlinedIcon />
                            <DescT>juanacomplejo@hotmail.com</DescT>
                        </Email>
                        
                    </InfoContainer>

                </Wrapper>
            
           

            </Container>

            <Footer />

        </div>

        
    )
}