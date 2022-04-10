import * as React from 'react';
import { useLocation, Link, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import songData from '../../data/songs.json';
import catData from '../../data/categories.json'
let songs= songData
let cats = catData

const theme = createTheme({
  palette: {
    primary: {
      main: "#03a9f4",
    },
    secondary: {
      light:"#fff3e0",
      main: "#ff9100",
    },
  },
});

const Songs = (card) => {
   const{category}= useParams()
  // let location = useLocation()
  // let current =  card.location || {};
  // console.log('this is current', current)
  let findCatitems= ({category})=>{
    console.log('line 39 in songs', category)
    let findCats = cats.filter(cat => cat.category === category)
    console.log("In songs.js line 43:", findCats)
    return findCats[0];
  };

  let selectedCategory= (category)=>{
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
            backgroundImage: `url(${findCatitems({category}).image})`,
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
             {findCatitems({category}).title}
            </Typography>
            <Typography variant="h5" align="center" color="secondary.light" paragraph>
            {findCatitems({category}).description}
            </Typography>
            <Button size="small" variant="contained">
              <Link to='/'> back Home</Link>
            </Button>
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
                    <Button size="small">View video</Button>
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