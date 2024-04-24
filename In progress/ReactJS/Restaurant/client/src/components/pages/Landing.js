import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Route, Routes } from 'react-router-dom';

//Importing navbar links
import AdministracionComponent from './Administración/Administracion';
import RestaurantesComponent from './Restaurantes/Restaurantes';
import LoginComponent from './Login';
import MainComponent from './Main';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function LandingViewComponent() {
    return (
        <div className='contentdiv-container'>
            <Routes>
                <Route path='/administracion' Component={AdministracionComponent} />
                <Route path='/restaurantes' Component={RestaurantesComponent} />
                <Route path='/home' Component={MainComponent} />
                <Route path='/' Component={LoginComponent} />
            </Routes>
        </div>
    );
};

export default LandingViewComponent;