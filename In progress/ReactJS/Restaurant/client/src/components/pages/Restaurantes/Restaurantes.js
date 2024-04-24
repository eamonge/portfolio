import React, { useState } from 'react';
import RestauranteViewComponent from './ViewRestaurante';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import AgregarRestauranteComponent from './AgregarRestaurantes';
import AddIcon from '@mui/icons-material/Add';
import '../../styles/restaurantes.css';

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
        <div className='restaurantesContentdiv-comp contentDisplay-div' style={{ textAlign: 'center' }}>
            <button className='addRest-btn' onClick={() => { setRestaurantePopup(true) }}>
                <AddIcon />
            </button>
            <br />
            <br />
            <RestauranteViewComponent columnsData={columns} rowsData={rows} />
            <button className='restauranteComp-btn'>
                Abrir caja
            </button>
            <button className='restauranteComp-btn'>
                Cerrar caja
            </button>
            <AgregarRestauranteComponent trigger={restaurantePopup} setTrigger={setRestaurantePopup} />
        </div>
    );
};

export default RestaurantesComponent;