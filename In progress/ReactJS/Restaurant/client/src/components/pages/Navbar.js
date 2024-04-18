import React from 'react';
import '../styles/navbar.css';

//Importing drawer items from Mui
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import LandingViewComponent from './Landing';
import { Link } from 'react-router-dom';

//Import new Appbar

import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


//End new Appbar

//import accordion
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PeopleIcon from '@mui/icons-material/People';
import StyleIcon from '@mui/icons-material/Style';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import RecyclingIcon from '@mui/icons-material/Recycling';
import WashIcon from '@mui/icons-material/Wash';
import ConstructionIcon from '@mui/icons-material/Construction';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import InfoIcon from '@mui/icons-material/Info';
import PublicIcon from '@mui/icons-material/Public';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import EventIcon from '@mui/icons-material/Event';
import ScaleIcon from '@mui/icons-material/Scale';
import LogoutIcon from '@mui/icons-material/Logout';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavbarComponent() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    var userNameVal = localStorage.getItem("userName");

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    //Appbar data

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        localStorage.removeItem("userName");
        window.location.href = "/";
    }


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} className='navbar-bar'>
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}                        
                    >
                        <MenuIcon className='icon-navbar'/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Restaurante Panel Control
                    </Typography>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} style={{position: 'absolute', right: '6rem'}}>
                        <Avatar alt={userNameVal} src="/static/images/avatar/2.jpg" />
                    </IconButton>
                    <Button variant="text" style={{position: 'absolute', right: '2rem', color: 'white'}} onClick={handleLogout}>
                        <LogoutIcon />
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            // style={{color: 'teal'}}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon className='icon-navbar' /> : <ChevronRightIcon className='icon-navbar' />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <Link to="/home" className='navLink'>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon className='icon-navbar' />
                                </ListItemIcon>
                                <ListItemText primary={'Home'} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link to="/restaurantes" className='navLink'>
                            <ListItemButton>
                                <ListItemIcon>
                                    <RestaurantIcon className='icon-navbar' />
                                </ListItemIcon>
                                <ListItemText primary={'Restaurantes'} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AdminPanelSettingsIcon className='icon-navbar' />
                            </ListItemIcon>
                            <ListItemText primary={'Administración'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PeopleIcon className='icon-navbar' />
                            </ListItemIcon>
                            <ListItemText primary={'Clientes'} />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <StyleIcon className='icon-navbar' />
                            </ListItemIcon>
                            <ListItemText primary={'Marcas'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <Accordion className='contentproductos-acc'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                Productos
                            </AccordionSummary>
                            <AccordionDetails>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FastfoodIcon className='icon-navbar' />
                                    </ListItemIcon>
                                    <ListItemText primary={'Comestibles'} />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <RecyclingIcon className='icon-navbar' />
                                    </ListItemIcon>
                                    <ListItemText primary={'Desechables y empaques'} />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <WashIcon className='icon-navbar' />
                                    </ListItemIcon>
                                    <ListItemText primary={'Limpieza e higiene'} />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ConstructionIcon className='icon-navbar' />
                                    </ListItemIcon>
                                    <ListItemText primary={'Tecnología'} />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FoodBankIcon className='icon-navbar' />
                                    </ListItemIcon>
                                    <ListItemText primary={'Equipos y utensilios'} />
                                </ListItemButton>
                            </AccordionDetails>
                        </Accordion>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MoveToInboxIcon className='icon-navbar' />
                            </ListItemIcon>
                            <ListItemText primary={'Proveedores'} />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AssessmentIcon className='icon-navbar' />
                            </ListItemIcon>
                            <ListItemText primary={'Reportes'} />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <Accordion className='contentproductos-acc'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                Seguridad
                            </AccordionSummary>
                            <AccordionDetails>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <PeopleOutlineIcon className='icon-navbar' />
                                    </ListItemIcon>
                                    <ListItemText primary={'Usuarios'} />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InfoIcon className='icon-navbar' />
                                    </ListItemIcon>
                                    <ListItemText primary={'Consecutivos'} />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <PublicIcon className='icon-navbar' />
                                    </ListItemIcon>
                                    <ListItemText primary={'Países'} />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <PointOfSaleIcon className='icon-navbar' />
                                    </ListItemIcon>
                                    <ListItemText primary={'Cajas'} />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <EventIcon className='icon-navbar' />
                                    </ListItemIcon>
                                    <ListItemText primary={'Roles o eventos'} />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ScaleIcon className='icon-navbar' />
                                    </ListItemIcon>
                                    <ListItemText primary={'Unidades de medida'} />
                                </ListItemButton>
                            </AccordionDetails>
                        </Accordion>
                        <Divider />
                    </ListItem>
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid xs={12}>
                            <LandingViewComponent />
                        </Grid>
                    </Grid>
                </Box>
            </Main>
        </Box>
    );
};

export default NavbarComponent;

