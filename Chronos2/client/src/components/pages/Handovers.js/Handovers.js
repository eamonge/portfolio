import React from 'react';
import HandoverView from './HandoversView';
import './handovers.css';
import Button from '@mui/material/Button';

function createData(sr, severity, type, justification, steps, subteam) {
    return { sr, severity, type, justification, steps, subteam };
}

const handovers = [
    createData(1, 2, 3, 4, 5, 6),
    createData(1, 2, 3, 4, 5, 6),
    createData(1, 2, 3, 4, 5, 6),
    createData(1, 2, 3, 4, 5, 6),
    createData(1, 2, 3, 4, 5, 6)
];

// const handovers = [];

function HandoversComponent() {

    return (
        <div>
            {/* <h1>Handover component!</h1> */}
            < br />
            {handovers.length > 0 ? < HandoverView handovers={handovers} /> : <h1>No handovers pending</h1>}
            < br />
            <Button variant="contained">Add Handover</Button>
        </div>
    );
};

export default HandoversComponent;