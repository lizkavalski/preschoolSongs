import * as React from "react";
import { Link ,navigate} from "gatsby";
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Stack, Box, Toolbar, Typography, Container, link } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import monringData from "../data/moningSongs.json";
import heroImage from "../images/classroom.jpg"


const songs = monringData;

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
const MorningMeeting = () => {
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
              Good Morning Meeting
            </Typography>
            <Typography variant="h5" align="center" color="secondary.light" paragraph>
            Songs focusing on welcomeing and saying hello to fellow classmates at the begining of the day
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
              >
              <Button variant="contained"><Link to= '/'>Back to main page</Link> </Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {songs.map((song) => (
              <Grid item key={song} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                  <CardMedia
                    component="img"
                    image= {song.image}
                    alt={song.title}
                    />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {song.title}
                    </Typography>
                    <Typography>
                      by {song.by}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"><Link to = "/video/" state={{url:song.video, title:song.title}}>
                         View
                        </Link>
                    </Button>
                    <Button size="small">Edit</Button>
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
export default MorningMeeting
console.log('this is songs', songs)