import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InfoDisplay from './InfoDisplay';
import Searchbar from './Searchbar';

const Item = styled(Paper)(({ theme }) => ({
    background: 'rgba(19, 41, 243, 0.26)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',    
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));


const Landing = () => {
    return (
        <div className="backdropModal">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} margin={'1em'}>
                    <Grid size={12}>
                        <Item sx={{height: '5dvh'}}>
                            <Searchbar />
                        </Item>
                    </Grid>
                    <Grid size={12}>
                        <Item sx={{height: '40dvh'}}>
                            <InfoDisplay />
                        </Item>
                    </Grid>
                    <Grid size={12}>
                        <Item sx={{height: '40dvh'}}>size=12 height: sum</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Landing