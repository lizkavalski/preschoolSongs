import React, {useState} from 'react';
import {Link,} from "react-router-dom";
import {Card, CardActions,CardContent,CardMedia, CssBaseline, Grid, Box, Typography, Container, Button} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import data from '../../data/categories.json'
import heroImage from '../classroom.jpg';

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





const Categories=()=> {

  // return (
  //   <div>
  //     <h1>This is the home page</h1>
  //     <Link to="songs">view songs</Link>
  //   </div>
  // );
  const [selectedCard] = useState(data)
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
                    image={card.image || `https://source.unsplash.com/random?${card.title}`}
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
                  <Button style={theme.palette.secondary.outlineRectangle}>

                    <Link style={{ textDecoration: 'none' }}
                    to={`/${card.category}`}
                    state=
                    {{
                      image:card.image,
                      title:card.title,
                      category:card.category,
                      description: card.description
                    }
                  } >View Songs</Link>
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

export default Categories;