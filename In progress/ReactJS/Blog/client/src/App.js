import './App.css';
import Grid from '@mui/material/Unstable_Grid2';
import NavbarComponent from './pages/Home/Navbar';
import LandingMainComponent from './pages/Home';

function App() {
  return (
    <div className="App">
      <Grid spacing={2}>
        <Grid xs={12}>
          <NavbarComponent />
        </Grid>
        <Grid xs={11}>
          <LandingMainComponent />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
