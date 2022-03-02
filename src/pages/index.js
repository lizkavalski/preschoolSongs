import * as React from "react";
import { Link } from "gatsby";
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Stack, Box, Toolbar, Typography, Container, link } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import data from "../data/tableOfContent.json";
import heroImage from "../images/classroom.jpg"


// data
const cards = data
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
// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
      <title>Home Page</title>
      <Typography variant="h1" color="inherit" noWrap align="center"> 
        Song Book
      </Typography>
        <br />
      </AppBar>
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
              Table of Contents
            </Typography>
            <Typography variant="h5" align="center" color="secondary.light" paragraph>
              Preschool age songs group by catagories. 
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image= {card.image}
                    alt={card.category}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.category}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions align="center" >
                    <Button size="small" variant="contained" color="secondary"> <Link to = {card.url}>Let's Go!</Link></Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </main>
      </ThemeProvider>
  )
}

export default IndexPage
