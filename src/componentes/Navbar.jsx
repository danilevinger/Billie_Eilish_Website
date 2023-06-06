import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoBillie from '../assets/logo.png'
import { Padding } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


export default function ButtonAppBar() {

  const navigate = useNavigate();
  const route = (path) => {
    navigate(path);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" sx={{ backgroundColor: '#8b6f54'}}>
        <Toolbar>
         
       
         <div style={{width: '1600px', display:'flex' ,justifyContent:'start'}}>
         <img src={LogoBillie} alt="logo" width={'70px'}/>
         </div>
       

          <Button color="inherit" onClick={()=>route('/')}>Home</Button> 
          <Button color="inherit" onClick={()=>route('/info')}>Info</Button> 
          <Button color="inherit" onClick={()=>route('/music')}>Music</Button>
          <Button color="inherit" onClick={()=>route('/photos')}>Photos</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}