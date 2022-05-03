import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DosDormitorios from './dosDormController.jsx';
import UnDormitorio from './unDormController.jsx';
import Parque from './parqueController.jsx';
import AppBar from '@mui/material/AppBar';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function GaleriaConfig() {

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: '100%' }}>

      <AppBar position="static" sx={{ backgroundColor: '#C7A389' }}>
        <Tabs value={value} onChange={handleChange} 
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example">

          <Tab label="Parque" {...a11yProps(0)} />
          <Tab label="Cabaña 1 Dormitorio" {...a11yProps(1)} />
          <Tab label="Cabaña 2 Dormitorios" {...a11yProps(2)} />
        </Tabs>
      
      </AppBar>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
       
      <TabPanel value={value} index={0}>
        <Parque />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UnDormitorio />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DosDormitorios />
      </TabPanel>

      </SwipeableViews>

    </Box>
  );
}




