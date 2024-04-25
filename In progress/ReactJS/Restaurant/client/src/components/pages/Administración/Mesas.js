import React from 'react';
import Typography from '@mui/material/Typography';
import ViewTableComponent from './ViewTable';

const columns = [
    {
        valueColumns: "ID"
    },
    {
        valueColumns: "Nombre"
    },
    {
        valueColumns: "Número"
    },
    {
        valueColumns: "Cantidad de sillas"
    },
    {
        valueColumns: "Restaurante"
    },
    {
        valueColumns: ""
    },
    {
        valueColumns: ""
    }
];

const rows = [
    {
        valueItemA: "Test",
        valueItemB: "Test2",
        valueItemC: "Test3",
        valueItemD: "Test4",
        valueItemE: "Test5"
    },
    {
        valueItemA: "Test",
        valueItemB: "Test2",
        valueItemC: "Test3",
        valueItemD: "Test4",
        valueItemE: "Test5"
    },
    {
        valueItemA: "Test",
        valueItemB: "Test2",
        valueItemC: "Test3",
        valueItemD: "Test4",
        valueItemE: "Test5"
    },
    {
        valueItemA: "Test",
        valueItemB: "Test2",
        valueItemC: "Test3",
        valueItemD: "Test4",
        valueItemE: "Test5"
    },
    {
        valueItemA: "Test",
        valueItemB: "Test2",
        valueItemC: "Test3",
        valueItemD: "Test4",
        valueItemE: "Test5"
    }
];

function MesasComponent() {
    return (
        <div>
            <div className='contentDivHeader'>
                <Typography variant="h3" gutterBottom>
                    Mesas
                </Typography>
            </div>
            <br />
            <div className='contentDivTable'>
                <ViewTableComponent columnsData={columns} rowsData={rows}/>
            </div>
        </div>
    );
};

export default MesasComponent;