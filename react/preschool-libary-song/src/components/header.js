import React from 'react';
import { AppBar, Typography } from '@mui/material';

const Header = props => {
  return(
<AppBar position="relative">
      <title>Home Page</title>
      <Typography variant="h1" color="inherit" noWrap align="center"> 
        Song Book
      </Typography>
        <br />
      </AppBar>

  )
}

export default Header;