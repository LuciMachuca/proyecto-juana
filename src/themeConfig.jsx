//import { createTheme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: { main: '#534340' },
        secondary: { main: '#95E1D3' },
        neutral: { main: '#EAFFD0' },
        
    },
    typography: {
        fontFamily: 'Spartan',
        fontSize: 12,
    },

    /* breakpoints: {
        values: {
          mobile: 0,
          tablet: 640,
          laptop: 1024,
          desktop: 1200,
        },
      }, */
});


export default theme;