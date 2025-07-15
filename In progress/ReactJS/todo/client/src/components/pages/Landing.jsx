import React, { useEffect, useState } from 'react'
import '../styles/landing.css';
import { useContext } from 'react';
import DataContext from '../context/DataContextProvider';
import { addTask, deleteTask, getTaskData, updateTaskStatus } from '../api/tasksAPI';
import axios from 'axios';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AllTasks from './AllTasks';
import PendingTasks from './PendingTasks';
import CompletedTasks from './CompletedTasks';


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

const Landing = () => {
  const { userData } = useContext(DataContext)
  const [taskData, setTaskData] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="main-backDrop">
      <div className="landingContent">
        <h1>ToDo List</h1>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChangeTab} aria-label="basic tabs example">
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Pending" {...a11yProps(1)} />
              <Tab label="Completed" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <AllTasks />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <PendingTasks />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <CompletedTasks />
          </CustomTabPanel>
        </Box>
        <h5>{alertMessage}</h5>
      </div>
    </div>
  )
}

export default Landing