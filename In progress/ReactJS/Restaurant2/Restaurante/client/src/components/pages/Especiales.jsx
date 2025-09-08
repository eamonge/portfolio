import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

//Importing components
import EspecialesPanel from './Administracion/EspecialesPanel';
import Bebidas from './Administracion/Bebidas';
import Bufet from './Administracion/Bufet';

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
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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

const Especiales = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Bufet" {...a11yProps(0)} />
                        <Tab label="Bebidas" {...a11yProps(1)} />
                        <Tab label="Especiales" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Bufet />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Bebidas />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <EspecialesPanel />
                </CustomTabPanel>
            </Box>
        </div>
    )
}

export default Especiales