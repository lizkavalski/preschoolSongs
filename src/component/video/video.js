import * as React from "react";
import {Link,useLocation, useNavigate} from "react-router-dom";
import { Box, CardMedia, CssBaseline, Button, Typography, Container, Stack} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme =createTheme({
  palette: {
    primary: {
      main: "#03a9f4",
    },
    secondary: {
      light:"#fff3e0",
      main: "#ff9100",
      containRectangle:{
        borderRadius: "1.25rem",
        backgroundColor: "#fab400",
        color:"black",
      },
      outlineRectangle:{
        borderRadius: "1.25rem",
        border: "0.25rem solid #fab400",
        color: "black",
      },

    },
  },
})
const ViewVideo =()=>{
  const location = useLocation();
  let navigate = useNavigate();

  const title = location.state.title;
  const category = location.state.category
  const video = location.state.video
  console.log( video)
  function handleClick() {
    navigate(-1)
  }
  return(
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <title>Video Page</title>
    <Typography variant="h4"  noWrap align="center" paddingTop={2}> 
      {title}
    </Typography>
    <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="center"
        >
        <Button style={theme.palette.secondary.containRectangle}><Link style={{ textDecoration: 'none' }} to= '/' textDecoration="none" >Back to Table of Contant</Link> </Button>
        <Button style={theme.palette.secondary.outlineRectangle}  onClick={handleClick}>  Back to {category}</Button>
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
          src= {`https://www.youtube.com/embed/${video}?si=ocxPDeR8BZL1Bx3A`}
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen= "allowFullScreen"
          />
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/?si=ocxPDeR8BZL1Bx3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      </Box>
      </Container>
    </ThemeProvider>
  )
}

export default ViewVideo