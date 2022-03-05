import * as React from "react";
import { Link ,navigate, StaticQuery} from "gatsby";
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Stack, Box, Toolbar, Typography, Container, link } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
const ViewVideo =({location})=>{
  return(
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar position="relative">
    <title>Home Page</title>
    <Typography variant="h4" color="inherit" noWrap align="center" paddingTop={2}> 
      {location.state.title}
    </Typography>
      <br />
    </AppBar>
    <Box
      sx={{
        bgcolor:'rgba(221,0,255,1)',
        pt: 8,
        pb: 6,
        border: '1px dashed grey'
      }}
      >

    <Container  
          sx={{
            maxWidth:"sm",
            bgcolor:'rgba(0,0,0,.65)',
            pt: 8,
            pb: 6,
          }}
          >
      <Box align="center" paddingTop={2} >
          <iframe width="660" height="415" align="center" src={location.state.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Box>
      </Container>
      </Box>
    </ThemeProvider>
  )
}

export default ViewVideo