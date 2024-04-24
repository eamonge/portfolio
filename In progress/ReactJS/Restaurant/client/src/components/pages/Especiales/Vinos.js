import React from 'react';
import ViewTableComponent from './ViewTable';

function VinosComponent(props) {
    const columns = props.columnsData;
    const rows = props.rowsData;

    return(
        <div>
            <ViewTableComponent columnsData={columns} rowsData={rows}/>
        </div>
    );
};

export default VinosComponent;