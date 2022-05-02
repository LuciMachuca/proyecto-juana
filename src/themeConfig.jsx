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
});


export default theme;