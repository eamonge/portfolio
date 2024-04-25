import logo from './logo.svg';
import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";

//Importing frontEnd components
import NavbarComponent from './components/pages/Navbar/Navbar';
import LoginComponent from './components/pages/Login/Login';
import LandingComponent from './components/pages/Landing/Landing';
import AnimeListComponent from './components/pages/Anime/AnimeList';
import SeenAnimesComponent from './components/pages/Anime/SeenAnimes';

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
      <Box sx={{ flexGrow: 1 }}>
        <Router>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <NavbarComponent />
            </Grid>
            <Grid xs={12}>
              <Routes>
                <Route path='/seen_animes' Component={SeenAnimesComponent} />
                <Route path='/anime_list' Component={AnimeListComponent} />
                <Route path='/landing' Component={LandingComponent} />
                <Route path='/' Component={LoginComponent} />
              </Routes>
            </Grid>
          </Grid>
        </Router>
      </Box>
    </div>
  );
}

export default App;