import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import NavbarComponent from '../Navbar/Navbar';
import ViewCalendarComponent from '../Calendar/CalendarView';
import { Dialog } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function LandingComponent() {
    return (
        <div style={{padding: '8px'}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={12}>
                        <NavbarComponent />
                    </Grid>
                    <Grid xs={12}>
                        <ViewCalendarComponent />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default LandingComponent;