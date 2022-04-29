import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


const Footer= props =>{
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  return(
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          <Link color="inherit" href="https://www.lizkavalskiuxportfolio.com/">
          Click here for more website or learn more about the creator
        </Link>{' '}
        </Typography>
        <Copyright />
      </Box>
  )
}

export default Footer