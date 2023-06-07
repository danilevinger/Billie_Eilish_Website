import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoBillie from '../assets/logo.png';
import { Padding } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const route = (path) => {
    navigate(path);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#8b6f54' }}>
        <Toolbar>
          <div style={{ width: '1600px', display: 'flex', justifyContent: 'start' }}>
            <img src={LogoBillie} alt="logo" width={'70px'} />
          </div>

          <Button color="inherit" onClick={() => route('/')}>
            Home
          </Button>
          
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            color="inherit"
          >
            Info
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <Button color="inherit" onClick={() => route('/music')}>
            Music
          </Button>
          <Button color="inherit" onClick={() => route('/photos')}>
            Photos
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
