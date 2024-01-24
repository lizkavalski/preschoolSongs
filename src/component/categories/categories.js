/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {Card, CardActions,CardContent,CardMedia, CssBaseline, Grid, Box, Typography, Container, Button,} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import data from '../../data/categories.json'
import heroImage from '../classroom.jpg';
// import TextField from '@mui/material/TextField';
// import SearchIcon from '@mui/icons-material/Search';
import SearchBar from '../searchBar/searchBar';
import axios from 'axios';

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
        fontSize:"1rem",
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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://preschool-library.onrender.com/v1/theme')
      .then(response => {
        setData(response.data.allRecords);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

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
            pb: 2,
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
             Welcome to the table of content
            </Typography>
            <Typography variant="h5" align="center" color="secondary.light" paragraph>
              Please select a theme
            </Typography>
          </Container>
        </Box>
          {/* End hero unit */}
          <Box display="flex"  alignItems="center" justifyContent="center" pt={3} zIndex={3}>
            <SearchBar placeholder='Find theme' data={data}/>
          </Box>
        <Container sx={{ py: 2 }} maxWidth="md" position='sticky'>
          <Grid container spacing={4} >
            {data.map((card) => (
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
                <Button style={theme.palette.secondary.containRectangle}>
            
                  <Link style={{ textDecoration: 'none' }}
                  to={`/${card.category}`}
                  state=
                  {{
                    image:card.image || `https://source.unsplash.com/random?${card.category}`,
                    title:card.title,
                    category:card.category,
                    description: card.description
                  }
                } >View Songs</Link>
                </Button>
                </CardActions>
              </Card>
            </Grid>))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );



}

export default Categories;