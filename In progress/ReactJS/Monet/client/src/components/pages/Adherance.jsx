import Typography from '@mui/material/Typography'
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux'
import { setStatus } from '../../features/statusSlice';
import { isOverLimit, timeRemaining,  calculateAdherence}  from '../utils/statusUtils';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(0,0,0,0)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
    overflow: 'auto',
    boxShadow: 'none',
    borderRight: 'solid 2px gray',
    borderRadius: '0',
    // 0px
    [theme.breakpoints.only('xs')]: {
        border: 'none'
    },
    // 600px
    [theme.breakpoints.only('sm')]: {
        border: 'none'
    },
    // 900px
    [theme.breakpoints.only('md')]: {
        border: 'none'
    },
    // 1200px
    [theme.breakpoints.only('lg')]: {
        border: 'none'
    },
    // 1536px
    [theme.breakpoints.only('xl')]: {
        border: 'none'
    },
}));

const Adherance = () => {
    const { status,  elapsed, history } = useSelector((state) => state.status);

    const statusColors = {
        Available: "#8ef0b7ff",
        Break: "orange",
        Lunch: "yellow",
        Meeting: "lightblue",
        "System Issues - Tek": "red",
        "System Issues - MS": "darkred",
        "End of shift": "gray",
        "Logged out": "black",
    };

    const formatTime = (secs) => {
        const safe = Number.isFinite(secs) && secs >= 0 ? secs : 0;
        const h = String(Math.floor(safe / 3600)).padStart(2, '0');
        const m = String(Math.floor((safe % 3600) / 60)).padStart(2, '0');
        const s = String(Math.floor(safe % 60)).padStart(2, '0');
        return `${h}:${m}:${s}`;
    };
    
    // Checking for adherance
    if (!status) return <p>No status selected</p>;

    //Check current status adherence
    const over = isOverLimit(status, elapsed);
    const remaining = timeRemaining(status, elapsed);

    //Calculate overall adherance
    const allowances = { Break: 1800, Lunch: 3600, Meeting: 7200 };
    const shiftLengthSecs = 9 * 3600;
    const { adherencePct } = calculateAdherence(history, shiftLengthSecs, allowances);

    return (
        <div className='adheranceBox contentPanel'>
            Adherance
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Item>
                            <Typography variant='h5'>
                                Current Schedule:
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>
                            <div className="statusValDiv" style={{ lineHeight: '65px', backgroundColor: '#8ef0b7ff' }}>
                                Available
                            </div>
                        </Item>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Item>
                            <Typography variant='h5'>
                                Current status:
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>
                            <div
                                className="statusValDiv"
                                style={{
                                    lineHeight: "65px", position: "relative", "--statusColor": statusColors[status] || '#f31b1bff',
                                }}
                            >
                                {status}
                            </div>
                        </Item>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Item>
                            <Typography variant='h5'>
                                Time in status:
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>
                            <div className="statusValDiv" style={{ lineHeight: '65px'}}>
                                {formatTime(elapsed)}
                            </div>
                        </Item>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Item>
                            <Typography variant='h5'>
                                Adherance status:
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>
                            {over ? (
                                <div className="statusValDiv" style={{ lineHeight: '65px', backgroundColor: '#D32D41', color: 'white' }}>
                                    Out of adherance
                                </div>
                            ) : (
                                <div className="statusValDiv" style={{ lineHeight: '65px', backgroundColor: '#8ef0b7ff'}}>
                                    <b>In adherance</b>
                                </div>
                            )}
                        </Item>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Item>
                            <Typography variant='h5'>
                                Adherance score:
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>
                            <div className="statusValDiv" style={{ lineHeight: '65px', backgroundColor: '#8ef0b7ff' }}>
                                {adherencePct.toFixed(2)}%
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Adherance