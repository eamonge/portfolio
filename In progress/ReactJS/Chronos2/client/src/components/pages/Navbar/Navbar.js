import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import './navbar.css';
import { Link } from "react-router-dom";

function NavbarComponent() {

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                {/* <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={auth}
                                onChange={handleChange}
                                aria-label="login switch"
                            />
                        }
                        label={auth ? 'Logout' : 'Login'}
                    />
                </FormGroup> */}
                <AppBar position="static" className='appbar-main-menu'>
                    <Toolbar>
                        {/* <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton> */}
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Chronos 2.0
                        </Typography>
                        <Typography variant="h6" component="div" className='navbarpage-btn' sx={{ flexGrow: 1 }} style={{ position: 'relative' }}>
                            <Link to="/">
                                <Button disableRipple={true}>
                                    Home
                                </Button>
                            </Link>
                        </Typography>
                        <Typography variant="h6" component="div" className='navbarpage-btn' sx={{ flexGrow: 1 }}>
                            <Link to="/handovers">
                                <Button disableRipple={true}>
                                    Handovers
                                </Button>
                            </Link>
                        </Typography>
                        <Typography variant="h6" component="div" className='navbarpage-btn' sx={{ flexGrow: 1 }}>
                            <Link to='/dashboard'>
                                <Button disableRipple={true}>
                                    My Dashboard
                                </Button>
                            </Link>
                        </Typography>
                        <Typography variant="h6" component="div" className='navbarpage-btn' sx={{ flexGrow: 1 }}>
                            <Link to='/follow-ups'>
                                <Button disableRipple={true}>
                                    Follow ups
                                </Button>
                            </Link>
                        </Typography>
                        <Typography variant="h6" component="div" className='navbarpage-btn' sx={{ flexGrow: 0.2 }}>
                            <Link to="/myschedule">
                                <Button disableRipple={true}>
                                    My Schedule
                                </Button>
                            </Link>
                        </Typography>
                        {auth && (
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default NavbarComponent;