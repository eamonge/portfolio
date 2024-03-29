import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function DashTableComponent(props) {

    const handoversList = props.handovers;

    return (
        <div>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">SR</TableCell>
                                <TableCell align="right">Type</TableCell>
                                <TableCell align="right">Severity</TableCell>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Time</TableCell>
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
                                    <TableCell align="right">{row.type}</TableCell>
                                    <TableCell align="right">{row.severity}</TableCell>
                                    <TableCell align="right">{row.date}</TableCell>
                                    <TableCell align="right">{row.time}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default DashTableComponent;