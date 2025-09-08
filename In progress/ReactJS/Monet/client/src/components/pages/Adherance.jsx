import Typography from '@mui/material/Typography'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux'
import { setStatus } from '../../features/statusSlice';
import { isOverLimit, timeRemaining, calculateAdherence } from '../utils/statusUtils';

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
    const { status, startTime, elapsed, history } = useSelector((state) => state.status);
    const [adherancePct, setAdherancePct] = useState(100);
    const currentStatus = status || "Logged out";

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

    // Define your allowed statuses and thresholds somewhere above useEffect
    const thresholds = {
        Break: 1800,  // 30 minutes
        Lunch: 3600,  // 1 hour
        Meeting: 7200 // 2 hours
        // Available: no limit, counted as good
        // Any other statuses (e.g., System Issues, Logged out, etc.) will decrease adherence
    };

    const formatTime = (secs) => {
        const safe = Number.isFinite(secs) && secs >= 0 ? secs : 0;
        const h = String(Math.floor(safe / 3600)).padStart(2, '0');
        const m = String(Math.floor((safe % 3600) / 60)).padStart(2, '0');
        const s = String(Math.floor(safe % 60)).padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    //Check current status adherence
    const over = isOverLimit(status, elapsed);

    // Compute once when the component mounts or history changes
    const shiftStart = new Date();
    shiftStart.setHours(9, 0, 0, 0); // 12:20 PM
    const shiftEnd = new Date();
    shiftEnd.setHours(18, 0, 0, 0); // 12:25 PM

    // useEffect(() => {
    //     const shiftStartSec = shiftStart.getTime() / 1000;
    //     const shiftEndSec = shiftEnd.getTime() / 1000;

    //     const safeHistory = Array.isArray(history) ? history : [];

    //     // Add current active status as a "virtual" record with endTime = now
    //     let extendedHistory = [...safeHistory];
    //     if (status && startTime) {
    //         extendedHistory.push({
    //             status,
    //             startTime,
    //             endTime: Date.now()
    //         });
    //     }

    //     const filteredHistory = extendedHistory
    //         .map(({ status, startTime, endTime }) => ({
    //             status,
    //             startTime,
    //             endTime
    //         }))
    //         .filter(r => r.endTime > r.startTime);

    //     const { adherencePct } = calculateAdherence(
    //         filteredHistory,
    //         shiftStartSec,
    //         shiftEndSec,
    //         thresholds
    //     );

    //     setAdherancePct(adherencePct);
    // }, [history, status, startTime, elapsed, shiftStart, shiftEnd]);


    useEffect(() => {
        const shiftStartSec = shiftStart.getTime() / 1000;
        const shiftEndSec = shiftEnd.getTime() / 1000;

        const safeHistory = Array.isArray(history) ? history : [];

        // Add current active status as a "virtual" record
        let extendedHistory = [...safeHistory];
        if (status && startTime) {
            extendedHistory.push({
                status,
                startTime,
                endTime: Date.now()
            });
        }

        const filteredHistory = extendedHistory
            .map(({ status, startTime, endTime }) => ({
                status,
                startTime,
                endTime
            }))
            .filter(r => r.endTime > r.startTime);

        // Run adherence calculation
        const { adherencePct } = calculateAdherence(
            filteredHistory,
            shiftStartSec,
            shiftEndSec,
            thresholds
        );

        setAdherancePct(adherencePct);
        console.log('Adherence is: ', adherancePct)
    }, [history, status, startTime, elapsed, shiftStart, shiftEnd]);

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
                                {currentStatus}
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
                            <div className="statusValDiv" style={{ lineHeight: '65px' }}>
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
                                <div className="statusValDiv" style={{ lineHeight: '65px', backgroundColor: '#8ef0b7ff' }}>
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
                                {adherancePct.toFixed(2)}%
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Adherance