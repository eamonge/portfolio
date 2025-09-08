import React, { useState , useContext} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';

const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  // const count = useSelector((state) => state.counter.value);

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


  return (
    <div>
      <Box>
        <AppBar position="static" className='navbarMainDiv'>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: 'block', md: 'none' } }}
                >
                  {/* Responsive Menu options */}
                  <MenuItem>
                    <Link to="/home" className='navBarLinks'>
                      <Typography sx={{ textAlign: 'center' }}>
                        Homes
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/schedule' className='navBarLinks'>
                      <Typography sx={{ textAlign: 'center' }}>
                        My schedule
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/schedule-changes' className='navBarLinks'>
                      <Typography sx={{ textAlign: 'center' }}>
                        My schedule changes
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/adherence' className='navBarLinks'>
                      <Typography sx={{ textAlign: 'center' }}>
                        My adherance
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/schedule-actions' className='navBarLinks'>
                      <Typography sx={{ textAlign: 'center' }}>
                        Schedule action
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/my-alerts' className='navBarLinks'>
                      <Typography sx={{ textAlign: 'center' }}>
                        My alerts
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/preferences' className='navBarLinks'>
                      <Typography sx={{ textAlign: 'center' }}>
                        Preferences
                      </Typography>
                    </Link>
                  </MenuItem>
                  {/* End Responsive Menu options */}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {/* Main Menu options */}
                  <Link to="/home" className='navBarLinks'>
                    Home
                  </Link>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: 'block' }}
                >
                  <Link to='/schedule' className='navBarLinks'>
                    My Schedule
                  </Link>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: 'block' }}
                >
                  <Link to='/schedule-changes' className='navBarLinks'>
                    My schedule changes
                  </Link>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: 'block' }}
                >
                  <Link to='/adherence' className='navBarLinks'>
                    My adherence
                  </Link>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: 'block' }}
                >
                  <Link to='/schedule-actions' className='navBarLinks'>
                    Schedule Action
                  </Link>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: 'block' }}
                >
                  <Link to='/my-alerts' className='navBarLinks'>
                    My Alerts
                  </Link>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: 'block' }}
                >
                  <Link to='/preferences' className='navBarLinks'>
                    Preferences
                  </Link>
                </Button>
                  {/* End Main Menu options */}
                {/* <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', position: 'absolute', right: '3em' }}
                >
                  <Link to='/checkout' className='navBarLinks'>
                    <Badge badgeContent={1} color='primary'>
                      <ShoppingCartIcon />
                    </Badge>
                  </Link>
                </Button> */}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {/* <Avatar alt={`${userData.firstName}`} src={`${userData.profilePicture}`} /> */}
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>
                      <Link to='/account' className='userLinks'>
                        Account
                      </Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>
                      <Link className='userLinks'>
                        Logout
                      </Link>
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <br />
        <Box>
        </Box>
      </Box>
    </div>
  )
}

export default Navbar