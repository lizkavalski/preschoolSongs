import * as React from 'react';
import {Link, useLocation } from "react-router-dom";
import {Button, Card, CardActions,CardContent,CardMedia, Container, CssBaseline, Grid, Box,Stack,Typography} from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import songData from '../../data/songs.json';


let songs= songData

const theme = createTheme({
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
        padding:"0.5 2rem",
        fontSize:"1rem"
      },
      outlineRectangle:{
        borderRadius: "1.25rem",
        border: "0.15rem solid #fab400",
        color: "black",
      },
    },
  },
});

const Songs = () => {
  let location = useLocation();
  const category= location.state.category;
  const image = location.state.image;
  const title = location.state.title;
  const description = location.state.description;

  let selectedCategory= ()=>{
    console.log('line 11 in songs', category)
    let findSongs = songs.filter(song => song.category === category)
    console.log("In songs.js line 13:", findSongs)
    return findSongs
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
 
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
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
            <Typography
               component="h1"
               variant="h2"
               align="center"
               color="secondary.light"
               gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="h5" align="center" color="secondary.light" paragraph>
             {description}
            </Typography>
            <Stack
             sx={{ pt: 4 }}
             direction="row"
             spacing={2}
             justifyContent="center">
              <Button variant= "h6" style={theme.palette.secondary.containRectangle}>
                <Link style={{ textDecoration: 'none' }} to='/'> back Home</Link>
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {selectedCategory(category).map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button style={theme.palette.secondary.outlineRectangle}>
                      <Link style={{ textDecoration: 'none' }}
                      to={`/${card.category}/${card.title}`}
                      state={{
                        category:card.category,
                        title:card.title,
                        video: card.video
                      }}
                      >
                        View video
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
export default Songs