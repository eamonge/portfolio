import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ChartAssignment from './Chart';
import DashTableComponent from './DashboardTable';
// import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const data = [
    { type: 'Cases', amountCases: 36 }, 
    { type: 'Collab', amountCollab: 51 },
    { type: 'Follow ups', amountFollowups: 23 }
];

const handovers = [,
    { sr: 1, type: 2, severity: 3, date: 4, time: 5},
    { sr: 1, type: 2, severity: 3, date: 4, time: 5},
    { sr: 1, type: 2, severity: 3, date: 4, time: 5},
    { sr: 1, type: 2, severity: 3, date: 4, time: 5},
    { sr: 1, type: 2, severity: 3, date: 4, time: 5}
];

function DashboardComponent() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={6}>
                    { data.length > 0 ? <ChartAssignment data={data}/> : <h1>No assignments yet</h1>}
                </Grid>
                <Grid xs={6}>
                    { handovers.length > 0 ? <DashTableComponent handovers={handovers}/> : <h1>No cases assigned</h1>}
                </Grid>
            </Grid>
        </Box>
    );

};

export default DashboardComponent;