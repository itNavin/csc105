// import React from "react";
// import "../styles/Nav.css"

// const Nav = () => {
//     return(
//         <div className="Nav">
//             <div className="left-Nav">
//                 <p>My Website</p>
//             </div>
//             <div className="right-Nav">
//                 <ul>
//                     <li>HOME</li>
//                     <li>ABOUT</li>
//                     <li>CONTACT</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"black"}}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Website
          </Typography>
          <Box sx={{display: {xs:"none",md:"block"}}}>
          <Button color="inherit">HOME</Button>
          <Button color="inherit">ABOUT</Button>
          <Button color="inherit">CONTACT</Button>
          </Box>
          <Button color='inherit' sx = {{display: {xs:"block", md:"none"}}}>
            <MenuIcon color='white'></MenuIcon>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


