import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ViewTableComponent(props) {
    const columns = props.columnsData;
    const rows = props.rowsData;

    // for (var i = 0; i < 10; i++) {
    //     console.log(i);
    // }

    // setId();ss

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
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map(tbody => (
                            <tr>
                                <td>{tbody.valuysdfeItemA}</td>
                                <td>{tbody.valueItemB}</td>
                                <td>{tbody.valueItemC}</td>
                                <td>{tbody.valsueItemD}</td>
                                <td>{tbody.valueItemE}</td>
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

export default ViewTableComponent;