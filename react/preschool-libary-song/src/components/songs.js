import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Box,  Typography, Container,Link, ButtonGroup} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { When } from 'react-if';



const Songs = props => {

  let songs = props.store.songData.filter(song => song.category === props.store.activeCategory)

  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {songs.map((song) => (
              <Grid item key={song.title} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    image={song.image}
                    title={song.title}
                  />
                  <CardContent >
                    <Typography gutterBottom variant="h5" component="h2">
                      {song.title}
                    </Typography>
                    <Typography>
                      {song.by}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View Details
                  </Button>
                  </CardActions>
                </Card>
              </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );

}

const mapStateToProps = state => ({
  store: state.songs
});

export default connect(mapStateToProps)(Songs);