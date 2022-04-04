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
const ViewVideo =(props)=>{
  
  return(
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar position="relative">
    <title>Video Page</title>
    <Typography variant="h4" color="inherit" noWrap align="center" paddingTop={2}> 
      {props.title}
    </Typography>
      <br />
    </AppBar>
    <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="center"
        >
        <Button variant="contained"><Link to= '/'>Back to Table of Contant</Link> </Button>
        <Button variant="outlined" onClick={() => navigate(-1)}> Back to {props.category} </Button>
      </Stack>
    <Container  
          sx={{
            maxWidth:"sm",
          }}
          >
      <Box align="center" paddingTop={2} >
        <CardMedia 
          component= "iframe"  
          width={560}
          height={560}
          src={props.url} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen= "allowfullscreen"
          />
      </Box>
      </Container>
    </ThemeProvider>
  )
}

export default ViewVideo