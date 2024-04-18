import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import NavBarComponent from './components/pages/Navbar/Navbar';
import DueDatesComponent from './components/pages/Dues/DueDates';
import LoginComponent from './components/pages/login/Login';
import LandingComponent from './components/pages/landing/Landing';
import './components/styles/login.css';

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Router>
          <Grid container spacing={0}>
            <Grid xs={12}>
              <NavBarComponent />
            </Grid>
            <Grid xs={12}>
              <Routes>
                <Route path='/landing' Component={LandingComponent} />
                 <Route path='/dues' Component={DueDatesComponent} />
                <Route path='/' Component={LoginComponent} />
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
                {/* <Route path='' Component={}/> */}
              </Routes>
            </Grid>
            {/* <Grid xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid xs={8}>
            <Item>xs=8</Item>
          </Grid> */}
          </Grid>
        </Router>
      </Box>
    </div>
  );
}

export default App;
