import React, { useState } from 'react';
import RestauranteViewComponent from './ViewRestaurante';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AgregarRestauranteComponent from './AgregarRestaurantes';

function RestaurantesComponent() {
    const [restaurantePopup, setRestaurantePopup] = useState(false);

    const columns = [
        {
            value: 'Months'
        },
        {
            value: "Savings"
        },
        {
            value: ""
        },
        {
            value: ""
        }
    ];

    const rows = [
        {
            valueMonthName: "January",
            valueMonthMoney: "$100"
        },
        {
            valueMonthName: "Febuary",
            valueMonthMoney: "$80"
        },
        {
            valueMonthName: "Febuary",
            valueMonthMoney: "$80"
        },
        {
            valueMonthName: "Febuary",
            valueMonthMoney: "$80"
        },
        {
            valueMonthName: "Febuary",
            valueMonthMoney: "$80"
        },
        {
            valueMonthName: "Febuary",
            valueMonthMoney: "$80"
        },
        {
            valueMonthName: "Febuary",
            valueMonthMoney: "$80"
        },
        {
            valueMonthName: "Febuary",
            valueMonthMoney: "$80"
        },
        {
            valueMonthName: "Febuary",
            valueMonthMoney: "$80"
        },
        {
            valueMonthName: "Febuary",
            valueMonthMoney: "$80"
        },
        {
            valueMonthName: "Febuary",
            valueMonthMoney: "$80"
        },
        {
            valueMonthName: "Febuary",
            valueMonthMoney: "$80"
        },
        {
            valueMonthName: "Febuary",
            valueMonthMoney: "$80"
        },
        {
            valueMonthName: "Febuary",
            valueMonthMoney: "$80"
        }
    ]
    
    return (
        <div>
            <h1>Restaurantes component</h1>
            <RestauranteViewComponent columnsData={columns} rowsData={rows} />
            <Stack spacing={2} direction="row">
                <Button
                    variant="contained"
                    className='btnRestaurante'
                    onClick={() => setRestaurantePopup(true)}
                >
                    Agregar Restaurante
                </Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" className='btnRestaurante'>Abrir caja</Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" className='btnRestaurante'>Cerrar caja</Button>
            </Stack>
            <AgregarRestauranteComponent trigger={restaurantePopup} setTrigger={setRestaurantePopup}/>
        </div>
    );
};

export default RestaurantesComponent;