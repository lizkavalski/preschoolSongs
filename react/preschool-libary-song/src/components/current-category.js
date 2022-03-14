import React from 'react';
import { connect } from 'react-redux';

import { When } from 'react-if';

import { Button, Card, CardActions, CardContent, CardMedia, Grid, Box,  Typography, Container,Link} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import heroImage from "./images/classroom.jpg"



const theme =createTheme({
  palette: {
    primary: {
      main: "#03a9f4",
    },
    secondary: {
      light:"#fff3e0",
      main: "#ff9100",
    },
  },
})

const CurrentCategory = ({activeCategory}) => {

  return (
    <When condition={!!activeCategory}>
        <div >
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            {activeCategory}
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Category Description Goes Here
        </Typography>
        </Container>
      </div>
    
    </When>
  )
}
const mapStateToProps = state => ({
  activeCategory: state.categories.activeCategory
});

export default connect(mapStateToProps)(CurrentCategory);