import React from 'react';
import Typography from '@mui/material/Typography';
import ViewTableComponent from '../Administración/ViewTable';

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

function ClienteComponent() {
    return (
        <div>
            {/* <Typography variant="h3" gutterBottom>
                Clientes
            </Typography> */}
            <ViewTableComponent columnsData={columns} rowsData={rows} />
            {/* <div className='contentDivHeader' style={{marginTop: '100px'}}>
                <Typography variant="h3" gutterBottom>
                    Clientes
                </Typography>
            </div>
            <br />
            <br />
            <div className='contentDivTable'>
                <ViewTableComponent columnsData={columns} rowsData={rows} />
            </div> */}
        </div>
    );
};

export default ClienteComponent;