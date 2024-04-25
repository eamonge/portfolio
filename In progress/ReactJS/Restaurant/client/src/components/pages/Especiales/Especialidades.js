import React from 'react';
import ViewTableComponent from './ViewTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
    {
        valueColumns: "ID"
    },
    {
        valueColumns: "Nombre platillo"
    },
    {
        valueColumns: "Ingredientes"
    },
    {
        valueColumns: "Precio"
    },
    {
        valueColumns: "Detalle"
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

function EspecialidadesComponent() {

    return (
        <div>
            <div className='tableDivContent'>
                <table>
                    <thead>
                        <tr>
                            {
                                columns.map(thead => (
                                    <th>{thead.valueColumns}</th>
                                ))

                            }

                            {/* {columns.map(head => (
                            <th>{head.value}</th>
                        ))} */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rows.map(tbody => (
                                <tr>
                                    <td>{tbody.valueItemA}</td>
                                    <td>{tbody.valueItemB}</td>
                                    <td>{tbody.valueItemC}</td>
                                    <td>{tbody.valueItemD}</td>
                                    <td>{tbody.valueItemE}</td>
                                    {/* <td>{tbody.valueItemB}</td>
                                <td>{tbody.valueItemC}</td>
                                <td>{tbody.valueItemD}</td> */}
                                    {/* <td>{tbody.valueItemF}</td> */}
                                    <td><EditIcon /></td>
                                    <td><DeleteIcon /></td>
                                </tr>
                            ))
                        }
                        {/* {
                        rows.map(especiales => (
                            <tr>
                                <td>{especiales.valuyeItemA}</td>
                                <td>{especiales.valueItemB}</td>
                                <td><EditIcon /></td>
                                <td><DeleteIcon /></td>
                            </tr>
                        ))
                    } */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default EspecialidadesComponent;