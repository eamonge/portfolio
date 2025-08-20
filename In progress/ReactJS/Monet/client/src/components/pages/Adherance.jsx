import Typography from '@mui/material/Typography'
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
                                Time in status:
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
                                Adherance status:
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>
                            <div className="statusValDiv" style={{ lineHeight: '65px', backgroundColor: '#D32D41', color: 'white' }}>
                                Out of adherence
                            </div>
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
                                Available
                            </div>
                        </Item>
                    </Grid>
                </Grid>
                {/* <Grid container spacing={2}>
                    <Grid size={12}>
                        <Item>
                            <Typography variant='h5'>
                                Time in status:
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid size={12}>
                        <Item>
                            <div className="statusValDiv" style={{lineHeight: '65px', backgroundColor: '#8ef0b7ff'}}>
                                Available
                            </div>
                        </Item>
                    </Grid>
                </Grid> */}
                {/* <Grid container spacing={2}>
                    <Grid size={12}>
                        <Item>
                            <Typography variant='h5'>
                                Adherance status:
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid size={12}>
                        <Item>
                            <div className="statusValDiv" style={{lineHeight: '65px', backgroundColor: '#8ef0b7ff'}}>
                                Available
                            </div>
                        </Item>
                    </Grid>
                </Grid> */}
                {/* <Grid container spacing={2}>
                    <Grid size={12}>
                        <Item>
                            <Typography variant='h5'>
                                Adherance score:
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid size={12}>
                        <Item>
                            <div className="statusValDiv" style={{lineHeight: '65px', backgroundColor: '#8ef0b7ff'}}>
                                Available
                            </div>
                        </Item>
                    </Grid>
                </Grid> */}
            </Box>
        </div>
    )
}

export default Adherance