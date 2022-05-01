import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DosDormitorios from './dosDormController.jsx';
import UnDormitorio from './unDormController.jsx';
import Parque from './parqueController.jsx';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function GaleriaConfig() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // para la responsividad  --------------------------------
  const [anchorElNav, setAnchorElNav] = React.useState(null);

 const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //------------------------------------------------------

  

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Parque" {...a11yProps(0)}  /> 
          <Tab label="Cabaña de 1 Dormitorio" {...a11yProps(1)}/> 
          <Tab label="Cabaña de 2 Dormitorios" {...a11yProps(2)}/> 
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Parque/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <UnDormitorio/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <DosDormitorios/>
      </TabPanel>
    </Box>
  );
} 




