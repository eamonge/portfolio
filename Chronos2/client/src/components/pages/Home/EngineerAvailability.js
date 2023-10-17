import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function EngineerAvailComp() {

    const [status, setStatus] = useState('Offline');
    const [timer, setTimer] = useState('');

    const handleChange = (event) => {
        setStatus(event.target.value);
        // startStopwatch();
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (

        <div className='engineer-container content-div'>
            <h1>Engineer Availability</h1>
            <div className='eng-typdiv'>
                <Accordion className='engineer-accordion'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{ backgroundColor: 'greenyellow' }}
                        className='online-accordion summary-accordion'
                    >
                        <Typography>Online</Typography>
                    </AccordionSummary>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid xs={6}>
                                <AccordionDetails>
                                    <Typography variant='h5'>
                                        Perf/Config
                                    </Typography>
                                    <Typography variant='h6'>
                                        JoseBo
                                    </Typography>
                                </AccordionDetails>
                            </Grid>
                            <Grid xs={6}>
                                <AccordionDetails>
                                    <Typography variant='h5'>
                                        Dev/Oss
                                    </Typography>
                                    <Typography variant='h6'>
                                        PinwiStep
                                    </Typography>
                                </AccordionDetails>
                            </Grid>
                        </Grid>
                    </Box>
                </Accordion>
                <Accordion className='engineer-accordion'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{ backgroundColor: 'yellow' }}
                        className='break-accordion summary-accordion'
                    >
                        <Typography>Break</Typography>
                    </AccordionSummary>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid xs={6}>
                                <AccordionDetails>
                                    <Typography variant='h5'>
                                        Perf/Config
                                    </Typography>
                                    <Typography variant='h6'>
                                        JoseBo
                                    </Typography>
                                </AccordionDetails>
                            </Grid>
                            <Grid xs={6}>
                                <AccordionDetails>
                                    <Typography variant='h5'>
                                        Dev/Oss
                                    </Typography>
                                    <Typography variant='h6'>
                                        PinwiStep
                                    </Typography>
                                </AccordionDetails>
                            </Grid>
                        </Grid>
                    </Box>
                </Accordion>
                <Accordion className='engineer-accordion'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className='lunch-accordion summary-accordion'
                    >
                        <Typography>Lunch</Typography>
                    </AccordionSummary>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid xs={6}>
                                <AccordionDetails>
                                    <Typography variant='h5'>
                                        Perf/Config
                                    </Typography>
                                    <Typography variant='h6'>
                                        JoseBo
                                    </Typography>
                                </AccordionDetails>
                            </Grid>
                            <Grid xs={6}>
                                <AccordionDetails>
                                    <Typography variant='h5'>
                                        Dev/Oss
                                    </Typography>
                                    <Typography variant='h6'>
                                        PinwiStep
                                    </Typography>
                                </AccordionDetails>
                            </Grid>
                        </Grid>
                    </Box>
                </Accordion>
                <Accordion className='engineer-accordion'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className='meeting-accordion summary-accordion'
                    >
                        <Typography>Meeting</Typography>
                    </AccordionSummary>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid xs={6}>
                                <AccordionDetails>
                                    <Typography variant='h5'>
                                        Perf/Config
                                    </Typography>
                                    <Typography variant='h6'>
                                        JoseBo
                                    </Typography>
                                </AccordionDetails>
                            </Grid>
                            <Grid xs={6}>
                                <AccordionDetails>
                                    <Typography variant='h5'>
                                        Dev/Oss
                                    </Typography>
                                    <Typography variant='h6'>
                                        PinwiStep
                                    </Typography>
                                </AccordionDetails>
                            </Grid>
                        </Grid>
                    </Box>
                </Accordion>
                <Accordion className='engineer-accordion'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className='others-accordion summary-accordion'
                    >
                        <Typography>Others</Typography>
                    </AccordionSummary>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid xs={6}>
                                <AccordionDetails>
                                    <Typography variant='h5'>
                                        Perf/Config
                                    </Typography>
                                    <Typography variant='h6'>
                                        JoseBo
                                    </Typography>
                                </AccordionDetails>
                            </Grid>
                            <Grid xs={6}>
                                <AccordionDetails>
                                    <Typography variant='h5'>
                                        Dev/Oss
                                    </Typography>
                                    <Typography variant='h6'>
                                        PinwiStep
                                    </Typography>
                                </AccordionDetails>
                            </Grid>
                        </Grid>
                    </Box>
                </Accordion>
                <br />
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Your status:</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={status}
                            label="Your status:"
                            onChange={handleChange}
                        >
                            <MenuItem value={'Online'}>Online</MenuItem>
                            <MenuItem value={'Break'}>Break</MenuItem>
                            <MenuItem value={'Lunch'}>Lunch</MenuItem>
                            <MenuItem value={'Meeting'}>Meeting</MenuItem>
                            <MenuItem value={'Others'}>Others</MenuItem>
                            <MenuItem value={'Offline'}>Offline</MenuItem>

                        </Select>
                    </FormControl>
                </Box>
                <br />
                {/* <Typography>Your time in {status} is {timer}</Typography> */}
                {/* <Typography id='stopwatch'></Typography> */}
            </div>
        </div>
    );
};

export default EngineerAvailComp;