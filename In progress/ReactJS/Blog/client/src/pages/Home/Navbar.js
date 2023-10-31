import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SidenavComponent from './Sidemenu';
import LoginPage from '../Login';

function NavbarComponent() {

    const [sideMenu, setsideMenu] = useState(false);
    const [loginPage, setLoginPage] = useState(false);


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setsideMenu(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button onClick={() => setLoginPage(true)}>Login</Button>
                    <LoginPage trigger={loginPage} setTrigger={setLoginPage}></LoginPage>
                    <SidenavComponent trigger={sideMenu} setTrigger={setsideMenu}></SidenavComponent>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavbarComponent;