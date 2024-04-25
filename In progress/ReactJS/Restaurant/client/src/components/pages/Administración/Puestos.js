import React from 'react';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
    {
        valueColumns: "ID"
    },
    {
        valueColumns: "Nombre"
    },
    {
        valueColumns: "Tipo Rol"
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
        valueItemD: "Test4"
    }
];


function PuestosComponent() {
    return (
        <div>
            <div className='contentDivHeader'>
                <Typography variant="h3" gutterBottom>
                    Puestos
                </Typography>
            </div>
            <br />
            <br />
            <br />
            <div className='tableDivContent'>
                <table>
                    <thead>
                        <tr>
                            {
                                columns.map(thead => (
                                    <th>{thead.valueColumns}</th>
                                ))

                            }
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
                                    <td><EditIcon /></td>
                                    <td><DeleteIcon /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default PuestosComponent;