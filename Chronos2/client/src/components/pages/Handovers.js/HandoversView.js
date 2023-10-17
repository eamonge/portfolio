import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function HandoverView(props) {

    const handoversList = props.handovers;


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">SR</TableCell>
                        <TableCell align="right">Severity</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">Handover justification</TableCell>
                        <TableCell align="right">Next steps</TableCell>
                        <TableCell align="right">Subteam</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {handoversList.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.sr}
                            </TableCell>
                            <TableCell align="right">{row.severity}</TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                            <TableCell align="right">{row.justification}</TableCell>
                            <TableCell align="right">{row.steps}</TableCell>
                            <TableCell align="right">{row.subteam}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default HandoverView;