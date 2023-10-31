import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import DmComponent from '../Home/DmsAvailability';
import AssignedSrsComp from '../Home/AssignedSrs';
import EngineerAvailComp from '../Home/EngineerAvailability';
import '../Home/home.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '85vh'
}));

function LandingViewComponent() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={6}>
                    < DmComponent />
                    < AssignedSrsComp />
                </Grid>
                <Grid xs={6}>
                    < EngineerAvailComp />
                </Grid>
            </Grid>
        </Box>
    );
};

export default LandingViewComponent;