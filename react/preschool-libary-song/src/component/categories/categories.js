import React, {useState, useEffect} from 'react';
import {Link,} from "react-router-dom";
import {Button, Card, CardActions,CardContent,CardMedia, CssBaseline, Grid, Box, Typography, Container} from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import data from '../../data/categories.json'
import heroImage from '../classroom.jpg';
import Songs from '../songs/songs.js'



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





const Categories=()=> {

  // return (
  //   <div>
  //     <h1>This is the home page</h1>
  //     <Link to="songs">view songs</Link>
  //   </div>
  // );
  const [selectedCard, setSelectedCard] = useState(data)
  let cards= selectedCard

  // let pickedCard=({card})=>{
  //  let newData={card};
  //  console.log("this is the data", newData);
  //  return newData
  //  }
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
 
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            backgroundImage: `url(${heroImage})`,
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
             Welcome
            </Typography>
            <Typography variant="h5" align="center" color="secondary.light" paragraph>
              Please select a category
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {
              cards.map((card) => (
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
                   
                    {/* <Button size="small" >
                      <Link>
                        View Songs
                      </Link>
                    </Button> */}
                  <div>
                    <Link to={{
                      pathname:"songs",
                      selectedCard
                      :{
                        image:card.image,
                        title:card.title,
                        category:card.category,
                        description: card.description
                      }
                    }} >view songs</Link>
                   </div>
                  
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

export default Categories;