// import React from 'react'
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { Link } from 'react-router-dom';

// const drawerWidth = 240;

// const Navbar = (props) => {
//     const { window } = props;
//     const [mobileOpen, setMobileOpen] = React.useState(false);
//     const [isClosing, setIsClosing] = React.useState(false);

//     const handleDrawerClose = () => {
//         setIsClosing(true);
//         setMobileOpen(false);
//     };

//     const handleDrawerTransitionEnd = () => {
//         setIsClosing(false);
//     };

//     const handleDrawerToggle = () => {
//         if (!isClosing) {
//             setMobileOpen(!mobileOpen);
//         }
//     };

//     const drawer = (
//         <div>
//             <Toolbar />
//             <Divider />
//             <List>
//                 <ListItem disablePadding>
//                     <ListItemButton
//                         to={'/administracion'}
//                         onClick={handleDrawerClose} // closes drawer on mobile when navigating
//                     >
//                         {/* <ListItemIcon>{icon}</ListItemIcon> */}
//                         <ListItemText primary={'e'} />
//                     </ListItemButton>
//                 </ListItem>
//                 {/* {[
//                     { text: 'Home', path: '/home', icon: <InboxIcon /> },
//                     { text: 'Administración', path: '/administracion', icon: <MailIcon /> },
//                     { text: 'Register', path: '/register', icon: <InboxIcon /> },
//                     { text: 'Login', path: '/', icon: <MailIcon /> }
//                 ].map(({ text, path, icon }) => (
//                     <ListItem key={text} disablePadding>
//                         <ListItemButton
//                             component={Link}
//                             to={path}
//                             onClick={handleDrawerClose} // closes drawer on mobile when navigating
//                         >
//                             <ListItemIcon>{icon}</ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItemButton>
//                     </ListItem>
//                 ))} */}
//             </List>
//             <Divider />
//             <List>
//                 {[
//                     { text: 'Home', path: '/home', icon: <InboxIcon /> },
//                     { text: 'Administración', path: '/administracion', icon: <MailIcon /> },
//                     { text: 'Register', path: '/register', icon: <InboxIcon /> },
//                     { text: 'Login', path: '/', icon: <MailIcon /> }
//                 ].map(({ text, path, icon }) => (
//                     <ListItem key={text} disablePadding>
//                         <ListItemButton
//                             component={Link}
//                             to={path}
//                             onClick={handleDrawerClose} // closes drawer on mobile when navigating
//                         >
//                             <ListItemIcon>{icon}</ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItemButton>
//                     </ListItem>
//                 ))}
//             </List>
//         </div>
//     );

//     // Remove this const when copying and pasting into your project.
//     const container = window !== undefined ? () => window().document.body : undefined;

//     return (
//         <Box sx={{ display: 'flex' }}>
//             <CssBaseline />
//             <AppBar
//                 position="fixed"
//                 sx={{
//                     width: { sm: `calc(100% - ${drawerWidth}px)` },
//                     ml: { sm: `${drawerWidth}px` },
//                 }}
//             >
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         edge="start"
//                         onClick={handleDrawerToggle}
//                         sx={{ mr: 2, display: { sm: 'none' } }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" noWrap component="div">
//                         Responsive drawer
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <Box
//                 component="nav"
//                 sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//                 aria-label="mailbox folders"
//             >
//                 {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//                 <Drawer
//                     container={container}
//                     variant="temporary"
//                     open={mobileOpen}
//                     onTransitionEnd={handleDrawerTransitionEnd}
//                     onClose={handleDrawerClose}
//                     sx={{
//                         display: { xs: 'block', sm: 'none' },
//                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                     }}
//                     slotProps={{
//                         root: {
//                             keepMounted: true, // Better open performance on mobile.
//                         },
//                     }}
//                 >
//                     {drawer}
//                 </Drawer>
//                 <Drawer
//                     variant="permanent"
//                     sx={{
//                         display: { xs: 'none', sm: 'block' },
//                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                     }}
//                     open
//                 >
//                     {drawer}
//                 </Drawer>
//             </Box>
//             <Box
//                 component="main"
//                 sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//             >
//                 <Toolbar />
//             </Box>
//         </Box>
//     )
// }

// export default Navbar


import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
    AppBar, Box, CssBaseline, Divider, Drawer, IconButton,
    List, ListItem, ListItemButton, ListItemIcon, ListItemText,
    Toolbar, Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

const Navbar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const location = useLocation();

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => setIsClosing(false);

    const handleDrawerToggle = () => {
        if (!isClosing) setMobileOpen(!mobileOpen);
    };

    const menuItems = [
        { text: 'Home', path: '/home', icon: <InboxIcon /> },
        { text: 'Administración', path: '/administracion', icon: <MailIcon /> },
        { text: 'Register', path: '/register', icon: <InboxIcon /> },
        { text: 'Login', path: '/', icon: <MailIcon /> }
    ];

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to={'/administracion'}
                        // selected={location.pathname === path}
                        onClick={handleDrawerClose}
                    >
                        <InboxIcon />
                        <ListItemText primary={'Administración'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to={'/clientes'}
                        // selected={location.pathname === path}
                        onClick={handleDrawerClose}
                    >
                        <InboxIcon />
                        <ListItemText primary={'Clientes'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to={'/proveedores'}
                        // selected={location.pathname === path}
                        onClick={handleDrawerClose}
                    >
                        <InboxIcon />
                        <ListItemText primary={'Proveedores'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to={'/reportes'}
                        // selected={location.pathname === path}
                        onClick={handleDrawerClose}
                    >
                        <InboxIcon />
                        <ListItemText primary={'Reportes'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to={'/seguridad'}
                        // selected={location.pathname === path}
                        onClick={handleDrawerClose}
                    >
                        <InboxIcon />
                        <ListItemText primary={'Seguridad'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to={'/restaurantes'}
                        // selected={location.pathname === path}
                        onClick={handleDrawerClose}
                    >
                        <InboxIcon />
                        <ListItemText primary={'Restaurantes'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Responsive Drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="menu items"
            >
                {/* Mobile Drawer */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    ModalProps={{
                        keepMounted: true, // Better performance on mobile
                    }}
                >
                    {drawer}
                </Drawer>
                {/* Desktop Drawer */}
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            {/* Routed content goes here */}
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet /> {/* 👈 This is where your page components render */}
            </Box>
        </Box>
    );
};

export default Navbar;