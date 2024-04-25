import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BebidasComponent from './Bebidas';
import BufetComponent from './Bufet';

//importing Table View
import ViewTableComponent from '../Administración/ViewTable';
import EspecialidadesComponent from './Especialidades';

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
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

function EspecialesComponent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <div>
      <div className='contentDivHeader'>
        <Typography variant="h3" gutterBottom>
          Especiales
        </Typography>
      </div>
      <div className='contentDivTable'>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Bufet" {...a11yProps(0)} />
              <Tab label="Bebidas" {...a11yProps(1)} />
              <Tab label="Especialidades" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <BufetComponent />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <BebidasComponent />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <EspecialidadesComponent />
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}

export default EspecialesComponent;