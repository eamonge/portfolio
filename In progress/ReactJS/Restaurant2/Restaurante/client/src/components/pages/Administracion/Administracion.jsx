import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// Importing components
import Especiales from '../Especiales';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#FFFFFF',
    height: '85dvh',
    overflow: 'scroll',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const Administracion = () => {
    return (
        <>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={{xs: 12, sm: 12, md: 12, lg: 12, xl: 12}}>
                        <Item>
                            <Especiales />
                        </Item>
                    </Grid>
                    <Grid size={{xs: 12, sm: 12, md: 12, lg: 6, xl: 12}}>
                        <Item>
                            Mesas
                        </Item>
                    </Grid>
                    <Grid size={{xs: 12, sm: 12, md: 12, lg: 6, xl: 12}}>
                        <Item>Empleados</Item>
                    </Grid>
                    <Grid size={{xs: 12, sm: 12, md: 12, lg: 12, xl: 12}}>
                        <Item>Puestos</Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Administracion