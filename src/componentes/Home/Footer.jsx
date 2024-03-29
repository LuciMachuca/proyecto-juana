import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import theme from '../../themeConfig.jsx';
import NvoLogo from '../../Imagenes/NvoLogo.png';
import LogoBoo from '../../Imagenes/booking_logo_icon.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { Button, Typography } from '@mui/material';
import LogoNvo from '../../Imagenes/fondoColor1.png';



function Footer() {
    return (
        <footer>

            <Container maxWidth="1200px" style={{ padding: '0px' }} >

                <Box
                    bgcolor='#A92931'
                    px={{ xs: 1, lg: 0 }}
                    py={{ xs: 1, lg: 0 }}
                    textAlign="center"
                    sx={{ display: { xs: 'block', md: 'flex' } }} >

                    <Grid item xs={12} md={4} margin={'auto'} >
                        <Box paddingTop={'0'} >
                            <Typography variant='8px' fontWeight="600" fontFamily={theme.typography.fontFamily} style={{ color: '#FFFFFF' }}>
                                Nono, Córdoba
                            </Typography>

                        </Box>
                    </Grid>


                    <Grid xs={12} md={4} overflow='hidden'
                        justifyContent="center" >

                        <Box component="img" margin={'auto'}
                            sx={{
                                width: '8rem',
                                height: '4rem',
                                justifyContent: "center"
                            }}
                            alt="Logo."
                            src={LogoNvo} />

                    </Grid>


                    <Grid item xs={12} md={4} margin={'auto'}>
                        <Box justifyContent={'center'}>
                            <Button target={'_blank'} href="https://www.facebook.com/cordobasierras" style={{ color: '#FFFFFF' }} >
                                <FacebookIcon />
                            </Button>

                            <Button target={'_blank'} href="https://www.instagram.com/donajuana.nono/" style={{ color: '#FFFFFF' }} >
                                <InstagramIcon />
                            </Button>

                            <Button target={'_blank'} href="https://wa.me/543512189040?text=Hola%20" style={{ color: '#FFFFFF' }} >
                                <WhatsAppIcon />
                            </Button>

                            <Button target={'_blank'} href="mailto:juanacomplejo@hotmail.com" style={{ color: '#FFFFFF' }} >
                                <EmailIcon />
                            </Button>

                            <Button target={'_blank'} href="https://www.booking.com/hotel/ar/complejo-de-cabanas-dona-juana.es-ar.html?aid=318615;label=Spanish_Argentina_ES_AR_20153587225-6h15TH8LvM25bNckrW9zZwS217247257083%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-162435869305%3Alp1000126%3Ali%3Adec%3Adm;sid=fcb97bf773f0806fba24ba07bf04ebfb;dest_id=-1005603;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1646874831;srpvid=800b08a6554100d3;type=total;ucfs=1&#hotelTmpl" style={{ color: '#FFFFFF', height: '32px' }} >
                                <Box component="img" margin={'auto'} 

                                    sx={{
                                        width: '1rem',
                                        height: '1rem',
                                        color: 'black'
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