import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import NavbarComponent from './components/pages/Navbar/Navbar';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginComponent from './components/pages/Login/Login';
import SignupComponent from './components/pages/Signup/Signup';
import LandingComponent from './components/pages/Landing/Landing';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));



function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Router>
          <Grid container spacing={0}>
            <Grid xs={12}>
              <NavbarComponent />
            </Grid>
            <Grid xs={12}>
              <Routes>
                <Route path='/landing' Component={LandingComponent}/>
                <Route path='/signup' Component={SignupComponent} />
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
