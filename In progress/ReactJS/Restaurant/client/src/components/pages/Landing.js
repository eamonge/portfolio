import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Route, Routes } from 'react-router-dom';

//Importing navbar links




import EquiposComponent from './Productos/Equipos';
import TecnologiaComponent from './Productos/Tecnologias';
import LimpiezaComponent from './Productos/Limpieza';
import DesechablesComponent from './Productos/Desechables';
import ComestiblesComponent from './Productos/Comestibles';
import MarcasComponent from './Marcas/Marcas';
import ClienteComponent from './Clientes/Clientes';
import AdministracionComponent from './Administración/Administracion';
import RestaurantesComponent from './Restaurantes/Restaurantes';
import LoginComponent from './Login';
import MainComponent from './Main';

function LandingViewComponent() {
    return (
        <div className='contentdiv-container'>
            <Routes>
                <Route path='/equipos' Component={EquiposComponent} />
                <Route path='/tecnologia' Component={TecnologiaComponent} />
                <Route path='/limpieza' Component={LimpiezaComponent} />
                <Route path='/desechables' Component={DesechablesComponent} />
                <Route path='/comestibles' Component={ComestiblesComponent} />
                <Route path='/marcas' Component={MarcasComponent} />
                <Route path='/clientes' Component={ClienteComponent} />
                <Route path='/administracion' Component={AdministracionComponent} />
                <Route path='/restaurantes' Component={RestaurantesComponent} />
                <Route path='/home' Component={MainComponent} />
                <Route path='/' Component={LoginComponent} />
            </Routes>
        </div>
    );
};

export default LandingViewComponent;