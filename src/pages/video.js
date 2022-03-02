import * as React from "react";
import { Link ,navigate, StaticQuery} from "gatsby";
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Stack, Box, Toolbar, Typography, Container, link } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ViewVideo =({location})=>{
  return(
    <Box>
        <Typography gutterBottom variant="h5" component="h2">
                      {location.state.title}
        </Typography>
        <iframe width="560" height="315" src={location.state.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Box>
  )
}

export default ViewVideo