import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import theme from '../themeConfig'
import Logo from '../Imagenes/Logo_Limpio_m.png';
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
                bgcolor={theme.palette.primary.main} 
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
                              <Typography variant='h6' fontFamily={theme.typography.fontFamily}>
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
                             
                             
                          </Box>

                      </Grid>

                    

          </Box>
              </Container>
      </footer>
  )
}

export default Footer