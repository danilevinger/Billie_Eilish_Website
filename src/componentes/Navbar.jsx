import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LogoBillie from '../assets/logo.png';

export default function ButtonAppBar() {
  const location = useLocation();

  const navLinks = [
    { path: '/', text: 'Home' },
    { path: '/info', text: 'Info' },
    { path: '/music', text: 'Music' },
    { path: '/photos', text: 'Photos' },
  ];

  const linkStyles = {
    color: 'white',
    marginRight: '16px',
    textDecoration: 'none',
    paddingBottom: '2px',
    fontWeight: 'normal',
    borderBottom: 'transparent',
  };

  const activeLinkStyles = {
    fontWeight: 'bold',
    borderBottom: '2px solid white',
  };

  const divStyles = {
    width: '1600px',
    display: 'flex',
    justifyContent: 'start',
  };

  const imageStyles = {
    width: '70px',
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#8b6f54' }}>
        <Toolbar>
          <div style={divStyles}>
            <img src={LogoBillie} alt="logo" style={imageStyles} />
          </div>

          {navLinks.map(({ path, text }) => (
            <NavLink
              key={path}
              exact={path === '/'}
              to={path}
              style={{
                ...linkStyles,
                ...(location.pathname === path ? activeLinkStyles : {}),
              }}
            >
              {text}
            </NavLink>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
