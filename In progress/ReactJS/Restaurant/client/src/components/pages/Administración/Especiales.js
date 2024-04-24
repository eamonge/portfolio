import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//importing Table View
import ViewTableComponent from './ViewTable';

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
            valueColumns: "Tipo"
        }, 
        {
            valueColumns: "Unidad de medida"
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
            valuyeItemA: "Test",
            valueItemB: "Test2",
            valueItemC: "Test3",
            valueItemD: "Test4",
            valueItemE: "Test5"
        },
        {
            valuyeItemA: "Test",
            valueItemB: "Test2",
            valueItemC: "Test3",
            valueItemD: "Test4",
            valueItemE: "Test5"
        },
        {
            valuyeItemA: "Test",
            valueItemB: "Test2",
            valueItemC: "Test3",
            valueItemD: "Test4",
            valueItemE: "Test5"
        },
        {
            valuyeItemA: "Test",
            valueItemB: "Test2",
            valueItemC: "Test3",
            valueItemD: "Test4",
            valueItemE: "Test5"
        },
        {
            valuyeItemA: "Test",
            valueItemB: "Test2",
            valueItemC: "Test3",
            valueItemD: "Test4",
            valueItemE: "Test5"
        },
        {
            valuyeItemA: "Test",
            valueItemB: "Test2",
            valueItemC: "Test3",
            valueItemD: "Test4",
            valueItemE: "Test5"
        }
    ];



    return (
        <div>
            {/* <h1>Especiales component</h1> */}
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Bufet" {...a11yProps(0)} />
                        <Tab label="Bebidas" {...a11yProps(1)} />
                        <Tab label="Especialidades" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <ViewTableComponent columnsData={columns} rowsData={rows} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Bebidas
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Especialidades
                </CustomTabPanel>
            </Box>
        </div>
    );
}

export default EspecialesComponent;