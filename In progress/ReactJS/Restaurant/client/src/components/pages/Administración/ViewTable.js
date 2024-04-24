import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ViewTableComponent(props) {
    const columns = props.columnsData;
    const rows = props.rowsData;
    return(
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
                                <td>{tbody.valuyeItemA}</td>
                                <td>{tbody.valueItemB}</td>
                                <td>{tbody.valueItemC}</td>
                                <td>{tbody.valueItemD}</td>
                                <td>{tbody.valueItemE}</td>
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
    );
}

export default ViewTableComponent;