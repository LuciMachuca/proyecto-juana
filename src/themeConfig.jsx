//import { createTheme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: { main: '#81E9E6' },
        secondary: { main: '#871A1A' },
        neutral: { main: '#F3F0F0', contrastText: '#fff' },
        
    },
    typography: {
        fontFamily: 'Spartan',
        fontSize: 12,
    }
});


export default theme;