import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import theme from '../themeConfig'
import Logo from '../Imagenes/Logo_Limpio_m.png';
import LogoBoo from '../Imagenes/booking_logo_icon.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { Button, Typography } from '@mui/material';



 

function Footer() {
  return (
      <footer>
          
              <Container maxWidth="1200px" style={{padding : '0px'}} >
                
              <Box 
                bgcolor='#BB9981' 
                px={{xs: 1, lg: 0}}
                py={{xs: 1, lg: 0}}
                textAlign="center"
                /* maxWidth="lg" */
                //display={'flex'}
                //maxWidth={'1200px'}
                /* sx={{  display: { xs: 'flex', lg: 'flex'}, flexDirection: {xs: 'column', lg: 'row'} }} */
                sx={{ display: { xs: 'block', md: 'flex' } }}
               
                /*  */
                
                
            >
                
                  
                            
                      <Grid item xs={12} sm={4} margin={'auto'} >
                          <Box paddingTop={'0'} >
                              <Typography variant='8px' fontFamily={theme.typography.fontFamily}>
                                Nono, Córdoba, Argentina
                              </Typography>
                              
                          </Box>

                      </Grid>
                     

                      <Grid   xs={12} sm={4} overflow='hidden'
                            justifyContent="center"
                            
                             >
                          <Box component="img" margin={'auto'}
                          
                            sx={{
                            width: '50%',    
                            height: '97%',
                            
                            /* maxHeight: { xs: '80%', sm: '100%' },
                            maxWidth: { xs: 500, sm: '100%' }, */
                            }}
                            alt="Logo."
                            src={Logo} />
                              
                          

                      </Grid>
                      

                      <Grid item xs={12} sm={4} margin={'auto'}>
                          <Box /* paddingTop={'21px'} */ justifyContent={'center'}>
                            <Button target={'_blank'} href="https://www.facebook.com/cordobasierras" style={{color: 'black'}} >
                                <FacebookIcon />
                            </Button>
                             
                            <Button target={'_blank'} href="https://www.instagram.com/donajuana.nono/" style={{color: 'black'}} >
                                <InstagramIcon  />
                            </Button>

                            <Button target={'_blank'} href="https://wa.me/543512189040?text=Hola%20" style={{color: 'black'}} >
                                <WhatsAppIcon />
                            </Button>
                      
                            <Button target={'_blank'} href="mailto:juanacomplejo@hotmail.com" style={{color: 'black'}} >
                                <EmailIcon />
                            </Button>

                            <Button target={'_blank'} href="https://www.booking.com/hotel/ar/complejo-de-cabanas-dona-juana.es-ar.html?aid=318615;label=Spanish_Argentina_ES_AR_20153587225-6h15TH8LvM25bNckrW9zZwS217247257083%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-162435869305%3Alp1000126%3Ali%3Adec%3Adm;sid=fcb97bf773f0806fba24ba07bf04ebfb;dest_id=-1005603;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1646874831;srpvid=800b08a6554100d3;type=total;ucfs=1&#hotelTmpl" style={{color: 'black', height: '32px'}} >
                                <Box component="img" margin={'auto'}
                            
                                sx={{
                                width: '50%',    
                                height: '97%',
                                
                                /* maxHeight: { xs: '80%', sm: '100%' },
                                maxWidth: { xs: 500, sm: '100%' }, */
                                }}
                                alt="LogoB."
                                src={LogoBoo} />
                            </Button>
                             
                             
                          </Box>

                      </Grid>

                    

          </Box>
              </Container>
      </footer>
  )
}

export default Footer