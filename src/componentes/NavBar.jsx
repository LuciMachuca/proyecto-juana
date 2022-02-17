import React from 'react';

const NavBar = () => {
    return(
        <div>
            NavBar
        </div>
    )
}

export default NavBar;


// LO QUE HABÍA EN APP

/* import React from 'react';
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles';
import { ThemeProvider} from '@mui/material/styles';
import theme from './themeConfig';
import NavBar from './componentes/NavBar.jsx';

const useStyles = makeStyles( (theme) => {

})

function App() {

  const l = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <NavBar>
        Hola, soy NavBar
      </NavBar>

      

      <Button
      href='https://www.google.com/maps/place/Caba%C3%B1as+Do%C3%B1a+Juana/@-31.7944687,-64.9859026,17z/data=!3m1!4b1!4m5!3m4!1s0x942d2f939b9fef69:0x86d8ee840945535e!8m2!3d-31.7944687!4d-64.9837139'>
        Cómo Llegar
      </Button>

      </ThemeProvider>
  );
}

export default App; */