import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import OutgoingFUComponent from './OutgoingFollowups';
import IncomingFUComponent from './IncomingFollowups';
import './followups.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const incomingFUs = [
    { sr: 1, type: 2, severity: 3, date: 4, owner: 5, priority: 'Low'},
    { sr: 1, type: 2, severity: 3, date: 4, owner: 5, priority: 'Low'},
    { sr: 1, type: 2, severity: 3, date: 4, owner: 5, priority: 'Low'},
    { sr: 1, type: 2, severity: 3, date: 4, owner: 5, priority: 'Low'},
    { sr: 1, type: 2, severity: 3, date: 4, owner: 5, priority: 'Low'},
    { sr: 1, type: 2, severity: 3, date: 4, owner: 5, priority: 'Low'}
];

const outgoingFUs = [
    // { sr: 1, type: 2, severity: 3, date: 4, owner: 5, priority: 'Low'},
    // { sr: 1, type: 2, severity: 3, date: 4, owner: 5, priority: 'Low'},
    // { sr: 1, type: 2, severity: 3, date: 4, owner: 5, priority: 'Low'}
    // { sr: 1, type: 2, severity: 3, date: 4, owner: 5, priority: 'Low'},
    // { sr: 1, type: 2, severity: 3, date: 4, owner: 5, priority: 'Low'},
    // { sr: 1, type: 2, severity: 3, date: 4, owner: 5, priority: 'Low'}
];

function FollowUpComponent() {
    return (
        <div className='divFUs'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <OutgoingFUComponent data={outgoingFUs} />
                    </Grid>
                    <Grid xs={6}>
                        <IncomingFUComponent data={incomingFUs}/>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default FollowUpComponent;