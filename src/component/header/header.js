import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



const Header= props => {
return(

<AppBar position="relative">
<Toolbar>
<Typography variant="h4" color="inherit"  align="center" noWrap>
    PreSchool Libary!
  </Typography>
</Toolbar>
</AppBar>
)
}

export default Header