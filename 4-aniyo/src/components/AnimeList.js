import React from "react";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import { Container } from "@mui/system";
const AnimeList = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Grid>
        <Card>
          <CardMedia
            component="img"
            img="https://www.google.com"
            alt="anime-img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              Name of Anime here
            </Typography>
            <Typography>Date-aired</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              View
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};

export default AnimeList;
