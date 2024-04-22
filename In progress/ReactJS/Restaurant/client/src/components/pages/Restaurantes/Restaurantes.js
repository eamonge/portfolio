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
        <div className='restaurantesContentdiv-comp' style={{textAlign: 'center'}}>
            <h1 className='componentTitleH1'>Restaurantes component</h1>
            <button className='addRest-btn' onClick={() => { setRestaurantePopup(true) }}>
                <AddIcon />
            </button>
            {/* <Button
                variant="contained"
                className='btnRestaurante btnRestaurante-add'
                style={{textAlign: 'center'}}
                >
                    <AddIcon />
            </Button> */}
            <br />
            <br />
            <RestauranteViewComponent columnsData={columns} rowsData={rows} />
            <button>
                +
            </button>
            <button>
                <AddIcon />
            </button>
            {/* <Stack spacing={2} direction="row">
                <Button variant="contained" className='btnRestaurante'>Abrir caja</Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" className='btnRestaurante'>Cerrar caja</Button>
            </Stack> */}
            <AgregarRestauranteComponent trigger={restaurantePopup} setTrigger={setRestaurantePopup}/>
        </div>
    );
};

export default RestaurantesComponent;