import * as React from "react";
import {Link,useLocation, useNavigate} from "react-router-dom";
import { Box, CardMedia, CssBaseline, AppBar, Button, Typography, Container, Stack} from "@mui/material";
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
const ViewVideo =()=>{
  const location = useLocation();
  let navigate = useNavigate();

  const title = location.state.title;
  const category = location.state.category
  let video = location.state.video
  
  function handleClick() {
    navigate(-1)
  }
  return(
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar position="relative">
    <title>Video Page</title>
    <Typography variant="h4" color="inherit" noWrap align="center" paddingTop={2}> 
      {title}
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
        <Button variant="outlined" onClick={handleClick}> Back to {category}</Button>
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
          src= {video}
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen= "allowFullScreen"
          />
      </Box>
      </Container>
    </ThemeProvider>
  )
}

export default ViewVideo