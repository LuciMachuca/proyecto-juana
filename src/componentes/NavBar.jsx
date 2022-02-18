import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
//import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../Imagenes/Logo.png';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';


//const pages = ['Como Llegar', 'Galería', 'Equipamiento', 'Contacto'];

const useStyles = makeStyles(theme => ({
  //offset: theme.mixins.toolbar,  // coloca el alto de forma dinámica
  root: {
    palette: {
      primary: { main: '#81E9E6' },
      secondary: { main: '#871A1A' },
      neutral: { main: '#F3F0F0', contrastText: '#fff' },
    },
    typography: {
      fontFamily: 'Spartan',

    },
  }
}))


const Navbar = () => {

  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  /* const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };  */

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  /* const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }; */

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography className={classes.root}
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 16, mr: 10, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box className={classes.root} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"
                  >{page}</Typography>
                </MenuItem>
              ))} */}

              <Button variant="text" color="primary" component={Link} to='/contacto'>
                Contacto
              </Button>

              <Button variant="text" color="primary" component={Link} to='/equipamiento'>
                Equipamiento
              </Button>

              <Button variant="text" color="primary" component={Link} to='/galeria'>
                Galería
              </Button>

              <Button target={'_blank'} variant="text" color="primary" href='https://www.google.com.ar/maps/place/Caba%C3%B1as+Do%C3%B1a+Juana/@-31.7944641,-64.9859026,17z/data=!3m1!4b1!4m5!3m4!1s0x942d2f939b9fef69:0x86d8ee840945535e!8m2!3d-31.7944687!4d-64.9837139?hl=es'>
                Cómo Llegar
              </Button>

            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
            <Button variant="text" color="primary" component={Link} to='/contacto'
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Contacto
            </Button>

            <Button variant="text" color="primary" component={Link} to='/equipamiento'
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Equipamiento
            </Button>

            <Button variant="text" color="primary" component={Link} to='/galeria'
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Galería
            </Button>

            <Button target={'_blank'} variant="text" color="primary" href='https://www.google.com.ar/maps/place/Caba%C3%B1as+Do%C3%B1a+Juana/@-31.7944641,-64.9859026,17z/data=!3m1!4b1!4m5!3m4!1s0x942d2f939b9fef69:0x86d8ee840945535e!8m2!3d-31.7944687!4d-64.9837139?hl=es'
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Cómo Llegar
            </Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>


          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;