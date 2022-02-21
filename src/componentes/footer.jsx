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
          <Box 
            bgcolor={theme.palette.primary.main} 
            px={{xs: 1, sm: 3}}
            py={{xs: 1, sm: 3}}
            textAlign="center"
            >
              <Container maxWidth="lg">
                  <Grid container spacing={5} >
                            
                      <Grid item xs={12} sm={4} >
                          <Box paddingTop={'5px'} >
                              <Typography variant='h6' fontFamily={theme.typography.fontFamily}>
                                Nono, Córdoba, Argentina
                              </Typography>
                              
                          </Box>

                      </Grid>

                      <Grid  xs={12} sm={4} overflow='hidden' 
                            justifyContent="center"
                             >
                          <Box component="img" 
                          
                            sx={{
                            width: '50%',    
                            height: '50%',
                            paddingTop: '30px',
                            /* maxHeight: { xs: '80%', sm: '40%' },
                            /* maxWidth: { xs: 190, sm: 90 }, */ 
                            }}
                            alt="Logo."
                            src={Logo} />
                              
                          

                      </Grid>

                      <Grid item xs={12} sm={4}>
                          <Box paddingTop={'21px'}>
                            <Button target={'_blank'} href="https://www.facebook.com/cordobasierras" >
                                <FacebookIcon />
                            </Button>
                             
                            <Button target={'_blank'} href="https://www.instagram.com/donajuana.nono/" >
                                <InstagramIcon  />
                            </Button>

                            <Button target={'_blank'} href="https://wa.me/543512189040?text=Hola%20" >
                                <WhatsAppIcon />
                            </Button>
                      
                            <Button target={'_blank'} href="mailto:juanacomplejo@hotmail.com" >
                                <EmailIcon />
                            </Button>
                             
                             
                          </Box>

                      </Grid>

                  </Grid>

              </Container>
          </Box>
      </footer>
  )
}

export default Footer