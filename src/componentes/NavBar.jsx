import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../Imagenes/Logo_Limpio_m.png';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import theme from '../themeConfig'
import Grid from '@mui/material/Grid';



const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static" style={{ backgroundColor: '#BB9981' }}>
      <Container maxWidth="xl"  >
        <Toolbar disableGutters >


          <Grid xs={12} sm={4} overflow='hidden'
            justifyContent="center"
          >

            <Link to="/">
              <Box component="img"

                sx={{
                  width: '50%',
                  height: '50%',
                  paddingTop: '5px'
                }}
                alt="Logo."
                src={Logo}
              />
            </Link>
          </Grid>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              style={{ color: 'black' }}

            >
              <MenuIcon />
            </IconButton>


            <Menu style={{ color: 'black' }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                flexGrow: 16, mr: 10, display: { xs: 'block', md: 'none' },
              }}
            >

              <Button style={{ color: 'black' }} component={Link} to='/contacto'>
                Contacto
              </Button>

              <Button variant="text" style={{ color: 'black' }} component={Link} to='/equipamiento'>
                Equipamiento
              </Button>

              <Button variant="text" style={{ color: 'black' }} component={Link} to='/galeria'>
                Galería
              </Button>

              <Button variant="text" style={{ color: 'black' }} component={Link} to='/info'>
                Información
              </Button>

              <Button target={'_blank'} variant="text" style={{ color: 'black' }} href='https://www.google.com.ar/maps/place/Caba%C3%B1as+Do%C3%B1a+Juana/@-31.7944641,-64.9859026,17z/data=!3m1!4b1!4m5!3m4!1s0x942d2f939b9fef69:0x86d8ee840945535e!8m2!3d-31.7944687!4d-64.9837139?hl=es'>
                Cómo Llegar
              </Button>

            </Menu>
          </Box>


          <Box style={{ justifyContent: 'end' }}
            sx={{ flexGrow: 9, display: { xs: 'none', md: 'flex' } }}>

            <Button style={{ color: 'black' }} component={Link} to='/contacto'
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Contacto
            </Button>

            <Button variant="text" style={{ color: 'black' }} component={Link} to='/equipamiento'
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Equipamiento
            </Button>

            <Button variant="text" style={{ color: 'black' }} component={Link} to='/galeria'
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Galería
            </Button>

            <Button variant="text" style={{ color: 'black' }} component={Link} to='/info'
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Información
            </Button>

            <Button target={'_blank'} variant="text" style={{ color: 'black' }} href='https://www.google.com.ar/maps/place/Caba%C3%B1as+Do%C3%B1a+Juana/@-31.7944641,-64.9859026,17z/data=!3m1!4b1!4m5!3m4!1s0x942d2f939b9fef69:0x86d8ee840945535e!8m2!3d-31.7944687!4d-64.9837139?hl=es'
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Cómo Llegar
            </Button>

          </Box>

          <Box sx={{ flexGrow: 1 }}>


          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;