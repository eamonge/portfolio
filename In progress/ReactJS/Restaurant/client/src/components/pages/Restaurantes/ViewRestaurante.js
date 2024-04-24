import React from 'react';
import '../../styles/restaurantes.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function RestauranteViewComponent(props) {
    const columns = props.columnsData;
    const rows = props.rowsData;

    return (
        <div className='tableDivContent'>
            <table>
                <thead>
                    <tr>
                        {columns.map(head => (
                            <th>{head.value}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map(tableRows => (
                            <tr>
                                <td>{tableRows.valueMonthName}</td>
                                <td>{tableRows.valueMonthMoney}</td>
                                <td><EditIcon /></td>
                                <td><DeleteIcon /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default RestauranteViewComponent;