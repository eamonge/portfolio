import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import NavbarComponent from './components/pages/Navbar';
import ContentComponent from './components/pages/Content';

function App() {

  // const generateCodeChallenge = () => {
  //   const codeVerifier = 

  // }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid xs={12}>
          <NavbarComponent></NavbarComponent>
        </Grid>
        <Grid xs={12}>
          <ContentComponent />
        </Grid>
        <Grid xs={12}>
          <Item>xs=12 3</Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
