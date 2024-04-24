import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//importing drink components
import BebCalientesComponent from './BebidasCalientes';
import BebFriasComponent from './BebidasFrias';
import GaseosasComponent from './Gaseosas';
import LicoresComponent from './Licores';
import VinosComponent from './Vinos';




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

const columns = [
    {
        valueColumns: "ID"
    }, 
    {
        valueColumns: "Nombre"
    }, 
    {
        valueColumns: "Precio"
    }, 
    {
        valueColumns: "Restaurante"
    },
    {
        valueColumns: ""
    },
    {
        valueColumns: ""
    }
];

const rows = [
    {
        valueItemA: "Test1",
        valueItemB: "Test2",
        valueItemC: "Test3",
        valueItemD: "Test4"
    },
    {
        valueItemA: "Test1",
        valueItemB: "Test2",
        valueItemC: "Test3",
        valueItemD: "Test4"
    },
    {
        valueItemA: "Test1",
        valueItemB: "Test2",
        valueItemC: "Test3",
        valueItemD: "Test4"
    },
    {
        valueItemA: "Test1",
        valueItemB: "Test2",
        valueItemC: "Test3",
        valueItemD: "Test4"
    },
    {
        valueItemA: "Test1",
        valueItemB: "Test2",
        valueItemC: "Test3",
        valueItemD: "Test4"
    }
];

function BebidasComponent() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Bebidas calientes" {...a11yProps(0)} />
                        <Tab label="Bebidas Frías" {...a11yProps(1)} />
                        <Tab label="Gaseosas" {...a11yProps(2)} />
                        <Tab label="Licores" {...a11yProps(3)} />
                        <Tab label="Vinos" {...a11yProps(4)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <BebCalientesComponent columnsData={columns} rowsData={rows} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <BebFriasComponent columnsData={columns} rowsData={rows}/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <GaseosasComponent columnsData={columns} rowsData={rows} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <LicoresComponent columnsData={columns} rowsData={rows} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                    <VinosComponent columnsData={columns} rowsData={rows} />
                </CustomTabPanel>
            </Box>
        </div>
    );
};

export default BebidasComponent;