import * as React from "react";
import { Link } from "gatsby";
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Stack, Box, Toolbar, Typography, Container, link } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import cupOfCoffee from '../images/cupOfCoffee.jpg';
import goodbye from '../images/goodbye.jpg'


// data
const cards = [
  {
    text: "Monring Meeting",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    image:cupOfCoffee,
    description:"Songs focusing on welcomeing and saying hello to fellow classmates at the begining of the day.",
    color: "#E95800",
  },
  {
    text: "Goodbye Songs",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    image:goodbye,
    description: "Songs for the end of the schoolday",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    image:"../images/cupOfCoffee.jpg",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    image:"../images/cupOfCoffee.jpg",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    image:"../images/cupOfCoffee.jpg",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    image:"../images/cupOfCoffee.jpg",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]
const theme =createTheme()
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
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
            border: '1px dashed grey'
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Table of Contents
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
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
                    sx={{
                      // 16:9
                      //pt: '56.25%',
                    }}
                    image= {card.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.text}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"> <Link to = '/moningmeeting/'>Let's Go!</Link></Button>
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
