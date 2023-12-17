import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import NavbarComponent from './components/pages/Navbar/Navbar';
import LandingViewComponent from './components/pages/ContentView/Content';
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import HandoversComponent from './components/pages/Handovers.js/Handovers';
import DashboardComponent from './components/pages/Dashboards/Dashboard';
import FollowUpComponent from './components/pages/Follow ups/FollowUps';
// import LoginCo
import LoginComponent from './components/pages/Login/Login';
import MySCheduleComponent from './components/pages/My Schedule/MySchedule';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (

    <div className="App">
      <Box sx={{ flexGrow: 1, width: '100vw', height: '100vh' }}>
        <Router>
          <Grid container spacing={2} className='gridview'>
            <Grid xs={12} className='grid-row'>
              <NavbarComponent />
            </Grid>
            <Grid xs={12}>
              <Routes>
                <Route path='/follow-ups' Component={FollowUpComponent}/>
                <Route path='/dashboard' Component={DashboardComponent}/>
                <Route path='/handovers' Component={HandoversComponent}/>
                <Route path='/login' Component={LoginComponent} />
                <Route path='/myschedule' Component={MySCheduleComponent} />
                {/* <Route path='/' exact element={<Navigate to="/login" replace/>}/> */}
                <Route path='/' Component={LandingViewComponent}/>
              </Routes>
              {/* <ContentViewComponent /> */}
            </Grid>
          </Grid>
        </Router>
      </Box>
    </div>
  );
}

export default App;
