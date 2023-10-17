import * as React from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function IncomingFUComponent(props) {
    const incomingFollowUps = props.data;
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}/${month}/${year}`;

    return (
        <div className='content-div'>
            <div>
                <Typography variant="h5">
                    Incoming Follow ups
                </Typography>
                < hr />
                {
                    incomingFollowUps.length > 0 ?
                        <TableContainer component={Paper}>
                            <Table className='FUtable' aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="right">SR</TableCell>
                                        <TableCell align="right">Type</TableCell>
                                        <TableCell align="right">Severity</TableCell>
                                        <TableCell align="right">Date</TableCell>
                                        <TableCell align="right">Owner</TableCell>
                                        <TableCell align="right">Priority</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {incomingFollowUps.map((row) => (
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
                                            <TableCell align="right">{row.owner}</TableCell>
                                            <TableCell align="right">{row.priority}</TableCell>
                                        </TableRow>
                                    ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        : <Typography variant="h5"> No incoming follow ups for {currentDate} </Typography>
                }
            </div>
        </div>
    );
};

export default IncomingFUComponent;