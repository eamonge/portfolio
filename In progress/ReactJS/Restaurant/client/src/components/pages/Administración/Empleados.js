import React from 'react';
import Typography from '@mui/material/Typography';
import ViewTableComponent from './ViewTable';

const columns = [
    {
        valueColumns: "ID"
    },
    {
        valueColumns: "Cédula"
    },
    {
        valueColumns: "Nombre"
    },
    {
        valueColumns: "Primer apellido"
    },
    {
        valueColumns: "Segundo Apellido"
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


function EmpleadosComponent() {
    return (
        <div>
            <div className='contentDivHeader'>
                <Typography variant="h3" gutterBottom>
                    Empleados
                </Typography>
            </div>
            <br />
            <div className='contentDivTable'>
                <ViewTableComponent columnsData={columns} rowsData={rows}/>
            </div>
        </div>
    );
    
}

export default EmpleadosComponent;