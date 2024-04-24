import React from 'react';
import ViewTableComponent from '../Administración/ViewTable';

const columns = [
    {
        valueColumns: "ID"
    }, 
    {
        valueColumns: "Nombre"
    }, 
    {
        valueColumns: "Precio"
    }, 
    {
        valueColumns: "Tipo"
    }, 
    {
        valueColumns: "Unidad de medida"
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
        valuyeItemA: "Test",
        valueItemB: "Test2",
        valueItemC: "Test3",
        valueItemD: "Test4",
        valueItemE: "Test5"
    },
    {
        valuyeItemA: "Test",
        valueItemB: "Test2",
        valueItemC: "Test3",
        valueItemD: "Test4",
        valueItemE: "Test5"
    },
    {
        valuyeItemA: "Test",
        valueItemB: "Test2",
        valueItemC: "Test3",
        valueItemD: "Test4",
        valueItemE: "Test5"
    },
    {
        valuyeItemA: "Test",
        valueItemB: "Test2",
        valueItemC: "Test3",
        valueItemD: "Test4",
        valueItemE: "Test5"
    },
    {
        valuyeItemA: "Test",
        valueItemB: "Test2",
        valueItemC: "Test3",
        valueItemD: "Test4",
        valueItemE: "Test5"
    },
    {
        valuyeItemA: "Test",
        valueItemB: "Test2",
        valueItemC: "Test3",
        valueItemD: "Test4",
        valueItemE: "Test5"
    }
];

function BufetComponent() {
    return(
        <div>
            <ViewTableComponent columnsData={columns} rowsData={rows}/>
        </div>
    );
}

export default BufetComponent;